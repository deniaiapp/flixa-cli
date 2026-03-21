#!/usr/bin/env bun
import { Command } from "commander";
import { registerLoginCommand } from "./commands/login.ts";
import { registerClaudeCodeCommand } from "./commands/claude-code.ts";

const program = new Command();

program
  .name("flixa")
  .description("Flixa CLI")
  .version("0.0.1");

registerLoginCommand(program);
registerClaudeCodeCommand(program);

program.parseAsync(process.argv);
