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
import { DEFAULT_PROVIDER, type ProviderId } from "../providers/registry.ts";

const FALLBACK_DIR = FLIXA_HOME_DIR;
const LEGACY_FALLBACK_FILE = FLIXA_CREDENTIALS_PATH;

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

function getServiceName(provider: ProviderId): string {
  return provider === DEFAULT_PROVIDER ? "flixa" : `flixa:${provider}`;
}

function getAccountName(): string {
  return "api-key";
}

function getFallbackFile(provider: ProviderId): string {
  return provider === DEFAULT_PROVIDER
    ? LEGACY_FALLBACK_FILE
    : join(FALLBACK_DIR, `credentials-${provider}`);
}

function getWinDpapiFile(provider: ProviderId): string {
  return `${getFallbackFile(provider)}.dpapi`;
}

// macOS Keychain
function macSave(service: string, account: string, secret: string): void {
  const result = runCommand("security", [
    "add-generic-password",
    "-s", service,
    "-a", account,
    "-w", secret,
    "-U",
  ]);
  assertCommandSucceeded(`Saving secret to macOS Keychain for ${service}`, result);
}

function macLoad(service: string, account: string): string | null {
  const result = runCommand("security", [
    "find-generic-password",
    "-s", service,
    "-a", account,
    "-w",
  ]);
  if (result.error) return null;
  if (result.status !== 0) return null;
  return result.stdout.trim() || null;
}

function macDelete(service: string, account: string): void {
  const result = runCommand("security", ["delete-generic-password", "-s", service, "-a", account]);
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
function linuxSave(service: string, account: string, secret: string): void {
  const result = runCommand(
    "secret-tool",
    ["store", `--label=Flixa API Key (${service})`, "service", service, "account", account],
    { input: secret },
  );
  assertCommandSucceeded(`Saving secret with secret-tool for ${service}`, result);
}

function linuxLoad(service: string, account: string): string | null {
  const result = runCommand("secret-tool", ["lookup", "service", service, "account", account]);
  if (result.error) return null;
  if (result.status !== 0) return null;
  return result.stdout.trim() || null;
}

function linuxDelete(service: string, account: string): void {
  const result = runCommand("secret-tool", ["clear", "service", service, "account", account]);
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

function winSave(secret: string, provider: ProviderId): void {
  ensurePrivateDir(FALLBACK_DIR);
  const secretFile = join(FALLBACK_DIR, `_flixa_secret_${provider}.tmp`);
  writeFileSync(secretFile, secret, { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(secretFile);

  const secretFilePath = escapePsSingleQuoted(secretFile.replace(/\\/g, "\\\\"));
  const outputPath = escapePsSingleQuoted(getWinDpapiFile(provider).replace(/\\/g, "\\\\"));
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
  assertCommandSucceeded(`Saving secret with Windows DPAPI for ${provider}`, result);
  enforcePrivateFile(getWinDpapiFile(provider));
}

function winLoad(provider: ProviderId): string | null {
  const dpapiFile = getWinDpapiFile(provider);
  if (!existsSync(dpapiFile)) return null;

  const inputPath = escapePsSingleQuoted(dpapiFile.replace(/\\/g, "\\\\"));
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

function winDelete(provider: ProviderId): void {
  const dpapiFile = getWinDpapiFile(provider);
  if (!existsSync(dpapiFile)) return;
  try {
    unlinkSync(dpapiFile);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Deleting Windows DPAPI secret failed: ${message}`);
  }
}

// File fallback (plaintext with warning — last resort)
function fileSave(secret: string, provider: ProviderId): void {
  const fallbackFile = getFallbackFile(provider);
  ensurePrivateParent(fallbackFile);
  writeFileSync(fallbackFile, secret, { encoding: "utf-8", mode: 0o600 });
  enforcePrivateFile(fallbackFile);
}

function fileLoad(provider: ProviderId): string | null {
  const fallbackFile = getFallbackFile(provider);
  if (!existsSync(fallbackFile)) return null;
  return readFileSync(fallbackFile, "utf-8").trim() || null;
}

function fileDelete(provider: ProviderId): void {
  const fallbackFile = getFallbackFile(provider);
  if (!existsSync(fallbackFile)) return;
  try {
    unlinkSync(fallbackFile);
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

export function saveSecret(secret: string, provider: ProviderId = DEFAULT_PROVIDER): SaveResult {
  const service = getServiceName(provider);
  const account = getAccountName();

  if (process.platform === "darwin") {
    macSave(service, account, secret);
    return { backend: "keychain" };
  }

  if (process.platform === "linux") {
    if (isSecretToolAvailable()) {
      linuxSave(service, account, secret);
      return { backend: "secret-tool" };
    }
    fileSave(secret, provider);
    return {
      backend: "file",
      warning: `secret-tool not found. Stored in plaintext at ${getFallbackFile(provider)} with best-effort restricted permissions.`,
    };
  }

  if (process.platform === "win32") {
    winSave(secret, provider);
    return { backend: "dpapi" };
  }

  fileSave(secret, provider);
  return {
    backend: "file",
    warning: `Unsupported platform. Stored in plaintext at ${getFallbackFile(provider)} with best-effort restricted permissions.`,
  };
}

export function loadSecret(provider: ProviderId = DEFAULT_PROVIDER): string | null {
  const service = getServiceName(provider);
  const account = getAccountName();

  if (process.platform === "darwin") return macLoad(service, account);
  if (process.platform === "linux") {
    if (isSecretToolAvailable()) return linuxLoad(service, account);
    return fileLoad(provider);
  }
  if (process.platform === "win32") return winLoad(provider);
  return fileLoad(provider);
}

export function deleteSecret(provider: ProviderId = DEFAULT_PROVIDER): void {
  const service = getServiceName(provider);
  const account = getAccountName();

  if (process.platform === "darwin") {
    macDelete(service, account);
    return;
  }
  if (process.platform === "linux") {
    if (isSecretToolAvailable()) {
      linuxDelete(service, account);
      return;
    }
    fileDelete(provider);
    return;
  }
  if (process.platform === "win32") {
    winDelete(provider);
    return;
  }
  fileDelete(provider);
}
