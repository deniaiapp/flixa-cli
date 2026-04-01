import { cwd } from "node:process";
import {
  createResponse,
  extractFunctionCalls,
  extractOutputText,
  extractThinkingText,
  type ChatMessage,
  type FlixaResponse,
  type ResponseInputItem,
} from "../flixa/api.ts";
import {
  executeToolCall,
  getAgentToolDefinitions,
  type ToolExecutionContext,
} from "./tools.ts";

export interface AgentRunOptions {
  apiKey: string;
  model: string;
  history: ChatMessage[];
  prompt: string;
  system?: string;
  baseUrl?: string;
  maxOutputTokens?: number;
  autoMode?: boolean;
  planMode?: boolean;
  acceptEdits?: boolean;
  signal?: AbortSignal;
  requestToolApproval?: (request: ToolApprovalRequest) => Promise<boolean>;
  onEvent?: (event: AgentRunEvent) => void;
}

export interface AgentRunResult {
  finalText: string;
  thinkingText?: string;
  finalResponse?: FlixaResponse;
  history: ChatMessage[];
}

export type AgentRunEvent =
  | { type: "tool_start"; toolName: string; summary: string }
  | { type: "tool_result"; toolName: string; summary: string; output: string }
  | { type: "assistant_text"; text: string };

type ExecutedToolResult = {
  name: string;
  summary: string;
  output: string;
};

export interface ToolApprovalRequest {
  toolName: "Bash" | "Write" | "Edit";
  title: string;
  reason: string;
  summary: string;
  details: string[];
}

const DEFAULT_AGENT_SYSTEM_PROMPT = [
  "You are Flixa CLI, an agentic coding assistant.",
  "Use the available tools when you need to inspect files, search code, edit files, or run commands.",
  "Prefer the smallest tool that can answer the question.",
  "When editing code, keep changes focused and practical.",
  "The current workspace is the user's repository root.",
].join(" ");

const MAX_TOOL_ROUNDS = 24;

export async function runAgentTurn(
  options: AgentRunOptions,
): Promise<AgentRunResult> {
  const workspaceRoot = cwd();
  const allowFileEdits = options.planMode !== true;
  const allowShell = options.planMode !== true;
  const context: ToolExecutionContext = {
    workspaceRoot,
    allowShell,
    allowFileEdits,
  };
  const combinedSystemPrompt = buildSystemPrompt(options);
  const tools = getAgentToolDefinitions({ allowShell, allowFileEdits });

  const baseHistory = [
    ...options.history,
    { role: "user" as const, content: options.prompt },
  ];

  let response = await createResponse({
    apiKey: options.apiKey,
    model: options.model,
    messages: baseHistory,
    system: combinedSystemPrompt,
    baseUrl: options.baseUrl,
    maxOutputTokens: options.maxOutputTokens,
    signal: options.signal,
    tools,
    toolChoice: "auto",
  });
  const executedToolResults: ExecutedToolResult[] = [];

  for (let round = 0; round < MAX_TOOL_ROUNDS; round += 1) {
    const functionCalls = extractFunctionCalls(response);
    if (functionCalls.length === 0) {
      const finalText =
        extractOutputText(response).trim() ||
        buildFallbackAssistantText(executedToolResults);
      const thinkingText = extractThinkingText(response);
      options.onEvent?.({ type: "assistant_text", text: finalText });
      return {
        finalText,
        thinkingText,
        finalResponse: response,
        history: [...baseHistory, { role: "assistant", content: finalText }],
      };
    }

    const toolOutputs: ResponseInputItem[] = [];
    for (const functionCall of functionCalls) {
      const summary = summarizeToolCall(
        functionCall.name,
        functionCall.argumentsText,
      );
      const approvalRequest = getToolApprovalRequest(
        functionCall.name,
        functionCall.argumentsText,
        options,
      );
      if (approvalRequest) {
        const approved = await requestToolApproval(
          approvalRequest,
          options.requestToolApproval,
        );
        if (!approved) {
          const deniedResult = createDeniedToolCallResult(
            functionCall.name,
            functionCall.callId,
            summary,
            "Permission denied by user.",
          );
          options.onEvent?.({
            type: "tool_result",
            toolName: deniedResult.name,
            summary: deniedResult.summary,
            output: deniedResult.output,
          });
          toolOutputs.push({
            type: "function_call_output",
            call_id: deniedResult.callId,
            output: deniedResult.output,
          });
          continue;
        }
      }

      options.onEvent?.({
        type: "tool_start",
        toolName: functionCall.name,
        summary,
      });

      const result = await executeToolCallSafely(
        {
          name: functionCall.name,
          argumentsText: functionCall.argumentsText,
          callId: functionCall.callId,
        },
        context,
        summary,
        options.signal,
      );

      options.onEvent?.({
        type: "tool_result",
        toolName: result.name,
        summary: result.summary,
        output: result.output,
      });
      executedToolResults.push({
        name: result.name,
        summary: result.summary,
        output: result.output,
      });

      toolOutputs.push({
        type: "function_call_output",
        call_id: result.callId,
        output: result.output,
      });
    }

    response = await createResponse({
      apiKey: options.apiKey,
      model: options.model,
      input: toolOutputs,
      previousResponseId: response.id,
      system: combinedSystemPrompt,
      baseUrl: options.baseUrl,
      maxOutputTokens: options.maxOutputTokens,
      signal: options.signal,
      tools,
      toolChoice: "auto",
    });
  }

  throw new Error("Tool loop exceeded the maximum number of rounds.");
}

function summarizeToolCall(toolName: string, argumentsText: string): string {
  const parsed = safeParseArguments(argumentsText);
  const filePath = getStringArgument(parsed, "file_path");
  if (filePath) {
    return filePath;
  }

  const path = getStringArgument(parsed, "path");
  const pattern = getStringArgument(parsed, "pattern");
  const command = getStringArgument(parsed, "command");

  if (command) {
    return shorten(command, 100);
  }

  if (toolName === "Grep" && pattern) {
    return path ? `${pattern} in ${path}` : pattern;
  }

  if (toolName === "Glob" && path) {
    return path;
  }

  if (pattern) {
    return pattern;
  }

  if (path) {
    return path;
  }

  const compact = argumentsText.replace(/\s+/g, " ").trim();
  return compact ? shorten(compact, 100) : toolName;
}

function getToolApprovalRequest(
  toolName: string,
  argumentsText: string,
  options: Pick<AgentRunOptions, "autoMode" | "acceptEdits" | "planMode">,
): ToolApprovalRequest | null {
  if (options.planMode) {
    return null;
  }

  const parsed = safeParseArguments(argumentsText);
  switch (toolName) {
    case "Bash":
      if (options.autoMode) {
        return null;
      }
      return {
        toolName,
        title: "Approve bash command?",
        reason: "Shell commands require approval in this mode.",
        summary: summarizeToolCall(toolName, argumentsText),
        details: [
          `command: ${previewForDisplay(getStringArgument(parsed, "command"))}`,
        ],
      };
    case "Write":
      if (options.autoMode || options.acceptEdits) {
        return null;
      }
      return {
        toolName,
        title: "Approve file write?",
        reason: "File writes require approval in default mode.",
        summary: summarizeToolCall(toolName, argumentsText),
        details: [
          `file: ${previewForDisplay(getStringArgument(parsed, "file_path"))}`,
          `bytes: ${String(
            Buffer.byteLength(
              getStringArgument(parsed, "content") ?? "",
              "utf-8",
            ),
          )}`,
        ],
      };
    case "Edit":
      if (options.autoMode || options.acceptEdits) {
        return null;
      }
      return {
        toolName,
        title: "Approve file edit?",
        reason: "File edits require approval in default mode.",
        summary: summarizeToolCall(toolName, argumentsText),
        details: [
          `file: ${previewForDisplay(getStringArgument(parsed, "file_path"))}`,
          `replace: ${previewForDisplay(getStringArgument(parsed, "old_string"))}`,
          `with: ${previewForDisplay(getStringArgument(parsed, "new_string"))}`,
        ],
      };
    default:
      return null;
  }
}

async function requestToolApproval(
  request: ToolApprovalRequest,
  approvalHandler: AgentRunOptions["requestToolApproval"],
): Promise<boolean> {
  if (!approvalHandler) {
    return false;
  }

  return approvalHandler(request);
}

function createDeniedToolCallResult(
  toolName: string,
  callId: string,
  summary: string,
  reason: string,
): {
  name: string;
  callId: string;
  output: string;
  summary: string;
} {
  return {
    name: toolName,
    callId,
    output: JSON.stringify(
      {
        ok: false,
        tool: toolName,
        denied: true,
        reason,
      },
      null,
      2,
    ),
    summary: `Denied ${toolName} ${summary}`.trim(),
  };
}

async function executeToolCallSafely(
  request: Parameters<typeof executeToolCall>[0],
  context: ToolExecutionContext,
  summary: string,
  signal?: AbortSignal,
): Promise<Awaited<ReturnType<typeof executeToolCall>>> {
  try {
    return await executeToolCall(request, context);
  } catch (error) {
    if (signal?.aborted || isAbortError(error)) {
      throw error;
    }

    return createFailedToolCallResult(
      request.name,
      request.callId,
      summary,
      error,
    );
  }
}

function createFailedToolCallResult(
  toolName: string,
  callId: string,
  summary: string,
  error: unknown,
): {
  name: string;
  callId: string;
  output: string;
  summary: string;
} {
  const message = error instanceof Error ? error.message : String(error);
  return {
    name: toolName,
    callId,
    output: JSON.stringify(
      {
        ok: false,
        tool: toolName,
        error: message,
      },
      null,
      2,
    ),
    summary: `${toolName}${formatToolTarget(summary, toolName)} failed: ${message}`,
  };
}

function buildSystemPrompt(options: AgentRunOptions): string {
  const promptSections = [DEFAULT_AGENT_SYSTEM_PROMPT];

  if (options.planMode) {
    promptSections.push(
      "Plan mode is enabled. You may inspect the repository, read files, and analyze code, but you must not make changes or propose that changes were applied. Produce a concrete implementation plan with relevant files, steps, and risks.",
    );
  }

  if (options.system?.trim()) {
    promptSections.push(options.system.trim());
  }

  return promptSections.join("\n\n");
}

function safeParseArguments(argumentsText: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(argumentsText) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return parsed as Record<string, unknown>;
  } catch {
    return {};
  }
}

function getStringArgument(
  args: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = args[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function shorten(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength)}…` : value;
}

function previewForDisplay(value: string | undefined): string {
  if (!value) {
    return "(empty)";
  }

  return shorten(value.replace(/\s+/g, " ").trim(), 120);
}

function formatToolTarget(summary: string, toolName: string): string {
  if (!summary || summary === toolName) {
    return "";
  }

  return ` ${summary}`;
}

function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === "AbortError";
}

function buildFallbackAssistantText(
  results: readonly ExecutedToolResult[],
): string {
  const lastResult = results[results.length - 1];
  if (!lastResult) {
    return "";
  }

  const payload = safeParseToolOutput(lastResult.output);
  if (!payload) {
    return lastResult.summary;
  }

  if (lastResult.name === "Bash") {
    const command = getStringArgument(payload, "command");
    const stderr = getStringArgument(payload, "stderr")?.trim();
    const timedOut = payload["timed_out"] === true;
    const exitCode =
      typeof payload["exit_code"] === "number" ? payload["exit_code"] : null;

    if (timedOut) {
      return command ? `Command timed out: ${command}` : "Command timed out.";
    }

    if (exitCode !== null && exitCode !== 0) {
      if (command && stderr) {
        return `Command failed: ${command}\n${shorten(stderr, 240)}`;
      }
      if (command) {
        return `Command failed: ${command} (exit code ${exitCode})`;
      }
    }
  }

  const error = getStringArgument(payload, "error")?.trim();
  if (error) {
    return `${lastResult.name} failed: ${error}`;
  }

  return lastResult.summary;
}

function safeParseToolOutput(output: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(output) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }
    return parsed as Record<string, unknown>;
  } catch {
    return null;
  }
}
