export type ProviderId =
  | "flixa"
  | "openai"
  | "anthropic"
  | "google"
  | "openrouter"
  | "custom-openai";

export type ProviderAuthType = "device" | "apiKey";

export interface ProviderDefinition {
  id: ProviderId;
  displayName: string;
  authType: ProviderAuthType;
  defaultBaseUrl?: string;
  defaultModel?: string;
  claudeCodeEnv?: {
    apiKeyEnv: string;
    baseUrlEnv?: string;
  };
}

export const PROVIDERS: Record<ProviderId, ProviderDefinition> = {
  flixa: {
    id: "flixa",
    displayName: "Flixa",
    authType: "device",
    defaultBaseUrl: "https://api.flixa.engineer/v1/agent",
    defaultModel: "openai/gpt-5.4",
    claudeCodeEnv: {
      apiKeyEnv: "ANTHROPIC_API_KEY",
      baseUrlEnv: "ANTHROPIC_BASE_URL",
    },
  },
  openai: {
    id: "openai",
    displayName: "OpenAI",
    authType: "apiKey",
    defaultBaseUrl: "https://api.openai.com/v1",
    defaultModel: "gpt-4.1",
  },
  anthropic: {
    id: "anthropic",
    displayName: "Anthropic",
    authType: "apiKey",
    defaultBaseUrl: "https://api.anthropic.com",
    defaultModel: "claude-sonnet-4-0",
    claudeCodeEnv: {
      apiKeyEnv: "ANTHROPIC_API_KEY",
      baseUrlEnv: "ANTHROPIC_BASE_URL",
    },
  },
  google: {
    id: "google",
    displayName: "Google Gemini",
    authType: "apiKey",
    defaultModel: "gemini-2.5-pro",
  },
  openrouter: {
    id: "openrouter",
    displayName: "OpenRouter",
    authType: "apiKey",
    defaultBaseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "openai/gpt-4.1",
  },
  "custom-openai": {
    id: "custom-openai",
    displayName: "Custom OpenAI-Compatible",
    authType: "apiKey",
    defaultModel: "gpt-4.1",
  },
};

export const DEFAULT_PROVIDER: ProviderId = "flixa";

export function isProviderId(value: string): value is ProviderId {
  return value in PROVIDERS;
}

export function getProviderDefinition(providerId: ProviderId): ProviderDefinition {
  return PROVIDERS[providerId];
}

export function listProviderDefinitions(): ProviderDefinition[] {
  return Object.values(PROVIDERS);
}
