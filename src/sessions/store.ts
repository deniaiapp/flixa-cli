import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { randomUUID } from "node:crypto";
import type { ChatMessage } from "../flixa/api.ts";
import { FLIXA_SESSIONS_DIR, enforcePrivateFile, ensurePrivateDir } from "../security/paths.ts";

export interface StoredChatSession {
  id: string;
  cwd: string;
  model: string;
  system?: string;
  autoMode?: boolean;
  planMode?: boolean;
  acceptEdits?: boolean;
  createdAt: string;
  updatedAt: string;
  history: ChatMessage[];
}

const SESSIONS_DIR = FLIXA_SESSIONS_DIR;

export function createSession(
  cwdValue: string,
  model: string,
  system?: string,
  modes?: {
    autoMode?: boolean;
    planMode?: boolean;
    acceptEdits?: boolean;
  },
): StoredChatSession {
  const now = new Date().toISOString();
  return {
    id: randomUUID(),
    cwd: resolve(cwdValue),
    model,
    system,
    autoMode: modes?.autoMode ?? false,
    planMode: modes?.planMode ?? false,
    acceptEdits: modes?.acceptEdits ?? false,
    createdAt: now,
    updatedAt: now,
    history: [],
  };
}

export function saveSession(session: StoredChatSession): void {
  ensureSessionsDir();
  const next = {
    ...session,
    cwd: resolve(session.cwd),
    updatedAt: new Date().toISOString(),
  };
  const sessionPath = getSessionPath(session.id);
  writeFileSync(sessionPath, JSON.stringify(next, null, 2) + "\n", {
    encoding: "utf-8",
    mode: 0o600,
  });
  enforcePrivateFile(sessionPath);
}

export function loadSessionById(sessionId: string): StoredChatSession | null {
  try {
    const raw = readFileSync(getSessionPath(sessionId), "utf-8");
    const parsed = JSON.parse(raw) as StoredChatSession;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return {
      ...parsed,
      cwd: resolve(parsed.cwd),
      autoMode: parsed.autoMode ?? false,
      planMode: parsed.planMode ?? false,
      acceptEdits: parsed.acceptEdits ?? false,
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    return null;
  }
}

export function loadLatestSessionForCwd(
  cwdValue: string,
): StoredChatSession | null {
  const target = resolve(cwdValue);
  return listRecentSessions(100).find((session) => session.cwd === target) ?? null;
}

export function listRecentSessions(limit = 20): StoredChatSession[] {
  ensureSessionsDir();
  const sessions = readdirSync(SESSIONS_DIR)
    .filter((entry) => entry.endsWith(".json"))
    .map((entry) => loadSessionById(entry.slice(0, -5)))
    .filter((session): session is StoredChatSession => session !== null)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  return sessions.slice(0, limit);
}

export function formatRecentSessionLabel(session: StoredChatSession): string {
  return [
    session.id.slice(0, 8),
    session.cwd,
    formatRecentSessionTimestamp(session.updatedAt),
  ].join("  ");
}

function ensureSessionsDir(): void {
  mkdirSync(SESSIONS_DIR, { recursive: true, mode: 0o700 });
  ensurePrivateDir(SESSIONS_DIR);
}

function getSessionPath(sessionId: string): string {
  return join(SESSIONS_DIR, `${sessionId}.json`);
}

function formatRecentSessionTimestamp(timestamp: string): string {
  return timestamp.replace("T", " ").slice(0, 16);
}
