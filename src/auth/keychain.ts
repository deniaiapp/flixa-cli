import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const SERVICE = "flixa";
const ACCOUNT = "api-key";
const FALLBACK_DIR = join(homedir(), ".flixa");
const FALLBACK_FILE = join(FALLBACK_DIR, "credentials");

// macOS Keychain

function macSave(secret: string): void {
  spawnSync("security", [
    "add-generic-password",
    "-s", SERVICE,
    "-a", ACCOUNT,
    "-w", secret,
    "-U", // update if exists
  ]);
}

function macLoad(): string | null {
  const result = spawnSync("security", [
    "find-generic-password",
    "-s", SERVICE,
    "-a", ACCOUNT,
    "-w",
  ]);
  if (result.status !== 0) return null;
  return result.stdout.toString().trim() || null;
}

function macDelete(): void {
  spawnSync("security", ["delete-generic-password", "-s", SERVICE, "-a", ACCOUNT]);
}

// Linux (secret-tool / libsecret)

function linuxSave(secret: string): void {
  spawnSync(
    "secret-tool",
    ["store", "--label=Flixa API Key", "service", SERVICE, "account", ACCOUNT],
    { input: secret }
  );
}

function linuxLoad(): string | null {
  const result = spawnSync("secret-tool", ["lookup", "service", SERVICE, "account", ACCOUNT]);
  if (result.status !== 0) return null;
  return result.stdout.toString().trim() || null;
}

function linuxDelete(): void {
  spawnSync("secret-tool", ["clear", "service", SERVICE, "account", ACCOUNT]);
}

function isSecretToolAvailable(): boolean {
  const result = spawnSync("secret-tool", ["--version"]);
  return result.status === 0;
}

// Windows DPAPI (PowerShell) — run ps1 via a temp file to avoid shell injection

const WIN_DPAPI_FILE = FALLBACK_FILE + ".dpapi";

function runPs1(script: string): { status: number | null; stdout: string } {
  const tmp = join(FALLBACK_DIR, "_flixa_tmp.ps1");
  if (!existsSync(FALLBACK_DIR)) mkdirSync(FALLBACK_DIR, { recursive: true });
  writeFileSync(tmp, script, { encoding: "utf-8" });
  const result = spawnSync("powershell", [
    "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", tmp,
  ]);
  try { unlinkSync(tmp); } catch { /* ignore */ }
  return { status: result.status, stdout: result.stdout?.toString() ?? "" };
}

function winSave(secret: string): void {
  // シークレットはファイル経由で渡してコマンドライン引数に乗せない
  const secretFile = join(FALLBACK_DIR, "_flixa_secret.tmp");
  if (!existsSync(FALLBACK_DIR)) mkdirSync(FALLBACK_DIR, { recursive: true });
  writeFileSync(secretFile, secret, { encoding: "utf-8", mode: 0o600 });

  const script = `
Add-Type -AssemblyName System.Security
$secret = [System.IO.File]::ReadAllText('${secretFile.replace(/\\/g, "\\\\")}').TrimEnd()
Remove-Item '${secretFile.replace(/\\/g, "\\\\")}' -Force
$bytes = [System.Text.Encoding]::UTF8.GetBytes($secret)
$entropy = $null
$encrypted = [System.Security.Cryptography.ProtectedData]::Protect($bytes, $entropy, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)
[System.IO.File]::WriteAllBytes('${WIN_DPAPI_FILE.replace(/\\/g, "\\\\")}', $encrypted)
`;
  runPs1(script);
}

function winLoad(): string | null {
  if (!existsSync(WIN_DPAPI_FILE)) return null;
  const script = `
Add-Type -AssemblyName System.Security
$encrypted = [System.IO.File]::ReadAllBytes('${WIN_DPAPI_FILE.replace(/\\/g, "\\\\")}')
$entropy = $null
$bytes = [System.Security.Cryptography.ProtectedData]::Unprotect($encrypted, $entropy, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)
[System.Text.Encoding]::UTF8.GetString($bytes)
`;
  const { status, stdout } = runPs1(script);
  if (status !== 0) return null;
  return stdout.trim() || null;
}

function winDelete(): void {
  if (existsSync(WIN_DPAPI_FILE)) unlinkSync(WIN_DPAPI_FILE);
}

// File fallback (plaintext with warning — last resort)

function fileSave(secret: string): void {
  if (!existsSync(FALLBACK_DIR)) mkdirSync(FALLBACK_DIR, { recursive: true });
  writeFileSync(FALLBACK_FILE, secret, { mode: 0o600 });
}

function fileLoad(): string | null {
  if (!existsSync(FALLBACK_FILE)) return null;
  return readFileSync(FALLBACK_FILE, "utf-8").trim() || null;
}

function fileDelete(): void {
  if (existsSync(FALLBACK_FILE)) unlinkSync(FALLBACK_FILE);
}

// Public API

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
      warning: "secret-tool not found. Stored in plaintext at ~/.flixa/credentials (chmod 600).",
    };
  }

  if (process.platform === "win32") {
    winSave(secret);
    return { backend: "dpapi" };
  }

  fileSave(secret);
  return {
    backend: "file",
    warning: "Unsupported platform. Stored in plaintext at ~/.flixa/credentials (chmod 600).",
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
  if (process.platform === "darwin") { macDelete(); return; }
  if (process.platform === "linux") {
    if (isSecretToolAvailable()) { linuxDelete(); return; }
    fileDelete(); return;
  }
  if (process.platform === "win32") { winDelete(); return; }
  fileDelete();
}
