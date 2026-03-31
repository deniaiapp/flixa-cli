import { cwd } from "node:process";
import {
  createResponse,
  extractFunctionCalls,
  extractOutputText,
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
  signal?: AbortSignal;
  onEvent?: (event: AgentRunEvent) => void;
}

export interface AgentRunResult {
  finalText: string;
  finalResponse?: FlixaResponse;
  history: ChatMessage[];
}

export type AgentRunEvent =
  | { type: "tool_start"; toolName: string; summary: string }
  | { type: "tool_result"; toolName: string; summary: string; output: string }
  | { type: "assistant_text"; text: string };

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
  const context: ToolExecutionContext = { workspaceRoot };
  const combinedSystemPrompt = options.system?.trim()
    ? `${DEFAULT_AGENT_SYSTEM_PROMPT}\n\n${options.system.trim()}`
    : DEFAULT_AGENT_SYSTEM_PROMPT;

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
    tools: getAgentToolDefinitions(),
    toolChoice: "auto",
  });

  for (let round = 0; round < MAX_TOOL_ROUNDS; round += 1) {
    const functionCalls = extractFunctionCalls(response);
    if (functionCalls.length === 0) {
      const finalText = extractOutputText(response);
      options.onEvent?.({ type: "assistant_text", text: finalText });
      return {
        finalText,
        finalResponse: response,
        history: [...baseHistory, { role: "assistant", content: finalText }],
      };
    }

    const toolOutputs: ResponseInputItem[] = [];
    for (const functionCall of functionCalls) {
      options.onEvent?.({
        type: "tool_start",
        toolName: functionCall.name,
        summary: summarizeToolCall(functionCall.name, functionCall.argumentsText),
      });

      const result = await executeToolCall(
        {
          name: functionCall.name,
          argumentsText: functionCall.argumentsText,
          callId: functionCall.callId,
        },
        context,
      );

      options.onEvent?.({
        type: "tool_result",
        toolName: result.name,
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
      tools: getAgentToolDefinitions(),
      toolChoice: "auto",
    });
  }

  throw new Error("Tool loop exceeded the maximum number of rounds.");
}

function summarizeToolCall(toolName: string, argumentsText: string): string {
  const compact = argumentsText.replace(/\s+/g, " ").trim();
  const shortened =
    compact.length > 100 ? `${compact.slice(0, 100)}…` : compact;
  return `${toolName} ${shortened}`;
}
