import { getApiKey } from "../auth/service.ts";

export const DEFAULT_FLIXA_BASE_URL =
  process.env.FLIXA_BASE_URL?.trim() || "https://api.flixa.engineer/v1/agent";
export const DEFAULT_FLIXA_MODEL =
  process.env.FLIXA_MODEL?.trim() ||
  process.env.OPENAI_MODEL?.trim() ||
  "gpt-5.4";

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

export interface StreamResponseResult {
  text: string;
  response?: FlixaResponse;
}

export function resolveFlixaApiKey(): string | null {
  const envApiKey = process.env.FLIXA_API_KEY?.trim();
  if (envApiKey) return envApiKey;

  const openAiCompatibleApiKey = process.env.OPENAI_API_KEY?.trim();
  if (openAiCompatibleApiKey) return openAiCompatibleApiKey;

  return getApiKey();
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
  if (
    typeof response.output_text === "string" &&
    response.output_text.length > 0
  ) {
    return response.output_text;
  }

  return (response.output ?? [])
    .flatMap((item) => item.content ?? [])
    .map((content) => (typeof content.text === "string" ? content.text : ""))
    .join("");
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
