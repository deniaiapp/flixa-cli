import chalk from "chalk";
import { cwd } from "node:process";
import type { Command } from "commander";
import { getDefaultProvider } from "../config/store.ts";
import {
  buildShareCard,
  writeShareCard,
} from "../runs/share-card.ts";
import {
  loadLatestSessionForCwd,
  loadSessionById,
} from "../sessions/store.ts";

type ShareOptions = {
  session?: string;
  output?: string;
  json?: boolean;
};

export function registerShareCommand(program: Command): void {
  program
    .command("share")
    .alias("recap")
    .description("Create a redacted, shareable card from a coding session")
    .option("--session <sessionId>", "Use a specific saved session")
    .option("-o, --output <path>", "Write the card to a Markdown file")
    .option("--json", "Print card metadata as JSON")
    .action((options: ShareOptions, command: Command) => {
      const resolvedOptions = {
        ...(command.parent?.opts?.() as Partial<ShareOptions> | undefined),
        ...options,
      };
      const session = resolvedOptions.session
        ? loadSessionById(resolvedOptions.session)
        : loadLatestSessionForCwd(cwd());
      if (!session) {
        throw new Error(
          resolvedOptions.session
            ? `Session not found: ${resolvedOptions.session}`
            : "No saved session found in this directory.",
        );
      }

      const lastUserPrompt = [...session.history]
        .reverse()
        .find((message) => message.role === "user")?.content;
      const lastAssistantText = [...session.history]
        .reverse()
        .find((message) => message.role === "assistant")?.content;
      const card = buildShareCard({
        workspaceRoot: session.cwd || cwd(),
        prompt: lastUserPrompt || "Flixa coding session",
        provider: session.provider || getDefaultProvider(),
        model: session.model,
        finalText: lastAssistantText || "No assistant result yet.",
        startedAt: session.createdAt,
        endedAt: session.updatedAt,
        sessionId: session.id,
        planMode: session.planMode,
      });

      let outputPath: string | undefined;
      if (resolvedOptions.output) {
        outputPath = writeShareCard(
          card,
          resolvedOptions.output,
          session.cwd || cwd(),
        );
      }

      if (resolvedOptions.json) {
        console.log(
          JSON.stringify(
            {
              session_id: session.id,
              provider: session.provider || getDefaultProvider(),
              model: session.model,
              output_path: outputPath || null,
              card,
            },
            null,
            2,
          ),
        );
        return;
      }

      if (outputPath) {
        console.log(chalk.green(`✓ Share card saved to ${outputPath}`));
      } else {
        console.log(card);
      }
    });
}
