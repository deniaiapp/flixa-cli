# Flixa CLI

CLI tool to authenticate with [Flixa](https://deniai.app), chat with the Flixa backend from your terminal, and configure external tools to use Flixa as the API backend.

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

### 2. Chat with Flixa

```bash
flixa
```

Starts an interactive terminal chat session with a Claude Code style TUI.
Built-in session commands:

```bash
/help
/clear
/model gpt-5.4
/exit
```

You can also send a single prompt:

```bash
flixa "Summarize this repository"
flixa chat --model gpt-5.4 "Write a release note"
```

Useful flags:

```bash
flixa --system "You are a terse coding assistant"
flixa --no-stream "Explain this diff"
cat prompt.txt | flixa --json
```

### 3. Configure Claude Code

```bash
flixa claude-code
```

Sets `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` in `~/.claude/settings.json` so Claude Code routes requests through Flixa.

### 4. Configure Codex

```bash
flixa codex
```

Adds a `model_providers.flixa` entry to `~/.codex/config.toml`, stores your API key in `~/.codex/auth.json`, and can add a shell alias so `codex` defaults to Flixa.

### Other commands

```bash
flixa logout       # Remove stored credentials
flixa --help       # Show all commands
```

Environment variable overrides:

```bash
FLIXA_API_KEY=...
FLIXA_BASE_URL=https://api.flixa.engineer/v1/agent
FLIXA_MODEL=gpt-5.4
```

## Canary releases

Every commit to `main` is published to npm under the `canary` tag:

```bash
npm install -g @deniai/flixa@canary
```
