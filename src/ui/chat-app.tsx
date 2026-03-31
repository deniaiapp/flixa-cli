import { randomUUID } from "node:crypto";
import { cwd } from "node:process";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box, Static, Text, render, useApp, useInput } from "ink";
import Spinner from "ink-spinner";
import TextInput from "ink-text-input";
import { runAgentTurn } from "../agent-tools/runner.ts";
import type { ChatMessage } from "../flixa/api.ts";
import type { StoredChatSession } from "../sessions/store.ts";
import {
  formatRecentSessionLabel,
  listRecentSessions,
  loadLatestSessionForCwd,
  loadSessionById,
  saveSession,
} from "../sessions/store.ts";
import { setPersistedModel } from "../config/store.ts";
import { renderMarkdownToLines } from "./markdown.ts";
import { CLI_VERSION } from "../version.ts";

type InteractiveChatOptions = {
  model: string;
  system?: string;
  stream: boolean;
  baseUrl: string;
  maxOutputTokens?: number;
};

type InteractiveChatAppProps = {
  apiKey: string;
  options: InteractiveChatOptions;
  session: StoredChatSession;
};

type UiMessage = {
  id: string;
  role: "user" | "assistant" | "system" | "header";
  content: string;
  pending?: boolean;
};

const COLORS = {
  brand: "yellow",
  assistant: "yellowBright",
  user: "cyanBright",
  system: "gray",
  border: "yellow",
  dim: "gray",
  success: "greenBright",
  warning: "magentaBright",
} as const;

const LOGO_LINES = ["▐▛███▜▌", "▝▜█████▛▘", "  ▘▘ ▝▝"];
const SLASH_COMMANDS = [
  { name: "/help", description: "show available commands" },
  { name: "/clear", description: "clear conversation context" },
  { name: "/continue", description: "load latest session for this directory" },
  { name: "/resume", description: "resume a session by id or recent" },
  { name: "/model", description: "switch model" },
  { name: "/exit", description: "exit flixa cli" },
] as const;

export async function runInteractiveChatApp(
  apiKey: string,
  options: InteractiveChatOptions,
  session: StoredChatSession,
): Promise<void> {
  const app = render(
    <InteractiveChatApp apiKey={apiKey} options={options} session={session} />,
    {
      exitOnCtrlC: false,
    },
  );
  await app.waitUntilExit();
}

function InteractiveChatApp({
  apiKey,
  options,
  session,
}: InteractiveChatAppProps): React.JSX.Element {
  const { exit } = useApp();
  const [input, setInput] = useState("");
  const [activeSession, setActiveSession] = useState<StoredChatSession>(session);
  const [messages, setMessages] = useState<UiMessage[]>(() =>
    buildInitialMessages(session.history, session.model || options.model, session.cwd),
  );
  const [conversation, setConversation] = useState<ChatMessage[]>(session.history);
  const [status, setStatus] = useState("Ready");
  const [loading, setLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState(session.model || options.model);
  const [selectedCommandSuggestionIndex, setSelectedCommandSuggestionIndex] =
    useState(0);
  const [resumeSelectorSessions, setResumeSelectorSessions] = useState<
    StoredChatSession[]
  >([]);
  const [selectedResumeSessionIndex, setSelectedResumeSessionIndex] =
    useState(0);
  const abortRef = useRef<AbortController | null>(null);
  const cwdValue = activeSession.cwd || cwd();
  const commandSuggestions = useMemo(
    () => getCommandSuggestions(input),
    [input],
  );
  const isResumeSelectorOpen = resumeSelectorSessions.length > 0;
  const selectedCommandSuggestion =
    commandSuggestions[selectedCommandSuggestionIndex] ??
    commandSuggestions[0] ??
    null;
  const selectedResumeSession =
    resumeSelectorSessions[selectedResumeSessionIndex] ??
    resumeSelectorSessions[0] ??
    null;

  useEffect(() => {
    setSelectedCommandSuggestionIndex((prev) =>
      prev < commandSuggestions.length ? prev : 0,
    );
  }, [commandSuggestions.length]);

  const appendSystemMessage = useCallback((content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: randomUUID(), role: "system", content },
    ]);
  }, []);

  const clearConversation = useCallback((reason?: string) => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([
      buildHeaderMessage(currentModel, cwdValue),
      ...(reason
        ? [{ id: randomUUID(), role: "system" as const, content: reason }]
        : []),
    ]);
    setConversation([]);
    setStatus("Conversation cleared");
  }, [currentModel, cwdValue]);

  const sendPrompt = useCallback(
    async (prompt: string) => {
      const trimmedPrompt = prompt.trim();
      if (!trimmedPrompt || loading) {
        return;
      }

      const userMessage: UiMessage = {
        id: randomUUID(),
        role: "user",
        content: trimmedPrompt,
      };

      setInput("");
      setLoading(true);
      setStatus("Working…");
      setMessages((prev) => [...prev, userMessage]);

      const abortController = new AbortController();
      abortRef.current = abortController;

      try {
        const result = await runAgentTurn({
          apiKey,
          model: currentModel,
          history: conversation,
          prompt: trimmedPrompt,
          system: options.system,
          baseUrl: options.baseUrl,
          maxOutputTokens: options.maxOutputTokens,
          signal: abortController.signal,
          onEvent: (event) => {
            if (event.type === "tool_start") {
              appendSystemMessage(`Using ${event.toolName}: ${event.summary}`);
              setStatus(`Running ${event.toolName}…`);
              return;
            }

            if (event.type === "tool_result") {
              appendSystemMessage(event.summary);
            }
          },
        });

        const displayText = result.finalText || "[no text output]";
        setMessages((prev) => [
          ...prev,
          { id: randomUUID(), role: "assistant", content: displayText },
        ]);
        setConversation(result.history);
        const nextSession = {
          ...activeSession,
          history: result.history,
          model: currentModel,
          system: options.system,
        };
        setActiveSession(nextSession);
        setPersistedModel(currentModel);
        saveSession(nextSession);
        setStatus("Ready");
      } catch (error) {
        if (abortController.signal.aborted) {
          appendSystemMessage("Request canceled.");
          setStatus("Request canceled");
        } else {
          const message =
            error instanceof Error ? error.message : String(error);
          appendSystemMessage(`Request failed: ${message}`);
          setStatus("Last request failed");
        }
      } finally {
        if (abortRef.current === abortController) {
          abortRef.current = null;
        }
        setLoading(false);
      }
    },
    [
      apiKey,
      appendSystemMessage,
      conversation,
      currentModel,
      loading,
      options.baseUrl,
      options.maxOutputTokens,
      options.stream,
      options.system,
    ],
  );

  const resumeIntoSession = useCallback(
    (nextSession: StoredChatSession, sourceLabel: string) => {
      const nextModel = nextSession.model || options.model;
      setActiveSession(nextSession);
      setCurrentModel(nextModel);
      setPersistedModel(nextModel);
      setConversation(nextSession.history);
      setMessages((prev) => [
        ...prev,
        {
          id: randomUUID(),
          role: "system",
          content: `Switched to ${sourceLabel}: ${nextSession.id.slice(0, 8)}`,
        },
        ...buildInitialMessages(nextSession.history, nextModel, nextSession.cwd),
      ]);
      setStatus(`Resumed ${nextSession.id.slice(0, 8)}`);
    },
    [options.model],
  );

  const closeResumeSelector = useCallback((nextStatus = "Ready") => {
    setResumeSelectorSessions([]);
    setSelectedResumeSessionIndex(0);
    setStatus(nextStatus);
  }, []);

  const openResumeSelector = useCallback(() => {
    const recent = listRecentSessions(20);
    if (recent.length === 0) {
      appendSystemMessage("No saved session found.");
      setStatus("No saved sessions");
      setInput("");
      return;
    }

    setResumeSelectorSessions(recent);
    setSelectedResumeSessionIndex(0);
    setInput("");
    setStatus("Select a conversation to resume");
  }, [appendSystemMessage]);

  const handleCommand = useCallback(
    async (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) {
        return;
      }

      if (!trimmed.startsWith("/")) {
        await sendPrompt(trimmed);
        return;
      }

      if (trimmed === "/exit" || trimmed === "/quit") {
        abortRef.current?.abort();
        exit();
        return;
      }

      if (trimmed === "/clear") {
        clearConversation("Conversation context cleared.");
        const nextSession = {
          ...activeSession,
          history: [] as ChatMessage[],
          model: currentModel,
          system: options.system,
        };
        setActiveSession(nextSession);
        saveSession(nextSession);
        setInput("");
        return;
      }

      if (trimmed === "/help") {
        appendSystemMessage(
          "Commands: /help, /clear, /continue, /resume [sessionId], /model <id>, /exit. Ctrl+C cancels an active request or exits when idle.",
        );
        setInput("");
        return;
      }

      if (trimmed === "/continue") {
        const latest = loadLatestSessionForCwd(cwd());
        if (!latest) {
          appendSystemMessage("No saved session found for this directory.");
        } else {
          resumeIntoSession(latest, "latest session");
        }
        setInput("");
        return;
      }

      if (trimmed === "/resume") {
        openResumeSelector();
        return;
      }

      if (trimmed.startsWith("/resume ")) {
        const sessionId = trimmed.slice(8).trim();
        if (!sessionId) {
          appendSystemMessage("Usage: /resume <session-id>");
        } else {
          const loaded = loadSessionById(sessionId);
          if (!loaded) {
            appendSystemMessage(`Session not found: ${sessionId}`);
          } else {
            resumeIntoSession(loaded, "resumed session");
          }
        }
        setInput("");
        return;
      }

      if (trimmed.startsWith("/model ")) {
        const nextModel = trimmed.slice(7).trim();
        if (!nextModel) {
          appendSystemMessage("Usage: /model <model-id>");
        } else {
          setCurrentModel(nextModel);
          setPersistedModel(nextModel);
          const nextSession = {
            ...activeSession,
            model: nextModel,
          };
          setActiveSession(nextSession);
          saveSession(nextSession);
          appendSystemMessage(`Model switched to ${nextModel}`);
          setStatus(`Model: ${nextModel}`);
        }
        setInput("");
        return;
      }

      appendSystemMessage(`Unknown command: ${trimmed}`);
      setInput("");
    },
    [
      activeSession,
      appendSystemMessage,
      clearConversation,
      currentModel,
      exit,
      openResumeSelector,
      options.model,
      options.system,
      resumeIntoSession,
      sendPrompt,
    ],
  );

  useInput(
    (keyInput, key) => {
      if (isResumeSelectorOpen) {
        if (key.escape) {
          closeResumeSelector("Resume canceled");
          return;
        }

        if (key.upArrow) {
          setSelectedResumeSessionIndex((prev) =>
            prev <= 0 ? resumeSelectorSessions.length - 1 : prev - 1,
          );
          return;
        }

        if (key.downArrow) {
          setSelectedResumeSessionIndex((prev) =>
            prev >= resumeSelectorSessions.length - 1 ? 0 : prev + 1,
          );
          return;
        }

        if (key.return && selectedResumeSession) {
          closeResumeSelector();
          resumeIntoSession(selectedResumeSession, "resumed session");
          return;
        }
      }

      if (key.ctrl && keyInput === "c") {
        if (loading && abortRef.current) {
          abortRef.current.abort();
          return;
        }

        exit();
        return;
      }

      if (key.ctrl && keyInput === "l") {
        clearConversation();
        return;
      }

      if (key.escape) {
        setInput("");
        return;
      }

      if (commandSuggestions.length > 0 && key.upArrow) {
        setSelectedCommandSuggestionIndex((prev) =>
          prev <= 0 ? commandSuggestions.length - 1 : prev - 1,
        );
        return;
      }

      if (commandSuggestions.length > 0 && key.downArrow) {
        setSelectedCommandSuggestionIndex((prev) =>
          prev >= commandSuggestions.length - 1 ? 0 : prev + 1,
        );
        return;
      }

      if (key.tab) {
        const completion = selectedCommandSuggestion;
        if (completion) {
          setInput(
            completion.name +
              (completion.name === "/model" || completion.name === "/resume"
                ? " "
                : ""),
          );
        }
      }
    },
    { isActive: true },
  );

  useEffect(() => () => abortRef.current?.abort(), []);

  return (
    <Box flexDirection="column" paddingX={1} paddingY={1}>
      <Static items={messages}>
        {(message) => <MessageRow key={message.id} message={message} />}
      </Static>

      <Box marginTop={messages.length === 0 ? 0 : 1} flexDirection="column">
        <Box
          borderStyle="round"
          borderColor="white"
          borderLeft={false}
          borderRight={false}
          width="100%"
          paddingLeft={2}
          paddingRight={1}
        >
          <Text color={COLORS.user}>› </Text>
          <TextInput
            value={input}
            onChange={setInput}
            onSubmit={handleCommand}
            focus={!isResumeSelectorOpen}
            placeholder="Ask Flixa for code, diffs, or analysis…"
          />
        </Box>
        {isResumeSelectorOpen ? (
          <ResumeSelector
            sessions={resumeSelectorSessions}
            selectedIndex={selectedResumeSessionIndex}
          />
        ) : null}
        {commandSuggestions.length > 0 ? (
          <CommandAutocomplete
            suggestions={commandSuggestions}
            selectedIndex={selectedCommandSuggestionIndex}
          />
        ) : null}
        <Footer loading={loading} status={status} />
      </Box>
    </Box>
  );
}

function MessageRow({ message }: { message: UiMessage }): React.JSX.Element {
  if (message.role === "header") {
    const lines = message.content.split(/\r?\n/);
    return (
      <Box flexDirection="column" marginBottom={1}>
        {lines.map((line, index) => (
          <Text key={index} color={index === 1 ? COLORS.assistant : index === 2 ? COLORS.dim : undefined}>
            {line}
          </Text>
        ))}
      </Box>
    );
  }

  if (message.role === "user") {
    return (
      <Box flexDirection="column" marginBottom={1}>
        {message.content.split(/\r?\n/).map((line, index) => (
          <Text key={index} color={COLORS.user}>
            {index === 0 ? `> ${line}` : `  ${line}`}
          </Text>
        ))}
      </Box>
    );
  }

  if (message.role === "system") {
    return (
      <Box flexDirection="column" marginBottom={1}>
        {message.content.split(/\r?\n/).map((line, index) => (
          <Text key={index} color={COLORS.dim}>
            {index === 0 ? `· ${line}` : `  ${line}`}
          </Text>
        ))}
      </Box>
    );
  }

  return (
    <Box flexDirection="column" marginBottom={1}>
      {message.pending && !message.content ? (
        <Text color={COLORS.assistant}>
          <Spinner type="dots" /> thinking
        </Text>
      ) : null}
      {renderMarkdownToLines(message.content || (message.pending ? "Thinking…" : "")).map(
        (line, index) => (
          <Text key={index}>{line}</Text>
        ),
      )}
      {message.pending && message.content ? (
        <Text color={COLORS.assistant}>
          <Spinner type="dots" />
        </Text>
      ) : null}
    </Box>
  );
}

function Footer({
  loading,
  status,
}: {
  loading: boolean;
  status: string;
}): React.JSX.Element {
  return (
    <Box marginTop={0} justifyContent="space-between">
      <Text color={COLORS.dim}>
        {loading ? "Thinking... · Esc clears input · Ctrl+C cancels" : status}
      </Text>
      <Text color={COLORS.dim}>/help /clear /model /exit</Text>
    </Box>
  );
}

function ResumeSelector({
  sessions,
  selectedIndex,
}: {
  sessions: readonly StoredChatSession[];
  selectedIndex: number;
}): React.JSX.Element {
  const visibleStartIndex = Math.max(
    0,
    Math.min(selectedIndex - 2, sessions.length - 6),
  );
  const visibleSessions = sessions.slice(visibleStartIndex, visibleStartIndex + 6);

  return (
    <Box
      marginTop={1}
      borderStyle="round"
      borderColor={COLORS.border}
      flexDirection="column"
      paddingX={1}
    >
      <Box justifyContent="space-between">
        <Text color={COLORS.assistant}>Resume Conversation</Text>
        <Text color={COLORS.dim}>↑↓ select · Enter resume · Esc cancel</Text>
      </Box>
      {visibleSessions.map((session, index) => {
        const absoluteIndex = visibleStartIndex + index;
        const isSelected = absoluteIndex === selectedIndex;
        return (
          <Text
            key={session.id}
            color={isSelected ? COLORS.assistant : COLORS.dim}
            wrap="truncate"
          >
            {isSelected ? "> " : "  "}
            {formatRecentSessionLabel(session)}
          </Text>
        );
      })}
    </Box>
  );
}

function CommandAutocomplete({
  suggestions,
  selectedIndex,
}: {
  suggestions: readonly (typeof SLASH_COMMANDS)[number][];
  selectedIndex: number;
}): React.JSX.Element {
  const selectedSuggestion =
    suggestions[selectedIndex] ?? suggestions[0] ?? null;
  const visibleStartIndex = Math.max(
    0,
    Math.min(selectedIndex - 1, suggestions.length - 4),
  );
  const visibleSuggestions = suggestions.slice(visibleStartIndex, visibleStartIndex + 4);
  const commandColumnWidth =
    Math.max(...visibleSuggestions.map((suggestion) => suggestion.name.length)) + 2;

  return (
    <Box
      marginTop={1}
      borderStyle="round"
      borderColor={COLORS.border}
      flexDirection="column"
      paddingX={1}
    >
      <Box justifyContent="space-between">
        <Text color={COLORS.assistant}>Commands</Text>
        <Text color={COLORS.dim}>↑↓ select · Tab complete</Text>
      </Box>
      {visibleSuggestions.map((suggestion) => {
        const isSelected = suggestion.name === selectedSuggestion?.name;
        const prefix = isSelected ? "> " : "  ";
        const name = suggestion.name.padEnd(commandColumnWidth, " ");
        return (
          <Text
            key={suggestion.name}
            color={isSelected ? COLORS.assistant : COLORS.dim}
            wrap="truncate"
          >
            {prefix}
            {name}
            {truncateEnd(suggestion.description, 48)}
            {isSelected ? "  [selected]" : ""}
          </Text>
        );
      })}
      <Text color={COLORS.dim}>
        {selectedSuggestion
          ? `${selectedSuggestion.description} · Enter runs current input`
          : "Tab completes the selected command"}
      </Text>
    </Box>
  );
}

function buildInitialMessages(
  history: ChatMessage[],
  model: string,
  cwdValue: string,
): UiMessage[] {
  return [
    buildHeaderMessage(model, cwdValue),
    ...history.map((message) => ({
      id: randomUUID(),
      role: message.role,
      content: message.content,
    })),
  ];
}

function buildHeaderMessage(model: string, cwdValue: string): UiMessage {
  return {
    id: `header-${randomUUID()}`,
    role: "header",
    content: [
      `${LOGO_LINES[0]}   Flixa CLI v${CLI_VERSION}`,
      `${LOGO_LINES[1]}  ${model}`,
      `${LOGO_LINES[2]}   ${truncateMiddle(cwdValue, 64)}`,
    ].join("\n"),
  };
}

function truncateMiddle(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  const left = Math.max(4, Math.floor((maxLength - 1) / 2));
  const right = Math.max(4, maxLength - left - 1);
  return `${value.slice(0, left)}…${value.slice(-right)}`;
}

function truncateEnd(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  if (maxLength <= 1) {
    return value.slice(0, maxLength);
  }

  return `${value.slice(0, maxLength - 1)}…`;
}

function getCommandSuggestions(
  input: string,
): readonly (typeof SLASH_COMMANDS)[number][] {
  if (!input.startsWith("/")) {
    return [];
  }

  if (input.includes(" ")) {
    return [];
  }

  const token = input.split(/\s+/, 1)[0] ?? "";
  if (input.trim().length === 0) {
    return [];
  }

  return SLASH_COMMANDS.filter((command) => command.name.startsWith(token));
}
