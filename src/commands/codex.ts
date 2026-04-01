import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  appendFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { join, basename } from "node:path";
import { confirm } from "@inquirer/prompts";
import chalk from "chalk";
import { getApiKey } from "../auth/service.ts";
import { readJson, writeJson, updateField } from "./utils.ts";
import type { Command } from "commander";

const CODEX_DIR = join(homedir(), ".codex");
const CODEX_CONFIG_TOML = join(CODEX_DIR, "config.toml");
const CODEX_AUTH_JSON = join(CODEX_DIR, "auth.json");

const FLIXA_TOML_SECTION = `[model_providers.flixa]
name = "flixa"
base_url = "https://api.flixa.engineer/v1/agent"
wire_api = "responses"`;

function readToml(path: string): string {
  if (!existsSync(path)) return "";
  try {
    return readFileSync(path, "utf-8");
  } catch {
    return "";
  }
}

function writeToml(path: string, content: string): void {
  const dir = join(path, "..");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, content, { mode: 0o600 });
}

/** Insert or replace the [model_providers.flixa] section in a TOML string. */
function upsertFlixaSection(content: string): string {
  const header = "[model_providers.flixa]";
  const idx = content.indexOf(header);

  if (idx === -1) {
    const sep = content.length > 0 && !content.endsWith("\n\n") ? "\n\n" : "";
    return content + sep + FLIXA_TOML_SECTION + "\n";
  }

  const afterHeader = idx + header.length;
  const nextSection = content.slice(afterHeader).search(/\n\[/);
  const end =
    nextSection === -1 ? content.length : afterHeader + nextSection + 1;

  return content.slice(0, idx) + FLIXA_TOML_SECTION + "\n" + content.slice(end);
}

type ShellConfig = {
  rcFile: string;
  aliasLine: string;
  applyHint: string;
};

function detectShellConfig(): ShellConfig {
  if (process.platform === "win32") {
    const rcFile = join(
      homedir(),
      "Documents",
      "PowerShell",
      "Microsoft.PowerShell_profile.ps1",
    );
    return {
      rcFile,
      aliasLine:
        "function codex { $exe = Get-Command -Name codex -CommandType Application | Select-Object -First 1; & $exe.Source -c model_provider=flixa @args }",
      applyHint: ". $PROFILE",
    };
  }
  const shell = process.env.SHELL ?? "";
  if (shell.includes("zsh")) {
    return {
      rcFile: join(homedir(), ".zshrc"),
      aliasLine: "alias codex='codex -c model_provider=flixa'",
      applyHint: "source ~/.zshrc",
    };
  }
  if (shell.includes("fish")) {
    return {
      rcFile: join(homedir(), ".config", "fish", "config.fish"),
      aliasLine: "alias codex='codex -c model_provider=flixa'",
      applyHint: "source ~/.config/fish/config.fish",
    };
  }
  return {
    rcFile: join(homedir(), ".bashrc"),
    aliasLine: "alias codex='codex -c model_provider=flixa'",
    applyHint: "source ~/.bashrc",
  };
}

/** Same pattern as updateField but for a TOML section. */
async function updateTomlSection(
  path: string,
  label: string,
): Promise<{ changed: boolean; skipped: boolean }> {
  const current = readToml(path);
  const hasSection = current.includes("[model_providers.flixa]");

  if (hasSection && current.includes(FLIXA_TOML_SECTION)) {
    console.log(chalk.dim(`  ${label}: already set, skipping`));
    return { changed: false, skipped: true };
  }

  if (hasSection) {
    const ok = await confirm({
      message: `  ${label}: [model_providers.flixa] already exists, replace?`,
      default: true,
    });
    if (!ok) {
      console.log(chalk.dim(`  ${label}: skipped`));
      return { changed: false, skipped: true };
    }
  }

  writeToml(path, upsertFlixaSection(current));
  return { changed: true, skipped: false };
}

export function registerCodexCommand(program: Command): void {
  program
    .command("codex")
    .description("Configure Codex to use Flixa as the API backend")
    .action(async () => {
      const apiKey = getApiKey();
      if (!apiKey) {
        console.error(
          chalk.red("✗ Not logged in.") + " Run `flixa login` first.",
        );
        process.exit(1);
      }

      let totalChanged = 0;

      // ── ~/.codex/config.toml ─────────────────────────────────────────
      console.log(chalk.bold("\n~/.codex/config.toml"));
      const r1 = await updateTomlSection(CODEX_CONFIG_TOML, "config.toml");
      if (r1.changed) totalChanged++;

      // ── ~/.codex/auth.json ───────────────────────────────────────────
      console.log(chalk.bold("\n~/.codex/auth.json"));
      const auth = readJson(CODEX_AUTH_JSON);
      const r2 = await updateField(
        auth,
        "OPENAI_API_KEY",
        apiKey,
        "OPENAI_API_KEY",
      );
      if (r2.changed) {
        writeJson(CODEX_AUTH_JSON, auth);
        totalChanged++;
      }

      // ── 結果 ─────────────────────────────────────────────────────────
      console.log();
      if (totalChanged > 0) {
        console.log(chalk.green("✓ Codex configured to use Flixa."));
      } else {
        console.log(chalk.dim("No changes made."));
      }

      // ── 次のステップ（alias セットアップ前に表示） ─────────────────────
      console.log();
      console.log(chalk.dim("Start Codex with Flixa:"));

      // ── alias セットアップ ────────────────────────────────────────────
      const { rcFile, aliasLine, applyHint } = detectShellConfig();

      console.log();
      const setAlias = await confirm({
        message: `Set alias \`codex\` in ~/${basename(rcFile)}?`,
        default: true,
      });

      if (setAlias) {
        const rcContent = existsSync(rcFile)
          ? readFileSync(rcFile, "utf-8")
          : "";
        if (rcContent.includes(aliasLine)) {
          console.log(
            chalk.dim(`  ~/${basename(rcFile)}: alias already set, skipping`),
          );
        } else {
          const dir = join(rcFile, "..");
          if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
          appendFileSync(rcFile, `\n# Flixa\n${aliasLine}\n`);
          console.log(chalk.green(`  ~/${basename(rcFile)}: alias added`));
          console.log(chalk.dim(`  Run \`${applyHint}\` to apply.`));
        }
      } else {
        console.log();
        console.log(chalk.dim("To start Codex with Flixa, run:"));
        console.log(chalk.cyan("  codex -c model_provider=flixa"));
      }
    });
}
