import { spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { readdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import type { FunctionToolDefinition } from "../flixa/api.ts";

const DEFAULT_BASH_TIMEOUT_MS = 30_000;
const MAX_TOOL_OUTPUT_CHARS = 16_000;
const MAX_READ_CHARS = 24_000;
const require = createRequire(import.meta.url);

export interface ToolCallRequest {
  name: string;
  argumentsText: string;
  callId: string;
}

export interface ToolExecutionContext {
  workspaceRoot: string;
}

export interface ToolCallResult {
  name: string;
  callId: string;
  output: string;
  summary: string;
}

type ToolHandler = (
  args: Record<string, unknown>,
  context: ToolExecutionContext,
) => Promise<ToolHandlerResult>;

interface ToolHandlerResult {
  output: string;
  summary: string;
}

interface RegisteredTool {
  definition: FunctionToolDefinition;
  handler: ToolHandler;
}

export const AGENT_TOOLS: RegisteredTool[] = [
  {
    definition: {
      type: "function",
      name: "Bash",
      description:
        "Run a shell command in the workspace. Uses PowerShell on Windows and bash on Unix-like systems.",
      parameters: {
        type: "object",
        properties: {
          command: {
            type: "string",
            description: "Shell command to execute.",
          },
          timeout_ms: {
            type: "integer",
            description:
              "Optional timeout in milliseconds. Defaults to 30000.",
          },
        },
        required: ["command"],
        additionalProperties: false,
      },
    },
    handler: async (args, context) => runShellCommand(args, context),
  },
  {
    definition: {
      type: "function",
      name: "Read",
      description: "Read a text file from the workspace.",
      parameters: {
        type: "object",
        properties: {
          file_path: {
            type: "string",
            description: "Path to a file relative to the workspace root.",
          },
          start_line: {
            type: "integer",
            description: "1-based start line to read.",
          },
          end_line: {
            type: "integer",
            description: "1-based end line to read.",
          },
        },
        required: ["file_path"],
        additionalProperties: false,
      },
    },
    handler: async (args, context) => readFileTool(args, context),
  },
  {
    definition: {
      type: "function",
      name: "Write",
      description:
        "Write a full text file in the workspace, creating parent directories if needed.",
      parameters: {
        type: "object",
        properties: {
          file_path: {
            type: "string",
            description: "Path to a file relative to the workspace root.",
          },
          content: {
            type: "string",
            description: "Full file contents to write.",
          },
        },
        required: ["file_path", "content"],
        additionalProperties: false,
      },
    },
    handler: async (args, context) => writeFileTool(args, context),
  },
  {
    definition: {
      type: "function",
      name: "Edit",
      description:
        "Replace text inside a file. Useful for targeted edits without rewriting the whole file.",
      parameters: {
        type: "object",
        properties: {
          file_path: {
            type: "string",
            description: "Path to a file relative to the workspace root.",
          },
          old_string: {
            type: "string",
            description: "Text to replace.",
          },
          new_string: {
            type: "string",
            description: "Replacement text.",
          },
          replace_all: {
            type: "boolean",
            description: "Replace all occurrences instead of exactly one.",
          },
        },
        required: ["file_path", "old_string", "new_string"],
        additionalProperties: false,
      },
    },
    handler: async (args, context) => editFileTool(args, context),
  },
  {
    definition: {
      type: "function",
      name: "Grep",
      description:
        "Search for a regex pattern in files under the workspace using ripgrep.",
      parameters: {
        type: "object",
        properties: {
          pattern: {
            type: "string",
            description: "Regex pattern to search for.",
          },
          path: {
            type: "string",
            description:
              "Optional directory or file path relative to the workspace root.",
          },
          glob: {
            type: "string",
            description: "Optional glob filter such as *.ts or src/**/*.tsx.",
          },
        },
        required: ["pattern"],
        additionalProperties: false,
      },
    },
    handler: async (args, context) => grepTool(args, context),
  },
  {
    definition: {
      type: "function",
      name: "Glob",
      description:
        "List files in the workspace, optionally filtered by a glob pattern.",
      parameters: {
        type: "object",
        properties: {
          pattern: {
            type: "string",
            description:
              "Optional glob pattern such as *.ts or src/**/*.tsx.",
          },
          path: {
            type: "string",
            description: "Optional directory path relative to the workspace root.",
          },
        },
        additionalProperties: false,
      },
    },
    handler: async (args, context) => globTool(args, context),
  },
];

export function getAgentToolDefinitions(): FunctionToolDefinition[] {
  return AGENT_TOOLS.map((tool) => tool.definition);
}

export async function executeToolCall(
  request: ToolCallRequest,
  context: ToolExecutionContext,
): Promise<ToolCallResult> {
  const tool = AGENT_TOOLS.find((candidate) => candidate.definition.name === request.name);
  if (!tool) {
    throw new Error(`Unknown tool: ${request.name}`);
  }

  const args = parseArguments(request.argumentsText);
  const result = await tool.handler(args, context);
  return {
    name: request.name,
    callId: request.callId,
    output: result.output,
    summary: result.summary,
  };
}

function parseArguments(argumentsText: string): Record<string, unknown> {
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

async function runShellCommand(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const command = getRequiredString(args, "command");
  const timeoutMs =
    getOptionalInteger(args, "timeout_ms") ?? DEFAULT_BASH_TIMEOUT_MS;

  const { executable, executableArgs } = getShellInvocation(command);

  const result = await runProcess(executable, executableArgs, {
    cwd: context.workspaceRoot,
    timeoutMs,
  });

  const output = JSON.stringify(result, null, 2);
  return {
    output: truncate(output),
    summary: `Bash finished with exit code ${result.exit_code}`,
  };
}

async function readFileTool(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const filePath = resolveWorkspacePath(
    getRequiredString(args, "file_path"),
    context.workspaceRoot,
  );
  const startLine = getOptionalInteger(args, "start_line") ?? 1;
  const endLine = getOptionalInteger(args, "end_line");

  const content = readFileSync(filePath, "utf-8");
  const allLines = content.split(/\r?\n/);
  const start = Math.max(1, startLine);
  const end = endLine ? Math.min(allLines.length, endLine) : allLines.length;
  const selected = allLines.slice(start - 1, end);
  const rendered = selected.join("\n");

  const output = JSON.stringify(
    {
      file_path: toWorkspaceRelative(filePath, context.workspaceRoot),
      start_line: start,
      end_line: end,
      total_lines: allLines.length,
      content: truncate(rendered, MAX_READ_CHARS),
    },
    null,
    2,
  );

  return {
    output,
    summary: `Read ${toWorkspaceRelative(filePath, context.workspaceRoot)}`,
  };
}

async function writeFileTool(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const filePath = resolveWorkspacePath(
    getRequiredString(args, "file_path"),
    context.workspaceRoot,
  );
  const content = getRequiredString(args, "content");

  const parent = resolve(filePath, "..");
  if (!existsSync(parent)) {
    mkdirSync(parent, { recursive: true });
  }
  writeFileSync(filePath, content, "utf-8");

  const relativePath = toWorkspaceRelative(filePath, context.workspaceRoot);
  return {
    output: JSON.stringify(
      {
        file_path: relativePath,
        bytes_written: Buffer.byteLength(content, "utf-8"),
      },
      null,
      2,
    ),
    summary: `Wrote ${relativePath}`,
  };
}

async function editFileTool(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const filePath = resolveWorkspacePath(
    getRequiredString(args, "file_path"),
    context.workspaceRoot,
  );
  const oldString = getRequiredString(args, "old_string");
  const newString = getRequiredString(args, "new_string");
  const replaceAll = Boolean(args["replace_all"]);

  const original = readFileSync(filePath, "utf-8");
  const occurrences = countOccurrences(original, oldString);
  if (occurrences === 0) {
    throw new Error("Edit failed: old_string was not found.");
  }
  if (!replaceAll && occurrences > 1) {
    throw new Error(
      "Edit failed: old_string matched multiple locations. Use replace_all=true.",
    );
  }

  const updated = replaceAll
    ? original.split(oldString).join(newString)
    : original.replace(oldString, newString);
  writeFileSync(filePath, updated, "utf-8");

  const relativePath = toWorkspaceRelative(filePath, context.workspaceRoot);
  return {
    output: JSON.stringify(
      {
        file_path: relativePath,
        replacements: replaceAll ? occurrences : 1,
      },
      null,
      2,
    ),
    summary: `Edited ${relativePath}`,
  };
}

async function grepTool(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const pattern = getRequiredString(args, "pattern");
  const searchRoot = args["path"]
    ? resolveWorkspacePath(getRequiredString(args, "path"), context.workspaceRoot)
    : context.workspaceRoot;
  const glob = getOptionalString(args, "glob");

  const commandArgs = ["-n", "--no-heading", "--color", "never", pattern];
  if (glob) {
    commandArgs.push("-g", glob);
  }
  commandArgs.push(searchRoot);

  const result = await runProcess(getRipgrepExecutable(), commandArgs, {
    cwd: context.workspaceRoot,
    timeoutMs: DEFAULT_BASH_TIMEOUT_MS,
  });

  const output = JSON.stringify(
    {
      exit_code: result.exit_code,
      stdout: truncate(result.stdout),
      stderr: truncate(result.stderr),
    },
    null,
    2,
  );

  return {
    output,
    summary: `Grep searched for ${JSON.stringify(pattern)}`,
  };
}

async function globTool(
  args: Record<string, unknown>,
  context: ToolExecutionContext,
): Promise<ToolHandlerResult> {
  const root = args["path"]
    ? resolveWorkspacePath(getRequiredString(args, "path"), context.workspaceRoot)
    : context.workspaceRoot;
  const pattern = getOptionalString(args, "pattern");

  let files: string[];
  if (pattern) {
    const result = await runProcess(
      getRipgrepExecutable(),
      ["--files", "-g", pattern, root],
      {
        cwd: context.workspaceRoot,
        timeoutMs: DEFAULT_BASH_TIMEOUT_MS,
      },
    );
    files = result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } else {
    files = await collectFiles(root, context.workspaceRoot);
  }

  const normalized = files
    .map((file) => normalizeListedPath(file, context.workspaceRoot))
    .slice(0, 500);

  return {
    output: JSON.stringify({ files: normalized }, null, 2),
    summary: `Listed ${normalized.length} files`,
  };
}

async function collectFiles(
  directory: string,
  workspaceRoot: string,
): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(absolutePath, workspaceRoot)));
      continue;
    }

    if (entry.isFile()) {
      files.push(toWorkspaceRelative(absolutePath, workspaceRoot));
    }
  }

  return files;
}

function normalizeListedPath(pathValue: string, workspaceRoot: string): string {
  if (isAbsolute(pathValue)) {
    return toWorkspaceRelative(pathValue, workspaceRoot);
  }
  return pathValue.replace(/\\/g, "/");
}

function resolveWorkspacePath(pathValue: string, workspaceRoot: string): string {
  const absolutePath = isAbsolute(pathValue)
    ? resolve(pathValue)
    : resolve(workspaceRoot, pathValue);
  const relativePath = relative(workspaceRoot, absolutePath);

  if (
    relativePath === "" ||
    (!relativePath.startsWith("..") && !relativePath.includes(`..${sep}`))
  ) {
    return absolutePath;
  }

  throw new Error(
    `Path must stay inside the workspace: ${toPortablePath(pathValue)}`,
  );
}

function toWorkspaceRelative(pathValue: string, workspaceRoot: string): string {
  const relativePath = relative(workspaceRoot, pathValue);
  return relativePath ? relativePath.replace(/\\/g, "/") : ".";
}

function getRequiredString(
  args: Record<string, unknown>,
  key: string,
): string {
  const value = args[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required string: ${key}`);
  }
  return value;
}

function getOptionalString(
  args: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = args[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function getOptionalInteger(
  args: Record<string, unknown>,
  key: string,
): number | undefined {
  const value = args[key];
  return typeof value === "number" && Number.isInteger(value)
    ? value
    : undefined;
}

function countOccurrences(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }

  let count = 0;
  let index = 0;
  while (true) {
    const found = haystack.indexOf(needle, index);
    if (found === -1) {
      return count;
    }
    count += 1;
    index = found + needle.length;
  }
}

function truncate(value: string, maxLength = MAX_TOOL_OUTPUT_CHARS): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}\n...truncated...`;
}

function toPortablePath(value: string): string {
  return value.replace(/\\/g, "/");
}

function getRipgrepExecutable(): string {
  try {
    const packageJsonPath = require.resolve("@vscode/ripgrep/package.json");
    const rgExecutable = join(
      dirname(packageJsonPath),
      "bin",
      process.platform === "win32" ? "rg.exe" : "rg",
    );

    if (existsSync(rgExecutable)) {
      return rgExecutable;
    }
  } catch {
    // Fall back to PATH-based resolution below.
  }

  return "rg";
}

function getShellInvocation(command: string): {
  executable: string;
  executableArgs: string[];
} {
  if (process.platform === "win32") {
    return {
      executable: "powershell",
      executableArgs: ["-NoProfile", "-Command", command],
    };
  }

  return {
    executable: process.env.SHELL || "bash",
    executableArgs: ["-lc", command],
  };
}

async function runProcess(
  executable: string,
  args: string[],
  options: {
    cwd: string;
    timeoutMs: number;
  },
): Promise<{
  stdout: string;
  stderr: string;
  exit_code: number | null;
  timed_out: boolean;
}> {
  return await new Promise((resolvePromise, reject) => {
    const child = spawn(executable, args, {
      cwd: options.cwd,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let resolved = false;
    let timedOut = false;

    const timeout = setTimeout(() => {
      timedOut = true;
      child.kill();
    }, options.timeoutMs);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("error", (error) => {
      clearTimeout(timeout);
      if (!resolved) {
        resolved = true;
        reject(error);
      }
    });
    child.on("close", (code) => {
      clearTimeout(timeout);
      if (resolved) {
        return;
      }
      resolved = true;
      resolvePromise({
        stdout: truncate(stdout),
        stderr: truncate(stderr),
        exit_code: code,
        timed_out: timedOut,
      });
    });
  });
}
