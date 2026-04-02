import {
  generateText,
  stepCountIs,
  tool as aiTool,
  type LanguageModel,
  type ModelMessage,
  type ToolSet,
} from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { getApiKey } from "../auth/service.ts";
import {
  getDefaultProvider,
  getPersistedModel,
  getPersistedProviderBaseUrl,
} from "../config/store.ts";
import {
  executeToolCall,
  getAgentToolDefinitions,
  type ToolExecutionContext,
} from "../agent-tools/tools.ts";
import {
  getProviderDefinition,
  isProviderId,
  type ProviderId,
} from "./registry.ts";
import type { ChatMessage } from "../flixa/api.ts";
import { cwd } from "node:process";

export interface ProviderResolutionOptions {
  provider?: string;
  model?: string;
  baseUrl?: string;
}

export interface ResolvedProviderContext {
  provider: ProviderId;
  apiKey: string | null;
  model: string;
  baseUrl?: string;
  displayName: string;
}

export interface SharedAgentRunOptions {
  provider?: string;
  model?: string;
  baseUrl?: string;
  system?: string;
  prompt: string;
  history: ChatMessage[];
  maxOutputTokens?: number;
  signal?: AbortSignal;
  autoMode?: boolean;
  planMode?: boolean;
}

export interface SharedAgentRunResult {
  text: string;
  context: ResolvedProviderContext;
  history: ChatMessage[];
}

export interface ProviderModelOption {
  id: string;
  label: string;
  description: string;
  sortKey?: number;
}

const ANTHROPIC_API_VERSION = "2023-06-01";
const DEFAULT_GEMINI_API_ROOT = "https://generativelanguage.googleapis.com/v1beta";
const OPENROUTER_REFERER = "https://github.com/deniaiapp/flixa-cli";
const OPENROUTER_TITLE = "Flixa CLI";

interface OpenAiCompatibleModelListResponse {
  data?: OpenAiCompatibleModel[];
}

interface OpenAiCompatibleModel {
  id?: string;
  created?: number;
}

interface AnthropicModelListResponse {
  data?: AnthropicProviderModel[];
}

interface AnthropicProviderModel {
  id?: string;
  display_name?: string;
  created_at?: string;
  max_input_tokens?: number;
  max_tokens?: number;
}

interface GeminiModelListResponse {
  models?: GeminiProviderModel[];
  nextPageToken?: string;
}

interface GeminiProviderModel {
  name?: string;
  baseModelId?: string;
  displayName?: string;
  description?: string;
  supportedGenerationMethods?: string[];
  inputTokenLimit?: number;
  outputTokenLimit?: number;
}

interface OpenRouterModelListResponse {
  data?: OpenRouterProviderModel[];
}

interface OpenRouterProviderModel {
  id?: string;
  name?: string;
  created?: number;
  description?: string;
  context_length?: number;
  architecture?: {
    input_modalities?: string[];
    output_modalities?: string[];
  };
}

export function resolveProviderId(rawProvider?: string): ProviderId {
  if (!rawProvider?.trim()) {
    return getDefaultProvider();
  }

  const normalized = rawProvider.trim().toLowerCase();
  if (!isProviderId(normalized)) {
    throw new Error(`Unsupported provider: ${rawProvider}`);
  }

  return normalized;
}

export function resolveProviderContext(
  options: ProviderResolutionOptions = {},
): ResolvedProviderContext {
  const provider = resolveProviderId(options.provider);
  const definition = getProviderDefinition(provider);
  const model =
    options.model?.trim() ||
    getPersistedModel(provider) ||
    definition.defaultModel ||
    getPersistedModel() ||
    "gpt-4.1";
  const baseUrl =
    options.baseUrl?.trim() ||
    getPersistedProviderBaseUrl(provider) ||
    definition.defaultBaseUrl;

  const apiKey = resolveApiKeyForProvider(provider);

  return {
    provider,
    apiKey,
    model,
    baseUrl,
    displayName: definition.displayName,
  };
}

export function resolveApiKeyForProvider(provider: ProviderId): string | null {
  switch (provider) {
    case "flixa": {
      const envApiKey = process.env.FLIXA_API_KEY?.trim();
      if (envApiKey) return envApiKey;
      const openAiCompatibleApiKey = process.env.OPENAI_API_KEY?.trim();
      if (openAiCompatibleApiKey) return openAiCompatibleApiKey;
      return getApiKey(provider);
    }
    case "openai":
    case "openrouter":
    case "custom-openai": {
      return process.env.OPENAI_API_KEY?.trim() || getApiKey(provider);
    }
    case "anthropic": {
      return process.env.ANTHROPIC_API_KEY?.trim() || getApiKey(provider);
    }
    case "google": {
      return (
        process.env.GOOGLE_GENERATIVE_AI_API_KEY?.trim() ||
        process.env.GEMINI_API_KEY?.trim() ||
        getApiKey(provider)
      );
    }
  }
}

export function createLanguageModel(
  context: ResolvedProviderContext,
): LanguageModel {
  const apiKey = context.apiKey;
  if (!apiKey) {
    throw new Error(`No API key configured for ${context.displayName}. Run \`flixa login --provider ${context.provider}\` first.`);
  }

  switch (context.provider) {
    case "openai":
    case "openrouter":
    case "custom-openai": {
      const openai = createOpenAI({
        apiKey,
        ...(context.baseUrl ? { baseURL: context.baseUrl } : {}),
        ...(context.provider === "openrouter"
          ? {
              headers: {
                "HTTP-Referer": "https://github.com/deniaiapp/flixa-cli",
                "X-Title": "Flixa CLI",
              },
            }
          : {}),
      });
      return openai.responses(context.model);
    }
    case "anthropic":
    case "flixa": {
      const anthropic = createAnthropic({
        apiKey,
        ...(context.baseUrl ? { baseURL: context.baseUrl } : {}),
      });
      return anthropic(context.model);
    }
    case "google": {
      const google = createGoogleGenerativeAI({ apiKey });
      return google(context.model);
    }
  }
}

export function chatHistoryToModelMessages(history: ChatMessage[]): ModelMessage[] {
  return history.map((message) => ({
    role: message.role,
    content: message.content,
  }));
}

export async function generateProviderText(options: {
  provider?: string;
  model?: string;
  baseUrl?: string;
  prompt: string;
  system?: string;
  maxOutputTokens?: number;
}): Promise<{ text: string; context: ResolvedProviderContext }> {
  const context = resolveProviderContext(options);
  const model = createLanguageModel(context);
  const result = await generateText({
    model,
    prompt: options.prompt,
    ...(options.system ? { system: options.system } : {}),
    ...(typeof options.maxOutputTokens === "number"
      ? { maxOutputTokens: options.maxOutputTokens }
      : {}),
  });

  return {
    text: result.text,
    context,
  };
}

export async function runSharedAgentTurn(
  options: SharedAgentRunOptions,
): Promise<SharedAgentRunResult> {
  const context = resolveProviderContext(options);
  const model = createLanguageModel(context);
  const toolContext: ToolExecutionContext = {
    workspaceRoot: cwd(),
    allowShell: options.planMode !== true,
    allowFileEdits: options.planMode !== true,
  };
  const toolDefinitions = getAgentToolDefinitions({
    allowShell: toolContext.allowShell,
    allowFileEdits: toolContext.allowFileEdits,
  });
  const tools: ToolSet = Object.fromEntries(
    toolDefinitions.map((definition) => [
      definition.name,
      aiTool({
        description: definition.description,
        inputSchema: definition.parameters as never,
        execute: async (input) => {
          const result = await executeToolCall(
            {
              name: definition.name,
              callId: `${definition.name}-${Date.now()}`,
              argumentsText: JSON.stringify(input),
            },
            toolContext,
          );
          return result.output;
        },
      }),
    ]),
  );

  const result = await generateText({
    model,
    system: options.system,
    messages: [
      ...chatHistoryToModelMessages(options.history),
      { role: "user", content: options.prompt },
    ],
    tools,
    stopWhen: stepCountIs(8),
    abortSignal: options.signal,
    ...(typeof options.maxOutputTokens === "number"
      ? { maxOutputTokens: options.maxOutputTokens }
      : {}),
  });

  const text = result.text.trim();
  return {
    text,
    context,
    history: [
      ...options.history,
      { role: "user", content: options.prompt },
      { role: "assistant", content: text },
    ],
  };
}

export async function listProviderModelOptions(
  options: ProviderResolutionOptions = {},
): Promise<ProviderModelOption[]> {
  const context = resolveProviderContext(options);
  if (!context.apiKey) {
    throw new Error(
      `No API key configured for ${context.displayName}. Run \`flixa login --provider ${context.provider}\` first.`,
    );
  }

  switch (context.provider) {
    case "openai":
    case "custom-openai":
      return fetchOpenAiCompatibleModelOptions(context);
    case "anthropic":
      return fetchAnthropicModelOptions(context);
    case "google":
      return fetchGeminiModelOptions(context);
    case "openrouter":
      return fetchOpenRouterModelOptions(context);
    case "flixa":
      return [
        {
          id: context.model,
          label: context.model,
          description: "",
        },
      ];
  }
}

async function fetchOpenAiCompatibleModelOptions(
  context: ResolvedProviderContext,
): Promise<ProviderModelOption[]> {
  const payload = await fetchProviderJson<OpenAiCompatibleModelListResponse>({
    url: `${resolveApiBaseUrl(context.baseUrl)}/models`,
    headers: {
      Authorization: `Bearer ${context.apiKey}`,
    },
  });

  const models = Array.isArray(payload.data)
    ? payload.data
        .map((model) => normalizeOpenAiCompatibleModel(model))
        .filter((model): model is ProviderModelOption => model !== null)
    : [];

  return finalizeProviderModelOptions(models, context);
}

async function fetchAnthropicModelOptions(
  context: ResolvedProviderContext,
): Promise<ProviderModelOption[]> {
  const payload = await fetchProviderJson<AnthropicModelListResponse>({
    url: resolveAnthropicModelsUrl(context.baseUrl),
    headers: {
      "anthropic-version": ANTHROPIC_API_VERSION,
      "x-api-key": context.apiKey,
    },
  });

  const models = Array.isArray(payload.data)
    ? payload.data
        .map((model) => normalizeAnthropicModel(model))
        .filter((model): model is ProviderModelOption => model !== null)
    : [];

  return finalizeProviderModelOptions(models, context);
}

async function fetchGeminiModelOptions(
  context: ResolvedProviderContext,
): Promise<ProviderModelOption[]> {
  const modelsById = new Map<string, ProviderModelOption>();
  let pageToken: string | undefined;

  do {
    const url = new URL(`${DEFAULT_GEMINI_API_ROOT}/models`);
    url.searchParams.set("key", context.apiKey);
    url.searchParams.set("pageSize", "1000");
    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }

    const payload = await fetchProviderJson<GeminiModelListResponse>({
      url: url.toString(),
    });

    if (Array.isArray(payload.models)) {
      for (const model of payload.models) {
        const normalized = normalizeGeminiModel(model);
        if (normalized) {
          modelsById.set(normalized.id, normalized);
        }
      }
    }

    pageToken =
      typeof payload.nextPageToken === "string" && payload.nextPageToken.trim()
        ? payload.nextPageToken
        : undefined;
  } while (pageToken);

  return finalizeProviderModelOptions([...modelsById.values()], context);
}

async function fetchOpenRouterModelOptions(
  context: ResolvedProviderContext,
): Promise<ProviderModelOption[]> {
  const payload = await fetchProviderJson<OpenRouterModelListResponse>({
    url: `${resolveApiBaseUrl(context.baseUrl)}/models`,
    headers: {
      Authorization: `Bearer ${context.apiKey}`,
      "HTTP-Referer": OPENROUTER_REFERER,
      "X-Title": OPENROUTER_TITLE,
    },
  });

  const models = Array.isArray(payload.data)
    ? payload.data
        .map((model) => normalizeOpenRouterModel(model))
        .filter((model): model is ProviderModelOption => model !== null)
    : [];

  return finalizeProviderModelOptions(models, context);
}

function normalizeOpenAiCompatibleModel(
  model: OpenAiCompatibleModel,
): ProviderModelOption | null {
  const id = typeof model.id === "string" ? model.id.trim() : "";
  if (!id || !isLikelyTextModelForOpenAiCompatibleProvider(id)) {
    return null;
  }

  const createdAt =
    typeof model.created === "number" && Number.isFinite(model.created)
      ? model.created * 1000
      : undefined;

  return {
    id,
    label: id,
    description: "",
    sortKey: createdAt,
  };
}

function normalizeAnthropicModel(
  model: AnthropicProviderModel,
): ProviderModelOption | null {
  const id = typeof model.id === "string" ? model.id.trim() : "";
  if (!id) {
    return null;
  }

  const label =
    typeof model.display_name === "string" && model.display_name.trim()
      ? model.display_name.trim()
      : id;
  const createdAt = parseDateValue(model.created_at);

  return {
    id,
    label,
    description: "",
    sortKey: createdAt,
  };
}

function normalizeGeminiModel(
  model: GeminiProviderModel,
): ProviderModelOption | null {
  const supportedMethods = Array.isArray(model.supportedGenerationMethods)
    ? model.supportedGenerationMethods
    : [];
  if (!supportedMethods.includes("generateContent")) {
    return null;
  }

  const rawId =
    typeof model.baseModelId === "string" && model.baseModelId.trim()
      ? model.baseModelId.trim()
      : typeof model.name === "string" && model.name.startsWith("models/")
        ? model.name.slice("models/".length).trim()
        : "";

  if (!rawId || !rawId.startsWith("gemini-")) {
    return null;
  }

  const label =
    typeof model.displayName === "string" && model.displayName.trim()
      ? model.displayName.trim()
      : rawId;
  return {
    id: rawId,
    label,
    description: "",
  };
}

function normalizeOpenRouterModel(
  model: OpenRouterProviderModel,
): ProviderModelOption | null {
  const id = typeof model.id === "string" ? model.id.trim() : "";
  if (!id) {
    return null;
  }

  const outputModalities = Array.isArray(model.architecture?.output_modalities)
    ? model.architecture.output_modalities
    : [];
  if (!outputModalities.includes("text")) {
    return null;
  }
  if (outputModalities.some((modality) => modality !== "text")) {
    return null;
  }

  const label =
    typeof model.name === "string" && model.name.trim() ? model.name.trim() : id;
  const createdAt =
    typeof model.created === "number" && Number.isFinite(model.created)
      ? model.created * 1000
      : undefined;

  return {
    id,
    label,
    description: "",
    sortKey: createdAt,
  };
}

function finalizeProviderModelOptions(
  models: readonly ProviderModelOption[],
  context: ResolvedProviderContext,
): ProviderModelOption[] {
  const uniqueModels = new Map<string, ProviderModelOption>();
  for (const model of models) {
    if (!uniqueModels.has(model.id)) {
      uniqueModels.set(model.id, model);
    }
  }

  const result = [...uniqueModels.values()].sort((left, right) =>
    (right.sortKey ?? Number.NEGATIVE_INFINITY) -
      (left.sortKey ?? Number.NEGATIVE_INFINITY) ||
    left.id.localeCompare(right.id),
  );

  if (result.length > 0) {
    return result;
  }

  return [
    {
      id: context.model,
      label: context.model,
      description: "",
    },
  ];
}

async function fetchProviderJson<T>(options: {
  url: string;
  headers?: HeadersInit;
}): Promise<T> {
  const response = await fetch(options.url, {
    headers: options.headers,
  });

  if (!response.ok) {
    throw new Error(await formatProviderApiError(response));
  }

  return (await response.json()) as T;
}

async function formatProviderApiError(response: Response): Promise<string> {
  const fallback = `${response.status} ${response.statusText}`.trim();
  const text = await response.text();
  if (!text) {
    return fallback;
  }

  try {
    const payload = JSON.parse(text) as unknown;
    if (payload && typeof payload === "object") {
      const candidate = payload as Record<string, unknown>;
      const directMessage =
        typeof candidate["message"] === "string" ? candidate["message"] : null;
      if (directMessage) {
        return directMessage;
      }

      const errorValue = candidate["error"];
      if (errorValue && typeof errorValue === "object") {
        const errorRecord = errorValue as Record<string, unknown>;
        const nestedMessage =
          typeof errorRecord["message"] === "string"
            ? errorRecord["message"]
            : null;
        if (nestedMessage) {
          return nestedMessage;
        }
      }
    }
  } catch {
    // Fall back to the raw response body below.
  }

  return `${fallback}: ${text.trim()}`;
}

function resolveApiBaseUrl(baseUrl?: string): string {
  const resolved = baseUrl?.trim();
  if (!resolved) {
    throw new Error("A provider API base URL is required.");
  }

  return resolved.endsWith("/") ? resolved.slice(0, -1) : resolved;
}

function resolveAnthropicModelsUrl(baseUrl?: string): string {
  const resolved = resolveApiBaseUrl(baseUrl);
  return resolved.endsWith("/v1") ? `${resolved}/models` : `${resolved}/v1/models`;
}

function compactModelDescription(
  description: string,
  fallbackParts: Array<string | null>,
  fallback: string,
): string {
  const normalizedDescription = description.replace(/\s+/g, " ").trim();
  if (normalizedDescription) {
    return normalizedDescription;
  }

  const meta = fallbackParts.filter(Boolean).join(" · ");
  return meta || fallback;
}

function formatProviderModelDescription(options: {
  createdAt?: number;
  fallbackParts: Array<string | null>;
}): string {
  const parts = [
    formatModelDate(options.createdAt),
    ...options.fallbackParts.filter(Boolean),
  ];
  return parts.join(" · ");
}

function formatModelDate(value?: number): string | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString().slice(0, 10);
}

function parseDateValue(value: unknown): number | undefined {
  if (typeof value !== "string" || !value.trim()) {
    return undefined;
  }

  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? undefined : timestamp;
}

function truncateSingleLine(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function isLikelyTextModelForOpenAiCompatibleProvider(modelId: string): boolean {
  const normalized = modelId.trim().toLowerCase();
  if (!normalized) {
    return false;
  }

  if (normalized.startsWith("ft:")) {
    return isLikelyTextModelForOpenAiCompatibleProvider(normalized.slice(3));
  }

  const excludedPrefixes = [
    "dall-e-",
    "gpt-image-",
    "omni-moderation-",
    "text-embedding-",
    "text-moderation-",
    "tts-",
    "whisper-",
  ];
  if (excludedPrefixes.some((prefix) => normalized.startsWith(prefix))) {
    return false;
  }

  const excludedFragments = ["-audio-", "-realtime", "-transcribe", "-tts"];
  if (excludedFragments.some((fragment) => normalized.includes(fragment))) {
    return false;
  }

  return (
    normalized.startsWith("chatgpt-") ||
    normalized.startsWith("codex-") ||
    normalized.startsWith("gpt-") ||
    /^o\d/.test(normalized)
  );
}
