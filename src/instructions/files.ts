import { existsSync, readFileSync } from "node:fs";
import { dirname, join, parse, resolve } from "node:path";

const INSTRUCTION_CANDIDATES = [
  "CLAUDE.md",
  "AGENTS.md",
  join(".claude", "CLAUDE.md"),
] as const;

type LoadedInstructionFile = {
  path: string;
  content: string;
};

export function buildInstructionSystemPrompt(
  cwdValue: string,
  customSystemPrompt?: string,
): string | undefined {
  const parts: string[] = [];
  const instructionBlock = formatInstructionFiles(loadInstructionFiles(cwdValue));
  if (instructionBlock) {
    parts.push(instructionBlock);
  }

  const trimmedCustomPrompt = customSystemPrompt?.trim();
  if (trimmedCustomPrompt) {
    parts.push(trimmedCustomPrompt);
  }

  return parts.length > 0 ? parts.join("\n\n") : undefined;
}

function loadInstructionFiles(cwdValue: string): LoadedInstructionFile[] {
  const root = resolve(cwdValue);
  const directories: string[] = [];
  let current = root;

  while (true) {
    directories.push(current);
    const parent = dirname(current);
    if (parent === current || current === parse(current).root) {
      break;
    }
    current = parent;
  }

  const loaded: LoadedInstructionFile[] = [];
  const seen = new Set<string>();

  for (const directory of directories.reverse()) {
    for (const candidate of INSTRUCTION_CANDIDATES) {
      const filePath = join(directory, candidate);
      const normalizedPath = resolve(filePath);
      if (seen.has(normalizedPath) || !existsSync(normalizedPath)) {
        continue;
      }

      try {
        const content = readFileSync(normalizedPath, "utf-8").trim();
        if (!content) {
          continue;
        }

        seen.add(normalizedPath);
        loaded.push({
          path: normalizedPath,
          content,
        });
      } catch {
        continue;
      }
    }
  }

  return loaded;
}

function formatInstructionFiles(
  files: readonly LoadedInstructionFile[],
): string | undefined {
  if (files.length === 0) {
    return undefined;
  }

  return [
    "The following repository instruction files were loaded from the current directory hierarchy. Apply them in order, with later files being more specific.",
    ...files.map(
      (file) => `\n[Instructions: ${file.path}]\n${file.content}`,
    ),
  ].join("\n");
}
