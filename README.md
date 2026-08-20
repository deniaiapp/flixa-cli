# Flixa CLI

AI coding assistant CLI.

## Install

```sh
npm install -g @deniai/flixa
```

or

```sh
pnpm install -g @deniai/flixa
```

or

```sh
bun install -g @deniai/flixa
```

## Quick start

```sh
flixa login
flixa chat
```

## Commands

### Login

Log in to Flixa or save a BYOK API key for another provider.

```sh
flixa login
flixa login --provider anthropic
flixa login --provider openai
flixa login --provider custom-openai --base-url http://localhost:1234/v1
```

Flixa includes the built-in providers above plus the provider catalog from
`models.dev` (OpenAI-compatible gateways, Anthropic-compatible endpoints, and
other catalogued providers). Inspect the available catalog with:

Built-ins: `flixa`, `openai`, `anthropic`, `google`, `openrouter`, and
`custom-openai`.

```sh
flixa providers list
```

The bundled catalog can be refreshed during development with:

```sh
bun run providers:update
```

Providers with an OpenAI-compatible endpoint use the shared agent runtime;
providers that require native cloud credentials show the required environment
variables and must be configured outside Flixa.

Notes:

- `flixa` uses browser-based device auth.
- Other providers use an API key prompt.
- `custom-openai` requires `--base-url` or an entered base URL.
- Logging in also sets the selected provider as the default provider.

### Logout

Remove stored credentials for a provider.

```sh
flixa logout
flixa logout --provider anthropic
```

This removes saved credentials only. It does **not** undo Claude Code configuration changes.

### Provider management

Inspect configured providers and switch the default provider.

```sh
flixa providers list
flixa providers current
flixa providers set-default anthropic
```

### Model selection

Set the default model for the current or specified provider.

```sh
flixa model
flixa model --provider anthropic
flixa model claude-sonnet-4-0 --provider anthropic
flixa model gpt-4.1 --provider openai
```

For providers with configurable endpoints, you can also pass `--base-url`.

### Chat

Start the interactive chat interface.

```sh
flixa chat
flixa chat --provider anthropic
```

### Ship mode

Run a complete coding mission from one prompt. Ship mode inspects the repo,
implements the focused change, verifies it, and can produce a redacted Markdown
card you can paste into a PR or share online.

```sh
flixa ship "Add a retry budget to the API client" --share
flixa ship "Fix the failing login flow" --verify "bun run build" --share .flixa/ship-card.md
flixa ship "Plan a migration to SQLite" --plan
```

By default, Ship uses guarded auto mode: file edits and shell commands are
reviewed for safety, while deterministic destructive commands are blocked.
Use `--interactive` for an approval prompt on every edit/command or `--yolo`
only when you explicitly want to bypass those checks.

Create a card from the latest saved session at any time:

```sh
flixa share
flixa share --output .flixa/latest-card.md
```

When a card is generated, its Markdown source is copied to the system
clipboard automatically and the terminal renders a rich preview. If the
platform has no clipboard utility, the preview still works and the command
reports that copying was unavailable.

### Claude Code integration

Configure Claude Code to use Flixa or Anthropic credentials.

```sh
flixa claude-code
flixa claude-code --provider flixa
flixa claude-code --provider anthropic
```

What this changes:

- `~/.claude.json`
  - `hasCompletedOnboarding`
  - `primaryApiKey`
- `~/.claude/settings.json`
  - `env.ANTHROPIC_API_KEY`
  - `env.ANTHROPIC_BASE_URL` when supported by the provider

Safety features:

- Prompts before replacing existing values
- `--dry-run` shows planned changes without writing files
- Creates `*.bak` backups before writing changed Claude settings files
- Stops with an error if an existing Claude JSON file is invalid instead of overwriting it

Supported providers for `claude-code`:

- `flixa`
- `anthropic`

### Usage

Show account usage information.

```sh
flixa usage
```

### Codex

Run the Codex-related command flow.

```sh
flixa codex
```

## Configuration and storage

Flixa stores local config in:

- `~/.flixa/config.json`

This includes things like:

- default provider
- provider-specific base URLs
- provider-specific default models

Credentials are stored per provider using the best available backend for your OS:

- macOS: Keychain via `security`
- Linux: `secret-tool` when available, otherwise plaintext fallback in `~/.flixa/`
- Windows: DPAPI-backed local encrypted file

Fallback credential files may include:

- `~/.flixa/credentials`
- `~/.flixa/credentials-<provider>`

Claude Code integration writes to:

- `~/.claude.json`
- `~/.claude/settings.json`

## Troubleshooting

### Linux: `secret-tool` not installed

If `secret-tool` is unavailable, Flixa falls back to a file in `~/.flixa/` with best-effort restricted permissions and prints a warning.

### Already logged in

If a provider already has saved credentials, run:

```sh
flixa logout --provider <provider>
```

Then log in again.

### Claude Code still points to the old provider

`flixa logout` does not modify Claude Code config files. Re-run:

```sh
flixa claude-code --provider <provider>
```

### Custom OpenAI-compatible endpoint

Use:

```sh
flixa login --provider custom-openai --base-url http://your-endpoint/v1
```

## Development

```sh
bun install
bun run dev
bun run build
```
