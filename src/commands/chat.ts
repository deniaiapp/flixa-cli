import chalk from "chalk";
import { select } from "@inquirer/prompts";
import { cwd } from "node:process";
import type { Command } from "commander";
import {
  DEFAULT_FLIXA_BASE_URL,
  DEFAULT_FLIXA_MODEL,
  resolveFlixaApiKey,
  type ChatMessage,
  type FlixaResponse,
} from "../flixa/api.ts";
import { runAgentTurn } from "../agent-tools/runner.ts";
import { runInteractiveChatApp } from "../ui/chat-app.tsx";
import { getPersistedModel, setPersistedModel } from "../config/store.ts";
import {
  createSession,
  formatRecentSessionLabel,
  listRecentSessions,
  loadLatestSessionForCwd,
  loadSessionById,
  saveSession,
  type StoredChatSession,
} from "../sessions/store.ts";

type RawChatOptions = {
  model?: string;
  system?: string;
  stream?: boolean;
  json?: boolean;
  baseUrl?: string;
  maxOutputTokens?: string;
  continue?: boolean;
  resume?: string | boolean;
};

type ChatOptions = {
  model: string;
  system?: string;
  stream: boolean;
  json: boolean;
  baseUrl: string;
  maxOutputTokens?: number;
  continue: boolean;
  resume?: string | boolean;
};

export function registerChatCommand(program: Command): void {
  applyChatOptions(program);
  program
    .argument("[prompt...]", "Prompt to send to Flixa")
    .action(async (promptParts: string[], options: RawChatOptions) => {
      await runChatCommandWithExit(promptParts, options);
    });

  const chatCommand = program
    .command("chat")
    .description("Chat with Flixa from the terminal");

  applyChatOptions(chatCommand);
  chatCommand
    .argument("[prompt...]", "Prompt to send to Flixa")
    .action(async (promptParts: string[], options: RawChatOptions) => {
      await runChatCommandWithExit(promptParts, options);
    });

  const resumeCommand = program
    .command("resume")
    .description("Resume a saved Flixa conversation");

  applyChatOptions(resumeCommand);
  resumeCommand
    .argument("[sessionId]", "Session id to resume")
    .argument("[prompt...]", "Optional prompt to send after resuming")
    .action(
      async (
        sessionId: string | undefined,
        promptParts: string[],
        options: RawChatOptions,
      ) => {
        await runChatCommandWithExit(promptParts, {
          ...options,
          resume: sessionId || true,
        });
      },
    );
}

function applyChatOptions(command: Command): void {
  const defaultModel = getPersistedModel() || DEFAULT_FLIXA_MODEL;
  command
    .option("-m, --model <model>", "Model to use", defaultModel)
    .option("-s, --system <prompt>", "System prompt")
    .option(
      "--base-url <url>",
      "Override the Flixa API base URL",
      DEFAULT_FLIXA_BASE_URL,
    )
    .option("--json", "Print the raw JSON response")
    .option("--no-stream", "Disable streaming output")
    .option("--max-output-tokens <tokens>", "Limit response tokens")
    .option("-c, --continue", "Continue the latest conversation in this directory")
    .option("-r, --resume [sessionId]", "Resume a conversation by session id or pick from recent");
}

async function runChatCommand(
  promptParts: string[],
  rawOptions: RawChatOptions,
): Promise<void> {
  const apiKey = resolveFlixaApiKey();
  if (!apiKey) {
    console.error(chalk.red("✗ Not logged in.") + " Run `flixa login` first.");
    process.exit(1);
  }

  const options = normalizeOptions(rawOptions);
  const session = await resolveSession(options);
  const promptFromArgs = promptParts.join(" ").trim();
  const promptFromStdin = promptFromArgs ? null : await readPromptFromStdin();

  if (promptFromArgs || promptFromStdin) {
    const prompt = promptFromArgs || promptFromStdin || "";
    await runSingleTurn(apiKey, options, session, prompt);
    return;
  }

  await runInteractiveChat(apiKey, options, session);
}

async function runChatCommandWithExit(
  promptParts: string[],
  rawOptions: RawChatOptions,
): Promise<void> {
  try {
    await runChatCommand(promptParts, rawOptions);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(chalk.red("✗ Command failed:") + ` ${message}`);
    process.exit(1);
  }
}

function normalizeOptions(rawOptions: RawChatOptions): ChatOptions {
  const maxOutputTokens = parseIntegerOption(
    rawOptions.maxOutputTokens,
    "--max-output-tokens",
  );

  return {
    model: rawOptions.model?.trim() || getPersistedModel() || DEFAULT_FLIXA_MODEL,
    system: rawOptions.system?.trim() || undefined,
    stream: rawOptions.stream ?? true,
    json: rawOptions.json ?? false,
    baseUrl: rawOptions.baseUrl?.trim() || DEFAULT_FLIXA_BASE_URL,
    maxOutputTokens,
    continue: rawOptions.continue ?? false,
    resume: rawOptions.resume,
  };
}

async function readPromptFromStdin(): Promise<string | null> {
  if (process.stdin.isTTY) {
    return null;
  }

  const chunks: Uint8Array[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  const prompt = Buffer.concat(chunks).toString("utf-8").trim();
  return prompt || null;
}

async function runInteractiveChat(
  apiKey: string,
  options: ChatOptions,
  session: StoredChatSession,
): Promise<void> {
  await runInteractiveChatApp(apiKey, options, session);
}

async function runSingleTurn(
  apiKey: string,
  options: ChatOptions,
  session: StoredChatSession,
  prompt: string,
): Promise<void> {
  let assistantText = "";
  let rawResponse: FlixaResponse | undefined;

  if (!options.json) {
    process.stdout.write(chalk.green("flixa> "));
  }

  try {
    const result = await runAgentTurn({
      apiKey,
      model: options.model,
      history: session.history,
      prompt,
      system: options.system,
      baseUrl: options.baseUrl,
      maxOutputTokens: options.maxOutputTokens,
      onEvent: options.json
        ? undefined
        : (event) => {
            if (event.type === "tool_start") {
              process.stdout.write(`\n${chalk.dim(`· ${event.summary}`)}\n`);
            }
          },
    });

    assistantText = result.finalText;
    rawResponse = result.finalResponse;
    session.history = result.history;
    session.model = options.model;
    session.system = options.system;
    setPersistedModel(options.model);
    saveSession(session);

    if (options.json) {
      console.log(JSON.stringify(rawResponse, null, 2));
      console.log();
    } else {
      console.log(`\n${assistantText || chalk.dim("[no text output]")}\n`);
    }
  } catch (error) {
    if (!options.json) {
      process.stdout.write("\n");
    }
    const message = error instanceof Error ? error.message : String(error);
    console.error(chalk.red("✗ Request failed:") + ` ${message}`);
    process.exitCode = 1;
    return;
  }
}

async function resolveSession(options: ChatOptions): Promise<StoredChatSession> {
  const currentCwd = cwd();

  if (options.resume) {
    if (typeof options.resume === "string") {
      const session = loadSessionById(options.resume);
      if (!session) {
        throw new Error(`Session not found: ${options.resume}`);
      }
      return session;
    }

    const recent = listRecentSessions(20);
    if (recent.length === 0) {
      throw new Error("No saved sessions found.");
    }

    const pickedId = await select({
      message: "Resume which conversation?",
      choices: recent.map((session) => ({
        name: formatRecentSessionLabel(session),
        value: session.id,
      })),
    });

    const picked = loadSessionById(pickedId);
    if (!picked) {
      throw new Error(`Session not found: ${pickedId}`);
    }
    return picked;
  }

  if (options.continue) {
    const session = loadLatestSessionForCwd(currentCwd);
    if (!session) {
      throw new Error("No conversation found to continue in this directory.");
    }
    return session;
  }

  const session = createSession(currentCwd, options.model, options.system);
  saveSession(session);
  return session;
}
function parseIntegerOption(
  value: string | undefined,
  optionName: string,
): number | undefined {
  if (!value) {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${optionName} must be a positive integer.`);
  }

  return parsed;
}
