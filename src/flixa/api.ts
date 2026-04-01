import { getApiKey } from "../auth/service.ts";

export const DEFAULT_FLIXA_BASE_URL =
  process.env.FLIXA_BASE_URL?.trim() || "https://api.flixa.engineer/v1/agent";
export const DEFAULT_FLIXA_MODEL =
  process.env.FLIXA_MODEL?.trim() ||
  process.env.OPENAI_MODEL?.trim() ||
  "openai/gpt-5.4";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ResponseMessageInputItem {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface FunctionCallOutputInputItem {
  type: "function_call_output";
  call_id: string;
  output: string;
}

export type ResponseInputItem =
  | ResponseMessageInputItem
  | FunctionCallOutputInputItem;

export interface FunctionToolDefinition {
  type: "function";
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export interface FlixaResponseOutputContent {
  type?: string;
  text?: string;
}

export interface FlixaResponseOutputItem {
  type?: string;
  content?: FlixaResponseOutputContent[];
  summary?: FlixaResponseOutputContent[];
  id?: string;
  call_id?: string;
  name?: string;
  arguments?: string;
}

export interface FlixaResponse {
  id?: string;
  output?: FlixaResponseOutputItem[];
  output_text?: string;
}

export interface CreateResponseOptions {
  apiKey: string;
  model: string;
  messages?: ChatMessage[];
  input?: ResponseInputItem[];
  system?: string;
  stream?: boolean;
  baseUrl?: string;
  maxOutputTokens?: number;
  signal?: AbortSignal;
  previousResponseId?: string;
  tools?: FunctionToolDefinition[];
  toolChoice?: "auto" | "none";
}

export type FlixaModelTier = "free" | "plus" | "pro" | "max";

export interface FlixaModelDefinition {
  id: string;
  label: string;
  description: string;
  tags: string[];
  premium?: boolean;
  tier: FlixaModelTier;
}

export interface AnthropicCompatibleModelDefinition {
  type: "model";
  id: string;
  display_name: string;
}

export interface AnthropicCompatibleModelList {
  data: AnthropicCompatibleModelDefinition[];
  has_more: boolean;
  first_id: string | null;
  last_id: string | null;
}

export interface DeniUsageBucket {
  category: "basic" | "premium";
  unit: "requests" | "tokens";
  limit: number | null;
  used: number;
  remaining: number | null;
  periodStart: string;
  periodEnd: string | null;
}

export interface DeniUsageInfo {
  tier: FlixaModelTier;
  planId: string | null;
  status: string | null;
  isTeam: boolean;
  periodEnd: string | null;
  maxModeEnabled: boolean;
  maxModeEligible: boolean;
  usage: DeniUsageBucket[];
}

export interface StreamResponseResult {
  text: string;
  response?: FlixaResponse;
}

export interface FlixaResponseDisplayParts {
  assistantText: string;
  thinkingText: string;
}

export function resolveFlixaApiKey(): string | null {
  const envApiKey = process.env.FLIXA_API_KEY?.trim();
  if (envApiKey) return envApiKey;

  const openAiCompatibleApiKey = process.env.OPENAI_API_KEY?.trim();
  if (openAiCompatibleApiKey) return openAiCompatibleApiKey;

  return getApiKey();
}

export async function fetchAvailableModels(options: {
  apiKey: string;
  baseUrl?: string;
}): Promise<FlixaModelDefinition[]> {
  const response = await fetch(`${resolveApiRoot(options.baseUrl)}/models`, {
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(await formatApiError(response));
  }

  const payload = (await response.json()) as unknown;
  return extractModelDefinitions(payload);
}

export async function fetchDeniUsage(options: {
  apiKey: string;
  baseUrl?: string;
}): Promise<DeniUsageInfo> {
  const response = await fetch(`${resolveApiRoot(options.baseUrl)}/deni/usage`, {
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(await formatApiError(response));
  }

  return (await response.json()) as DeniUsageInfo;
}

export async function createResponse(
  options: CreateResponseOptions,
): Promise<FlixaResponse> {
  const response = await fetch(`${resolveBaseUrl(options.baseUrl)}/responses`, {
    method: "POST",
    signal: options.signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
    },
    body: JSON.stringify(buildRequestBody(options)),
  });

  if (!response.ok) {
    throw new Error(await formatApiError(response));
  }

  return (await response.json()) as FlixaResponse;
}

export async function streamResponse(
  options: CreateResponseOptions,
  onText: (delta: string) => void,
): Promise<StreamResponseResult> {
  const response = await fetch(`${resolveBaseUrl(options.baseUrl)}/responses`, {
    method: "POST",
    signal: options.signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
    },
    body: JSON.stringify(buildRequestBody({ ...options, stream: true })),
  });

  if (!response.ok) {
    throw new Error(await formatApiError(response));
  }

  if (!response.body) {
    throw new Error("Streaming response body was empty.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";
  let completedResponse: FlixaResponse | undefined;

  const handleEvent = (eventBlock: string): void => {
    const parsedEvent = parseSseData(eventBlock);
    if (!parsedEvent || parsedEvent === "[DONE]") {
      return;
    }

    const payload = safeParseJson(parsedEvent);
    if (!payload || typeof payload !== "object") {
      return;
    }

    const payloadRecord = payload as Record<string, unknown>;
    const type = payloadRecord["type"];

    if (
      type === "response.output_text.delta" &&
      typeof payloadRecord["delta"] === "string"
    ) {
      const delta = payloadRecord["delta"];
      text += delta;
      onText(delta);
      return;
    }

    if (
      type === "response.output_text.done" &&
      typeof payloadRecord["text"] === "string" &&
      !text
    ) {
      text = payloadRecord["text"];
      onText(text);
      return;
    }

    if (
      type === "response.completed" &&
      isFlixaResponse(payloadRecord["response"])
    ) {
      completedResponse = payloadRecord["response"];
      return;
    }

    if (type === "error") {
      const message = extractErrorMessage(payloadRecord);
      throw new Error(message || "Flixa API request failed.");
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value, { stream: !done });

    const events = buffer.split(/\r?\n\r?\n/);
    buffer = events.pop() ?? "";

    for (const eventBlock of events) {
      handleEvent(eventBlock);
    }

    if (done) {
      break;
    }
  }

  if (buffer.trim()) {
    handleEvent(buffer);
  }

  if (!text && completedResponse) {
    text = extractOutputText(completedResponse);
    if (text) {
      onText(text);
    }
  }

  return { text, response: completedResponse };
}

export function extractOutputText(response: FlixaResponse): string {
  return extractResponseDisplayParts(response).assistantText;
}

export function extractThinkingText(response: FlixaResponse): string {
  return extractResponseDisplayParts(response).thinkingText;
}

export function extractFunctionCalls(
  response: FlixaResponse,
): Array<{
  id?: string;
  callId: string;
  name: string;
  argumentsText: string;
}> {
  return (response.output ?? [])
    .filter(
      (item) =>
        item.type === "function_call" &&
        typeof item.call_id === "string" &&
        typeof item.name === "string",
    )
    .map((item) => ({
      id: item.id,
      callId: item.call_id as string,
      name: item.name as string,
      argumentsText:
        typeof item.arguments === "string" ? item.arguments : "{}",
    }));
}

function buildRequestBody(
  options: CreateResponseOptions,
): Record<string, unknown> {
  const body: Record<string, unknown> = {
    model: options.model,
    input: (options.input ?? options.messages?.map(messageToInputItem) ?? []),
    stream: options.stream ?? false,
  };

  if (options.system?.trim()) {
    body["instructions"] = options.system.trim();
  }

  if (typeof options.maxOutputTokens === "number") {
    body["max_output_tokens"] = options.maxOutputTokens;
  }

  if (options.previousResponseId) {
    body["previous_response_id"] = options.previousResponseId;
  }

  if (options.tools && options.tools.length > 0) {
    body["tools"] = options.tools;
  }

  if (options.toolChoice) {
    body["tool_choice"] = options.toolChoice;
  }

  return body;
}

function messageToInputItem(message: ChatMessage): ResponseMessageInputItem {
  return {
    role: message.role,
    content: message.content,
  };
}

function resolveBaseUrl(baseUrl?: string): string {
  return (baseUrl?.trim() || DEFAULT_FLIXA_BASE_URL).replace(/\/+$/, "");
}

export function resolveApiRoot(baseUrl?: string): string {
  const normalizedBaseUrl = resolveBaseUrl(baseUrl);
  return normalizedBaseUrl.endsWith("/agent")
    ? normalizedBaseUrl.slice(0, -"/agent".length)
    : normalizedBaseUrl;
}

async function formatApiError(response: Response): Promise<string> {
  const statusLine = `Flixa API request failed: ${response.status} ${response.statusText}`;

  try {
    const payload = (await response.json()) as Record<string, unknown>;
    const message = extractErrorMessage(payload);
    return message ? `${statusLine} - ${message}` : statusLine;
  } catch {
    return statusLine;
  }
}

function extractErrorMessage(payload: Record<string, unknown>): string | null {
  if (typeof payload["message"] === "string") {
    return payload["message"];
  }

  const error = payload["error"];
  if (!error || typeof error !== "object") {
    return null;
  }

  const errorMessage = (error as Record<string, unknown>)["message"];
  return typeof errorMessage === "string" ? errorMessage : null;
}

function parseSseData(eventBlock: string): string | null {
  const dataLines = eventBlock
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart());

  if (dataLines.length === 0) {
    return null;
  }

  return dataLines.join("\n");
}

function safeParseJson(value: string): unknown {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
}

function isFlixaResponse(value: unknown): value is FlixaResponse {
  return typeof value === "object" && value !== null;
}

function extractResponseDisplayParts(
  response: FlixaResponse,
): FlixaResponseDisplayParts {
  const outputItems = response.output ?? [];
  const thinkingSegments: string[] = [];
  const assistantSegments: string[] = [];

  for (const item of outputItems) {
    const itemType = normalizeItemType(item.type);
    const content = item.content ?? [];
    const summary = item.summary ?? [];

    if (itemType === "reasoning" || itemType === "thinking") {
      thinkingSegments.push(
        ...extractTextSegments(summary),
        ...extractTextSegments(content),
      );
      continue;
    }

    if (itemType === "message" || itemType === "output") {
      assistantSegments.push(...extractNonThinkingContent(content));
      thinkingSegments.push(...extractThinkingContent(content));
      continue;
    }

    assistantSegments.push(...extractNonThinkingContent(content));
    thinkingSegments.push(
      ...extractTextSegments(summary),
      ...extractThinkingContent(content),
    );
  }

  if (
    assistantSegments.length === 0 &&
    typeof response.output_text === "string" &&
    response.output_text.length > 0
  ) {
    assistantSegments.push(response.output_text);
  }

  return {
    assistantText: joinSegments(assistantSegments),
    thinkingText: joinSegments(thinkingSegments),
  };
}

function extractNonThinkingContent(
  contentItems: FlixaResponseOutputContent[],
): string[] {
  return contentItems
    .filter((content) => !isThinkingType(content.type))
    .flatMap((content) =>
      typeof content.text === "string" && content.text.length > 0
        ? [content.text]
        : [],
    );
}

function extractThinkingContent(
  contentItems: FlixaResponseOutputContent[],
): string[] {
  return contentItems
    .filter((content) => isThinkingType(content.type))
    .flatMap((content) =>
      typeof content.text === "string" && content.text.length > 0
        ? [content.text]
        : [],
    );
}

function extractTextSegments(
  contentItems: FlixaResponseOutputContent[],
): string[] {
  return contentItems.flatMap((content) =>
    typeof content.text === "string" && content.text.length > 0
      ? [content.text]
      : [],
  );
}

function normalizeItemType(value: string | undefined): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function isThinkingType(value: string | undefined): boolean {
  const normalized = normalizeItemType(value);
  return (
    normalized.includes("reasoning") ||
    normalized.includes("thinking") ||
    normalized.includes("summary")
  );
}

function joinSegments(segments: string[]): string {
  return segments
    .map((segment) => segment.trim())
    .filter(Boolean)
    .join("\n\n");
}

function extractModelDefinitions(payload: unknown): FlixaModelDefinition[] {
  if (Array.isArray(payload)) {
    return payload.filter(isFlixaModelDefinition);
  }

  if (!payload || typeof payload !== "object") {
    throw new Error("Unexpected models response format.");
  }

  const wrappedData = (payload as AnthropicCompatibleModelList).data;
  if (!Array.isArray(wrappedData)) {
    throw new Error("Unexpected models response format.");
  }

  if (wrappedData.every(isFlixaModelDefinition)) {
    return wrappedData;
  }

  if (wrappedData.every(isAnthropicCompatibleModelDefinition)) {
    return wrappedData.map((model) => ({
      id: model.id,
      label: model.display_name,
      description: "",
      tags: ["anthropic-compatible"],
      tier: "free",
    }));
  }

  throw new Error("Unexpected models response format.");
}

function isFlixaModelDefinition(value: unknown): value is FlixaModelDefinition {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate["id"] === "string" &&
    typeof candidate["label"] === "string" &&
    typeof candidate["description"] === "string" &&
    Array.isArray(candidate["tags"]) &&
    typeof candidate["tier"] === "string"
  );
}

function isAnthropicCompatibleModelDefinition(
  value: unknown,
): value is AnthropicCompatibleModelDefinition {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    candidate["type"] === "model" &&
    typeof candidate["id"] === "string" &&
    typeof candidate["display_name"] === "string"
  );
}
