#!/usr/bin/env node
import { Command } from "commander";
import { registerLoginCommand } from "./commands/login.ts";
import { registerClaudeCodeCommand } from "./commands/claude-code.ts";
import { registerCodexCommand } from "./commands/codex.ts";
import { registerChatCommand } from "./commands/chat.ts";
import { CLI_VERSION } from "./version.ts";

const program = new Command();

program
  .name("flixa")
  .description("Flixa CLI")
  .showHelpAfterError()
  .version(CLI_VERSION);

registerChatCommand(program);
registerLoginCommand(program);
registerClaudeCodeCommand(program);
registerCodexCommand(program);

program.parseAsync(process.argv);
