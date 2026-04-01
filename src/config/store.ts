import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { FLIXA_CONFIG_PATH, ensurePrivateParent, enforcePrivateFile } from "../security/paths.ts";

export interface FlixaConfig {
  defaultModel?: string;
  defaultAutoMode?: boolean;
  defaultPlanMode?: boolean;
  defaultAcceptEdits?: boolean;
}

const CONFIG_PATH = FLIXA_CONFIG_PATH;

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
  ensurePrivateParent(CONFIG_PATH);
  writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + "\n", { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(CONFIG_PATH);
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

export function getPersistedModeDefaults(): {
  autoMode: boolean;
  planMode: boolean;
  acceptEdits: boolean;
} {
  const config = loadConfig();
  return {
    autoMode: config.defaultAutoMode ?? false,
    planMode: config.defaultPlanMode ?? false,
    acceptEdits: config.defaultAcceptEdits ?? false,
  };
}

export function setPersistedModeDefaults(next: {
  autoMode?: boolean;
  planMode?: boolean;
  acceptEdits?: boolean;
}): void {
  const current = loadConfig();
  saveConfig({
    ...current,
    ...(typeof next.autoMode === "boolean"
      ? { defaultAutoMode: next.autoMode }
      : {}),
    ...(typeof next.planMode === "boolean"
      ? { defaultPlanMode: next.planMode }
      : {}),
    ...(typeof next.acceptEdits === "boolean"
      ? { defaultAcceptEdits: next.acceptEdits }
      : {}),
  });
}
