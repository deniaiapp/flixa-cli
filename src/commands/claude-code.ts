import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { confirm } from "@inquirer/prompts";
import chalk from "chalk";
import { getApiKey } from "../auth/service.ts";
import type { Command } from "commander";

const CLAUDE_JSON = join(homedir(), ".claude.json");
const CLAUDE_SETTINGS_JSON = join(homedir(), ".claude", "settings.json");
const FLIXA_API_BASE_URL = "https://api.flixa.engineer/";

function readJson(path: string): Record<string, unknown> {
  if (!existsSync(path)) return {};
  try {
    return JSON.parse(readFileSync(path, "utf-8")) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function writeJson(path: string, data: Record<string, unknown>): void {
  const dir = join(path, "..");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", { mode: 0o600 });
}

/** Update a field with optional confirmation. Skip if same value, confirm if different, set silently if unset. */
async function updateField(
  obj: Record<string, unknown>,
  key: string,
  newValue: unknown,
  label: string
): Promise<{ changed: boolean; skipped: boolean }> {
  const current = obj[key];

  if (current === newValue) {
    console.log(chalk.dim(`  ${label}: already set, skipping`));
    return { changed: false, skipped: true };
  }

  if (current !== undefined) {
    const masked =
      typeof current === "string" && current.startsWith("deni_")
        ? current.slice(0, 10) + "****"
        : String(current);
    const ok = await confirm({
      message: `  ${label}: current value is ${chalk.yellow(masked)}, replace?`,
      default: true,
    });
    if (!ok) {
      console.log(chalk.dim(`  ${label}: skipped`));
      return { changed: false, skipped: true };
    }
  }

  obj[key] = newValue;
  return { changed: true, skipped: false };
}

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
