import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  FLIXA_HOME_DIR,
  FLIXA_CREDENTIALS_PATH,
  ensurePrivateDir,
  ensurePrivateParent,
  enforcePrivateFile,
} from "../security/paths.ts";

const SERVICE = "flixa";
const ACCOUNT = "api-key";
const FALLBACK_DIR = FLIXA_HOME_DIR;
const FALLBACK_FILE = FLIXA_CREDENTIALS_PATH;
const WIN_DPAPI_FILE = FALLBACK_FILE + ".dpapi";

interface CommandResult {
  status: number | null;
  stdout: string;
  stderr: string;
  error?: Error;
}

function runCommand(command: string, args: string[], options: Parameters<typeof spawnSync>[2] = {}): CommandResult {
  const result = spawnSync(command, args, {
    encoding: "utf-8",
    ...options,
  });

  return {
    status: result.status,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    error: result.error,
  };
}

function assertCommandSucceeded(action: string, result: CommandResult): void {
  if (result.error) {
    throw new Error(`${action} failed: ${result.error.message}`);
  }
  if (result.status !== 0) {
    const detail = result.stderr.trim() || result.stdout.trim() || `exit status ${String(result.status)}`;
    throw new Error(`${action} failed: ${detail}`);
  }
}

function escapePsSingleQuoted(value: string): string {
  return value.replace(/'/g, "''");
}

// macOS Keychain
function macSave(secret: string): void {
  const result = runCommand("security", [
    "add-generic-password",
    "-s", SERVICE,
    "-a", ACCOUNT,
    "-w", secret,
    "-U",
  ]);
  assertCommandSucceeded("Saving secret to macOS Keychain", result);
}

function macLoad(): string | null {
  const result = runCommand("security", [
    "find-generic-password",
    "-s", SERVICE,
    "-a", ACCOUNT,
    "-w",
  ]);
  if (result.error) return null;
  if (result.status !== 0) return null;
  return result.stdout.trim() || null;
}

function macDelete(): void {
  const result = runCommand("security", ["delete-generic-password", "-s", SERVICE, "-a", ACCOUNT]);
  if (result.error) {
    throw new Error(`Deleting secret from macOS Keychain failed: ${result.error.message}`);
  }
  if (result.status !== 0) {
    const detail = result.stderr.trim();
    if (!detail.includes("could not be found")) {
      throw new Error(`Deleting secret from macOS Keychain failed: ${detail || `exit status ${String(result.status)}`}`);
    }
  }
}

// Linux (secret-tool / libsecret)
function linuxSave(secret: string): void {
  const result = runCommand(
    "secret-tool",
    ["store", "--label=Flixa API Key", "service", SERVICE, "account", ACCOUNT],
    { input: secret },
  );
  assertCommandSucceeded("Saving secret with secret-tool", result);
}

function linuxLoad(): string | null {
  const result = runCommand("secret-tool", ["lookup", "service", SERVICE, "account", ACCOUNT]);
  if (result.error) return null;
  if (result.status !== 0) return null;
  return result.stdout.trim() || null;
}

function linuxDelete(): void {
  const result = runCommand("secret-tool", ["clear", "service", SERVICE, "account", ACCOUNT]);
  if (result.error) {
    throw new Error(`Deleting secret with secret-tool failed: ${result.error.message}`);
  }
  if (result.status !== 0) {
    const detail = result.stderr.trim() || result.stdout.trim();
    if (detail && !detail.toLowerCase().includes("not found")) {
      throw new Error(`Deleting secret with secret-tool failed: ${detail}`);
    }
  }
}

function isSecretToolAvailable(): boolean {
  const result = runCommand("secret-tool", ["--version"]);
  return !result.error && result.status === 0;
}

// Windows DPAPI
function runPs1(script: string): CommandResult {
  ensurePrivateDir(FALLBACK_DIR);
  const tmp = join(FALLBACK_DIR, "_flixa_tmp.ps1");
  writeFileSync(tmp, script, { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(tmp);

  const result = runCommand("powershell", [
    "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", tmp,
  ]);

  try {
    unlinkSync(tmp);
  } catch {
    // ignore cleanup failure
  }

  return result;
}

function winSave(secret: string): void {
  ensurePrivateDir(FALLBACK_DIR);
  const secretFile = join(FALLBACK_DIR, "_flixa_secret.tmp");
  writeFileSync(secretFile, secret, { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(secretFile);

  const secretFilePath = escapePsSingleQuoted(secretFile.replace(/\\/g, "\\\\"));
  const outputPath = escapePsSingleQuoted(WIN_DPAPI_FILE.replace(/\\/g, "\\\\"));
  const script = `
Add-Type -AssemblyName System.Security
$secretPath = '${secretFilePath}'
$outputPath = '${outputPath}'
try {
  $secret = [System.IO.File]::ReadAllText($secretPath).TrimEnd()
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($secret)
  $entropy = $null
  $encrypted = [System.Security.Cryptography.ProtectedData]::Protect($bytes, $entropy, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)
  [System.IO.File]::WriteAllBytes($outputPath, $encrypted)
} finally {
  if (Test-Path $secretPath) {
    Remove-Item $secretPath -Force
  }
}
`;

  const result = runPs1(script);
  assertCommandSucceeded("Saving secret with Windows DPAPI", result);
  enforcePrivateFile(WIN_DPAPI_FILE);
}

function winLoad(): string | null {
  if (!existsSync(WIN_DPAPI_FILE)) return null;

  const inputPath = escapePsSingleQuoted(WIN_DPAPI_FILE.replace(/\\/g, "\\\\"));
  const script = `
Add-Type -AssemblyName System.Security
$inputPath = '${inputPath}'
$encrypted = [System.IO.File]::ReadAllBytes($inputPath)
$entropy = $null
$bytes = [System.Security.Cryptography.ProtectedData]::Unprotect($encrypted, $entropy, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)
[System.Text.Encoding]::UTF8.GetString($bytes)
`;
  const result = runPs1(script);
  if (result.error) return null;
  if (result.status !== 0) return null;
  return result.stdout.trim() || null;
}

function winDelete(): void {
  if (!existsSync(WIN_DPAPI_FILE)) return;
  try {
    unlinkSync(WIN_DPAPI_FILE);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Deleting Windows DPAPI secret failed: ${message}`);
  }
}

// File fallback (plaintext with warning — last resort)
function fileSave(secret: string): void {
  ensurePrivateParent(FALLBACK_FILE);
  writeFileSync(FALLBACK_FILE, secret, { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(FALLBACK_FILE);
}

function fileLoad(): string | null {
  if (!existsSync(FALLBACK_FILE)) return null;
  return readFileSync(FALLBACK_FILE, "utf-8").trim() || null;
}

function fileDelete(): void {
  if (!existsSync(FALLBACK_FILE)) return;
  try {
    unlinkSync(FALLBACK_FILE);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Deleting plaintext credentials failed: ${message}`);
  }
}

export type KeychainBackend = "keychain" | "secret-tool" | "dpapi" | "file";

export interface SaveResult {
  backend: KeychainBackend;
  warning?: string;
}

export function saveSecret(secret: string): SaveResult {
  if (process.platform === "darwin") {
    macSave(secret);
    return { backend: "keychain" };
  }

  if (process.platform === "linux") {
    if (isSecretToolAvailable()) {
      linuxSave(secret);
      return { backend: "secret-tool" };
    }
    fileSave(secret);
    return {
      backend: "file",
      warning: "secret-tool not found. Stored in plaintext at ~/.flixa/credentials with best-effort restricted permissions.",
    };
  }

  if (process.platform === "win32") {
    winSave(secret);
    return { backend: "dpapi" };
  }

  fileSave(secret);
  return {
    backend: "file",
    warning: "Unsupported platform. Stored in plaintext at ~/.flixa/credentials with best-effort restricted permissions.",
  };
}

export function loadSecret(): string | null {
  if (process.platform === "darwin") return macLoad();
  if (process.platform === "linux") {
    if (isSecretToolAvailable()) return linuxLoad();
    return fileLoad();
  }
  if (process.platform === "win32") return winLoad();
  return fileLoad();
}

export function deleteSecret(): void {
  if (process.platform === "darwin") {
    macDelete();
    return;
  }
  if (process.platform === "linux") {
    if (isSecretToolAvailable()) {
      linuxDelete();
      return;
    }
    fileDelete();
    return;
  }
  if (process.platform === "win32") {
    winDelete();
    return;
  }
  fileDelete();
}
