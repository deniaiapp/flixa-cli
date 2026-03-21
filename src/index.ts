#!/usr/bin/env node
import { Command } from "commander";
import { createRequire } from "node:module";
import { registerLoginCommand } from "./commands/login.ts";
import { registerClaudeCodeCommand } from "./commands/claude-code.ts";

const require = createRequire(import.meta.url);
const { version } = require("../package.json");

const program = new Command();

program
  .name("flixa")
  .description("Flixa CLI")
  .version(version);

registerLoginCommand(program);
registerClaudeCodeCommand(program);

program.parseAsync(process.argv);
