import { Command } from "commander";
import open from "open";
import { select } from "@inquirer/prompts";
import chalk from "chalk";
import boxen from "boxen";
import { loginWithDeviceAuth, getApiKey, deleteCredentials } from "../auth/service.ts";

export function registerLoginCommand(program: Command): void {
  program
    .command("login")
    .description("Authenticate with Flixa using browser-based device auth")
    .action(async () => {
      const existing = getApiKey();
      if (existing) {
        console.log(chalk.yellow("Already logged in.") + " Run `flixa logout` to log out first.");
        return;
      }

      const openStyle = await select({
        message: "How would you like to open the authorization page?",
        choices: [
          {
            name: "Open browser automatically",
            value: "auto" as const,
            description: "Launch your default browser automatically",
          },
          {
            name: "Show URL (open manually)",
            value: "manual" as const,
            description: "For SSH sessions or headless environments",
          },
        ],
      });

      console.log();

      try {
        await loginWithDeviceAuth({
          onUserCode(userCode, verificationUrl) {
            const box = boxen(
              [
                chalk.bold("Authorization required"),
                "",
                `${chalk.dim("Code")}  ${chalk.cyan.bold(userCode)}`,
                `${chalk.dim("URL")}   ${chalk.underline(verificationUrl)}`,
              ].join("\n"),
              {
                padding: 1,
                borderColor: "cyan",
                borderStyle: "round",
              }
            );
            console.log(box);

            if (openStyle === "auto") {
              open(verificationUrl).catch(() => {
                console.log(chalk.yellow("Could not open browser.") + " Please visit the URL above manually.");
              });
            }

            console.log(chalk.dim("Waiting for authorization..."));
          },
          onSaved(backend, warning) {
            const backendLabel: Record<string, string> = {
              keychain: "macOS Keychain",
              "secret-tool": "GNOME Keyring (secret-tool)",
              dpapi: "Windows Credential Manager (DPAPI)",
              file: "~/.flixa/credentials (chmod 600)",
            };
            const label = backendLabel[backend] ?? backend;
            console.log("\n" + chalk.green("✓ Login successful!") + chalk.dim(`  Saved to: ${label}`));
            if (warning) {
              console.log(chalk.yellow("  ⚠ " + warning));
            }
          },
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error("\n" + chalk.red("✗ Login failed:") + " " + message);
        process.exit(1);
      }
    });

  program
    .command("logout")
    .description("Remove stored credentials")
    .action(() => {
      deleteCredentials();
      console.log(chalk.green("✓ Logged out.") + chalk.dim("  Credentials removed."));
    });
}
