#!/usr/bin/env node
import { Command } from "commander";
import { createRequire } from "node:module";
import { registerLoginCommand } from "./commands/login.ts";
import { registerClaudeCodeCommand } from "./commands/claude-code.ts";
import { registerCodexCommand } from "./commands/codex.ts";
import { registerChatCommand } from "./commands/chat.ts";

const require = createRequire(import.meta.url);
const { version } = require("../package.json");

const program = new Command();

program
  .name("flixa")
  .description("Flixa CLI")
  .showHelpAfterError()
  .version(version);

registerChatCommand(program);
registerLoginCommand(program);
registerClaudeCodeCommand(program);
registerCodexCommand(program);

program.parseAsync(process.argv);
