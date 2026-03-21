# Flixa CLI

CLI tool to authenticate with [Flixa](https://deniai.app) and configure Claude Code to use Flixa as the API backend.

## Installation

```bash
npm install -g @deniai/flixa
```

Or use directly without installing:

```bash
npx @deniai/flixa <command>
```

## Usage

### 1. Log in

```bash
flixa login
```

Opens a browser-based device authorization flow. Your API key is saved to the system credential store (Keychain on macOS, GNOME Keyring on Linux, DPAPI on Windows).

### 2. Configure Claude Code

```bash
flixa claude-code
```

Sets `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` in `~/.claude/settings.json` so Claude Code routes requests through Flixa.

### Other commands

```bash
flixa logout       # Remove stored credentials
flixa --help       # Show all commands
```

## Canary releases

Every commit to `main` is published to npm under the `canary` tag:

```bash
npm install -g @deniai/flixa@canary
```
