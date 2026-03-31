import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

export interface FlixaConfig {
  defaultModel?: string;
}

const CONFIG_DIR = join(homedir(), ".flixa");
const CONFIG_PATH = join(CONFIG_DIR, "config.json");

export function loadConfig(): FlixaConfig {
  if (!existsSync(CONFIG_PATH)) {
    return {};
  }

  try {
    const raw = readFileSync(CONFIG_PATH, "utf-8");
    const parsed = JSON.parse(raw) as FlixaConfig;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveConfig(config: FlixaConfig): void {
  mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + "\n", "utf-8");
}

export function getPersistedModel(): string | undefined {
  const model = loadConfig().defaultModel;
  return typeof model === "string" && model.length > 0 ? model : undefined;
}

export function setPersistedModel(model: string): void {
  const trimmed = model.trim();
  if (!trimmed) {
    return;
  }

  const current = loadConfig();
  if (current.defaultModel === trimmed) {
    return;
  }

  saveConfig({
    ...current,
    defaultModel: trimmed,
  });
}
