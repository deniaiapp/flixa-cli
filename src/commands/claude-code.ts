import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import chalk from "chalk";
import { getApiKey } from "../auth/service.ts";
import { readJson, writeJson, updateField } from "./utils.ts";
import type { Command } from "commander";

const CLAUDE_JSON = join(homedir(), ".claude.json");
const CLAUDE_SETTINGS_JSON = join(homedir(), ".claude", "settings.json");
const FLIXA_API_BASE_URL = "https://api.flixa.engineer/";

export function registerClaudeCodeCommand(program: Command): void {
  program
    .command("claude-code")
    .description("Configure Claude Code to use Flixa as the API backend")
    .action(async () => {
      const apiKey = getApiKey();
      if (!apiKey) {
        console.error(chalk.red("✗ Not logged in.") + " Run `flixa login` first.");
        process.exit(1);
      }

      let totalChanged = 0;

      // ── ~/.claude.json ──────────────────────────────────────────────
      console.log(chalk.bold("\n~/.claude.json"));
      const claudeJson = readJson(CLAUDE_JSON);

      const r1 = await updateField(claudeJson, "hasCompletedOnboarding", true, "hasCompletedOnboarding");
      const r2 = await updateField(claudeJson, "primaryApiKey", apiKey, "primaryApiKey");

      if (r1.changed || r2.changed) {
        writeJson(CLAUDE_JSON, claudeJson);
        totalChanged++;
      }

      // ── ~/.claude/settings.json ──────────────────────────────────────
      console.log(chalk.bold("\n~/.claude/settings.json → env"));
      const settings = readJson(CLAUDE_SETTINGS_JSON);
      if (typeof settings["env"] !== "object" || settings["env"] === null) {
        settings["env"] = {};
      }
      const env = settings["env"] as Record<string, unknown>;

      const r3 = await updateField(env, "ANTHROPIC_BASE_URL", FLIXA_API_BASE_URL, "ANTHROPIC_BASE_URL");
      const r4 = await updateField(env, "ANTHROPIC_API_KEY", apiKey, "ANTHROPIC_API_KEY");

      if (r3.changed || r4.changed) {
        writeJson(CLAUDE_SETTINGS_JSON, settings);
        totalChanged++;
      }

      // ── 結果 ─────────────────────────────────────────────────────────
      console.log();
      if (totalChanged > 0) {
        console.log(chalk.green("✓ Claude Code configured to use Flixa."));
      } else {
        console.log(chalk.dim("No changes made."));
      }
    });
}
