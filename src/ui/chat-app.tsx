import { randomUUID } from "node:crypto";
import { cwd } from "node:process";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box, Text, render, useApp, useInput } from "ink";
import Spinner from "ink-spinner";
import TextInput from "ink-text-input";
import {
  runAgentTurn,
  type ToolApprovalRequest,
} from "../agent-tools/runner.ts";
import {
  fetchAvailableModels,
  fetchDeniUsage,
  type ChatMessage,
  type FlixaModelDefinition,
} from "../flixa/api.ts";
import { formatUsageReport } from "../flixa/usage.ts";
import type { StoredChatSession } from "../sessions/store.ts";
import {
  createSession,
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
  autoMode: boolean;
  planMode: boolean;
  acceptEdits: boolean;
};

type InteractiveChatAppProps = {
  apiKey: string;
  options: InteractiveChatOptions;
  session: StoredChatSession;
};

type UiMessage = {
  id: string;
  role: "user" | "assistant" | "system" | "header" | "thinking";
  content: string;
  pending?: boolean;
};

type SlashCommand = {
  name: string;
  description: string;
  aliases?: readonly string[];
};

type SlashCommandSuggestion = SlashCommand & {
  matchedAlias?: string;
};

type FooterModeKey = "default" | "accept-edits" | "plan" | "auto";
type ApprovalChoice = "approve" | "deny";

const COLORS = {
  brand: "yellow",
  assistant: "yellowBright",
  user: "cyanBright",
  system: "white",
  border: "yellow",
  dim: "gray",
  success: "greenBright",
  warning: "magentaBright",
} as const;

const LOGO_LINES = ["▐▛███▜▌", "▝▜█████▛▘", "  ▘▘ ▝▝"];
const SLASH_COMMANDS: readonly SlashCommand[] = [
  { name: "/help", description: "show available commands" },
  {
    name: "/clear",
    description: "start a fresh conversation",
    aliases: ["/new"],
  },
  { name: "/continue", description: "load latest session for this directory" },
  { name: "/resume", description: "resume a session by id or recent" },
  { name: "/model", description: "switch model or open selector" },
  { name: "/usage", description: "show plan and quota usage" },
  { name: "/exit", description: "exit flixa cli", aliases: ["/quit"] },
];

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
  const [activeSession, setActiveSession] =
    useState<StoredChatSession>(session);
  const [messages, setMessages] = useState<UiMessage[]>(() =>
    buildInitialMessages(
      session.history,
      session.model || options.model,
      session.cwd,
    ),
  );
  const [conversation, setConversation] = useState<ChatMessage[]>(
    session.history,
  );
  const [status, setStatus] = useState("Ready");
  const [loading, setLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState(
    session.model || options.model,
  );
  const [autoMode, setAutoMode] = useState(
    session.autoMode ?? options.autoMode,
  );
  const [planMode, setPlanMode] = useState(
    session.planMode ?? options.planMode,
  );
  const [acceptEdits, setAcceptEdits] = useState(
    session.acceptEdits ?? options.acceptEdits,
  );
  const [selectedCommandSuggestionIndex, setSelectedCommandSuggestionIndex] =
    useState(0);
  const [resumeSelectorSessions, setResumeSelectorSessions] = useState<
    StoredChatSession[]
  >([]);
  const [selectedResumeSessionIndex, setSelectedResumeSessionIndex] =
    useState(0);
  const [modelSelectorModels, setModelSelectorModels] = useState<
    FlixaModelDefinition[]
  >([]);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [thinkingStatus, setThinkingStatus] = useState<
    "thinking" | number | null
  >(null);
  const [pendingApproval, setPendingApproval] =
    useState<ToolApprovalRequest | null>(null);
  const [approvalChoice, setApprovalChoice] =
    useState<ApprovalChoice>("approve");
  const abortRef = useRef<AbortController | null>(null);
  const thinkingStartRef = useRef<number | null>(null);
  const approvalResolveRef = useRef<((approved: boolean) => void) | null>(null);
  const approvalRejectRef = useRef<((error: Error) => void) | null>(null);
  const approvalCleanupRef = useRef<(() => void) | null>(null);
  const cwdValue = activeSession.cwd || cwd();
  const commandSuggestions = useMemo(
    () => getCommandSuggestions(input),
    [input],
  );
  const isResumeSelectorOpen = resumeSelectorSessions.length > 0;
  const isModelSelectorOpen = modelSelectorModels.length > 0;
  const isAutocompleteOpen =
    commandSuggestions.length > 0 &&
    !isResumeSelectorOpen &&
    !isModelSelectorOpen;
  const shouldShowFooter = !isAutocompleteOpen;
  const activeFooterMode = useMemo(
    () => getActiveFooterMode(autoMode, planMode, acceptEdits),
    [acceptEdits, autoMode, planMode],
  );
  const activeFooterModeLabel = activeFooterMode
    ? getFooterModeLabel(activeFooterMode)
    : null;
  const footerPermissionLabel = getFooterPermissionLabel(activeFooterMode);
  const selectedCommandSuggestion =
    commandSuggestions[selectedCommandSuggestionIndex] ??
    commandSuggestions[0] ??
    null;
  const selectedResumeSession =
    resumeSelectorSessions[selectedResumeSessionIndex] ??
    resumeSelectorSessions[0] ??
    null;
  const selectedModel =
    modelSelectorModels[selectedModelIndex] ?? modelSelectorModels[0] ?? null;

  useEffect(() => {
    setSelectedCommandSuggestionIndex((prev) =>
      prev < commandSuggestions.length ? prev : 0,
    );
  }, [commandSuggestions.length]);

  useEffect(() => {
    setSelectedModelIndex((prev) =>
      prev < modelSelectorModels.length ? prev : 0,
    );
  }, [modelSelectorModels.length]);

  const appendSystemMessage = useCallback((content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: randomUUID(), role: "system", content },
    ]);
  }, []);

  const settleApprovalRequest = useCallback(
    (result: { approved?: boolean; error?: Error; nextStatus?: string }) => {
      approvalCleanupRef.current?.();
      approvalCleanupRef.current = null;

      const resolveApproval = approvalResolveRef.current;
      const rejectApproval = approvalRejectRef.current;
      approvalResolveRef.current = null;
      approvalRejectRef.current = null;

      setPendingApproval(null);
      setApprovalChoice("approve");

      if (result.nextStatus) {
        setStatus(result.nextStatus);
      }

      if (result.error) {
        rejectApproval?.(result.error);
        return;
      }

      resolveApproval?.(result.approved === true);
    },
    [],
  );

  const clearConversation = useCallback(
    (reason?: string) => {
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
    },
    [currentModel, cwdValue],
  );

  const startFreshConversation = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setResumeSelectorSessions([]);
    setSelectedResumeSessionIndex(0);
    setModelSelectorModels([]);
    setSelectedModelIndex(0);

    const nextSession = createSession(cwdValue, currentModel, options.system, {
      autoMode,
      planMode,
      acceptEdits,
    });
    saveSession(nextSession);
    setActiveSession(nextSession);
    setMessages(buildInitialMessages([], currentModel, nextSession.cwd));
    setConversation([]);
    setInput("");
    setStatus("Ready");
  }, [
    acceptEdits,
    autoMode,
    currentModel,
    cwdValue,
    options.system,
    planMode,
  ]);

  const persistSessionModes = useCallback(
    (
      nextSession: StoredChatSession,
      nextModes: {
        autoMode: boolean;
        planMode: boolean;
        acceptEdits: boolean;
      },
    ): StoredChatSession => {
      const updatedSession = {
        ...nextSession,
        autoMode: nextModes.autoMode,
        planMode: nextModes.planMode,
        acceptEdits: nextModes.acceptEdits,
      };
      setActiveSession(updatedSession);
      saveSession(updatedSession);
      return updatedSession;
    },
    [],
  );

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
          autoMode,
          planMode,
          acceptEdits,
          signal: abortController.signal,
          requestToolApproval: (request) => {
            setPendingApproval(request);
            setApprovalChoice("approve");
            setStatus(`Approval required: ${request.toolName}`);

            return new Promise<boolean>((resolve, reject) => {
              approvalResolveRef.current = resolve;
              approvalRejectRef.current = reject;

              const handleAbort = (): void => {
                settleApprovalRequest({
                  error: createAbortError(),
                  nextStatus: "Request canceled",
                });
              };

              abortController.signal.addEventListener("abort", handleAbort, {
                once: true,
              });
              approvalCleanupRef.current = () => {
                abortController.signal.removeEventListener(
                  "abort",
                  handleAbort,
                );
              };
            });
          },
          onEvent: (event) => {
            if (event.type === "tool_start") {
              setStatus(`Running ${event.toolName}…`);
              return;
            }

            if (event.type === "tool_result") {
              appendSystemMessage(event.summary);
            }
          },
        });

        const displayText = result.finalText || "[no text output]";
        setMessages((prev) => {
          const nextMessages = [...prev];
          if (result.thinkingText?.trim()) {
            nextMessages.push({
              id: randomUUID(),
              role: "thinking",
              content: result.thinkingText.trim(),
            });
          }
          nextMessages.push({
            id: randomUUID(),
            role: "assistant",
            content: displayText,
          });
          return nextMessages;
        });
        setConversation(result.history);
        const nextSession = {
          ...activeSession,
          history: result.history,
          model: currentModel,
          system: options.system,
          autoMode,
          planMode,
          acceptEdits,
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
      autoMode,
      planMode,
      acceptEdits,
      settleApprovalRequest,
    ],
  );

  const resumeIntoSession = useCallback(
    (nextSession: StoredChatSession, sourceLabel: string) => {
      const nextModel = nextSession.model || options.model;
      setActiveSession(nextSession);
      setCurrentModel(nextModel);
      setPersistedModel(nextModel);
      setConversation(nextSession.history);
      setAutoMode(nextSession.autoMode ?? options.autoMode);
      setPlanMode(nextSession.planMode ?? options.planMode);
      setAcceptEdits(nextSession.acceptEdits ?? options.acceptEdits);
      setMessages((prev) => [
        ...prev,
        {
          id: randomUUID(),
          role: "system",
          content: `Switched to ${sourceLabel}: ${nextSession.id.slice(0, 8)}`,
        },
        ...buildInitialMessages(
          nextSession.history,
          nextModel,
          nextSession.cwd,
        ),
      ]);
      setStatus(`Resumed ${nextSession.id.slice(0, 8)}`);
    },
    [options.acceptEdits, options.autoMode, options.model, options.planMode],
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

  const closeModelSelector = useCallback((nextStatus = "Ready") => {
    setModelSelectorModels([]);
    setSelectedModelIndex(0);
    setStatus(nextStatus);
  }, []);

  const applyModelSelection = useCallback(
    (nextModel: string, label?: string) => {
      setCurrentModel(nextModel);
      setPersistedModel(nextModel);
      const nextSession = {
        ...activeSession,
        model: nextModel,
        autoMode,
        planMode,
        acceptEdits,
      };
      setActiveSession(nextSession);
      saveSession(nextSession);
      appendSystemMessage(
        label && label !== nextModel
          ? `Model switched to ${label} (${nextModel})`
          : `Model switched to ${nextModel}`,
      );
      setStatus(`Model: ${label ?? nextModel}`);
    },
    [
      acceptEdits,
      activeSession,
      appendSystemMessage,
      autoMode,
      planMode,
    ],
  );

  const openModelSelector = useCallback(async () => {
    if (loading) {
      appendSystemMessage("Wait for the current request to finish first.");
      return;
    }

    setInput("");
    setStatus("Loading models…");

    try {
      const models = await fetchAvailableModels({
        apiKey,
        baseUrl: options.baseUrl,
      });
      if (models.length === 0) {
        appendSystemMessage("No models available for this account.");
        setStatus("No models available");
        return;
      }

      setModelSelectorModels(models);
      setSelectedModelIndex(findModelSelectionIndex(models, currentModel));
      setStatus("Select a model");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      appendSystemMessage(`Failed to load models: ${message}`);
      setStatus("Model selector failed");
    }
  }, [
    apiKey,
    appendSystemMessage,
    currentModel,
    loading,
    options.baseUrl,
  ]);

  const showUsage = useCallback(async () => {
    if (loading) {
      appendSystemMessage("Wait for the current request to finish first.");
      return;
    }

    setInput("");
    setStatus("Loading usage…");

    try {
      const usage = await fetchDeniUsage({
        apiKey,
        baseUrl: options.baseUrl,
      });
      appendSystemMessage(formatUsageReport(usage));
      setStatus(`Usage: ${usage.tier}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      appendSystemMessage(`Failed to load usage: ${message}`);
      setStatus("Usage request failed");
    }
  }, [apiKey, appendSystemMessage, loading, options.baseUrl]);

  const applyFooterMode = useCallback(
    (modeKey: FooterModeKey | null) => {
      const nextModes = getModeFlags(modeKey);
      setAutoMode(nextModes.autoMode);
      setPlanMode(nextModes.planMode);
      setAcceptEdits(nextModes.acceptEdits);
      persistSessionModes(activeSession, nextModes);
    },
    [activeSession, persistSessionModes],
  );

  const handleCommand = useCallback(
    async (value: string) => {
      let trimmed = value.trim();
      if (!trimmed) {
        return;
      }

      if (!trimmed.startsWith("/")) {
        await sendPrompt(trimmed);
        return;
      }

      if (!trimmed.includes(" ") && commandSuggestions.length > 0) {
        const topSuggestion = commandSuggestions[0];
        if (topSuggestion) {
          trimmed = topSuggestion.name;
        }
      }

      if (trimmed === "/exit" || trimmed === "/quit") {
        abortRef.current?.abort();
        exit();
        return;
      }

      if (trimmed === "/clear" || trimmed === "/new") {
        startFreshConversation();
        return;
      }

      if (trimmed === "/help") {
        appendSystemMessage(buildHelpMessage());
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

      if (trimmed === "/usage") {
        await showUsage();
        return;
      }

      if (trimmed === "/model") {
        await openModelSelector();
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
          applyModelSelection(nextModel);
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
      commandSuggestions,
      currentModel,
      exit,
      openModelSelector,
      openResumeSelector,
      options.model,
      options.system,
      resumeIntoSession,
      showUsage,
      startFreshConversation,
      sendPrompt,
      applyModelSelection,
    ],
  );

  useInput(
    (keyInput, key) => {
      if (pendingApproval) {
        if (key.leftArrow || key.upArrow || key.tab) {
          setApprovalChoice((prev) =>
            prev === "approve" ? "deny" : "approve",
          );
          return;
        }

        if (key.rightArrow || key.downArrow) {
          setApprovalChoice((prev) =>
            prev === "approve" ? "deny" : "approve",
          );
          return;
        }

        if (key.return) {
          settleApprovalRequest({
            approved: approvalChoice === "approve",
            nextStatus:
              approvalChoice === "approve"
                ? `Approved ${pendingApproval.toolName}`
                : `Denied ${pendingApproval.toolName}`,
          });
          return;
        }

        if (key.escape) {
          settleApprovalRequest({
            approved: false,
            nextStatus: `Denied ${pendingApproval.toolName}`,
          });
          return;
        }
      }

      if (isModelSelectorOpen) {
        if (key.escape) {
          closeModelSelector("Model selection canceled");
          return;
        }

        if (key.upArrow) {
          setSelectedModelIndex((prev) =>
            prev <= 0 ? modelSelectorModels.length - 1 : prev - 1,
          );
          return;
        }

        if (key.downArrow) {
          setSelectedModelIndex((prev) =>
            prev >= modelSelectorModels.length - 1 ? 0 : prev + 1,
          );
          return;
        }

        if (key.return && selectedModel) {
          closeModelSelector();
          applyModelSelection(selectedModel.id, selectedModel.label);
          return;
        }
      }

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

      if (
        key.shift &&
        key.tab &&
        !isAutocompleteOpen &&
        !isResumeSelectorOpen &&
        !isModelSelectorOpen
      ) {
        applyFooterMode(getNextFooterMode(activeFooterMode));
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
          setInput(formatCommandInput(completion.name));
        }
      }
    },
    { isActive: true },
  );

  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    let showDurationTimer: ReturnType<typeof setTimeout> | null = null;
    let clearStatusTimer: ReturnType<typeof setTimeout> | null = null;

    if (loading) {
      if (thinkingStartRef.current === null) {
        thinkingStartRef.current = Date.now();
        setThinkingStatus("thinking");
      }
    } else if (thinkingStartRef.current !== null) {
      const duration = Date.now() - thinkingStartRef.current;
      const remainingThinkingTime = Math.max(0, 2000 - duration);
      thinkingStartRef.current = null;

      const showDuration = (): void => {
        setThinkingStatus(duration);
        clearStatusTimer = setTimeout(() => setThinkingStatus(null), 2000);
      };

      if (remainingThinkingTime > 0) {
        showDurationTimer = setTimeout(showDuration, remainingThinkingTime);
      } else {
        showDuration();
      }
    }

    return () => {
      if (showDurationTimer) {
        clearTimeout(showDurationTimer);
      }
      if (clearStatusTimer) {
        clearTimeout(clearStatusTimer);
      }
    };
  }, [loading]);

  return (
    <Box flexDirection="column" paddingX={1} paddingY={1}>
      <Box flexDirection="column">
        {messages.map((message) => (
          <MessageRow key={message.id} message={message} />
        ))}
      </Box>

      <Box marginTop={0} flexDirection="column">
        {thinkingStatus !== null ? (
          <ThinkingIndicator thinkingStatus={thinkingStatus} />
        ) : null}
        <Box flexDirection="column">
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
              focus={
                !isResumeSelectorOpen &&
                !isModelSelectorOpen &&
                pendingApproval === null
              }
              placeholder="Ask Flixa for code, diffs, or analysis…"
            />
          </Box>
        </Box>
        {pendingApproval ? (
          <PermissionApprovalDialog
            request={pendingApproval}
            choice={approvalChoice}
          />
        ) : null}
        {isResumeSelectorOpen ? (
          <ResumeSelector
            sessions={resumeSelectorSessions}
            selectedIndex={selectedResumeSessionIndex}
          />
        ) : isModelSelectorOpen ? (
          <ModelSelector
            models={modelSelectorModels}
            selectedIndex={selectedModelIndex}
          />
        ) : null}
        {!pendingApproval && isAutocompleteOpen ? (
          <CommandAutocomplete
            suggestions={commandSuggestions}
            selectedIndex={selectedCommandSuggestionIndex}
          />
        ) : !pendingApproval ? (
          <Footer
            loading={loading}
            status={status}
            selectedMode={activeFooterMode}
            selectedModeLabel={activeFooterModeLabel}
          />
        ) : null}
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
          <Text
            key={index}
            color={
              index === 1
                ? COLORS.assistant
                : index === 2
                  ? COLORS.dim
                  : undefined
            }
          >
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
          <React.Fragment key={index}>
            {renderSystemLine(line, index)}
          </React.Fragment>
        ))}
      </Box>
    );
  }

  if (message.role === "thinking") {
    const renderedLines = renderMarkdownToLines(message.content);
    return (
      <Box flexDirection="column" marginBottom={1}>
        <Text color={COLORS.dim}>thinking</Text>
        {renderedLines.map((line, index) => (
          <Text key={index} color={COLORS.dim} wrap="wrap">
            {line}
          </Text>
        ))}
      </Box>
    );
  }

  const renderedLines = renderMarkdownToLines(
    message.content || (message.pending ? "Thinking…" : ""),
  );

  return (
    <Box flexDirection="column" marginBottom={1}>
      {message.pending && !message.content ? (
        <Text color={COLORS.assistant}>
          <Spinner type="dots" /> thinking
        </Text>
      ) : null}
      {renderedLines.map((line, index) => (
        <React.Fragment key={index}>
          <Text wrap="wrap">{line}</Text>
          {index < renderedLines.length - 1 && line.trim() === "" ? (
            <Text dimColor> </Text>
          ) : null}
        </React.Fragment>
      ))}
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
  selectedMode,
  selectedModeLabel,
}: {
  loading: boolean;
  status: string;
  selectedMode: FooterModeKey;
  selectedModeLabel: string | null;
}): React.JSX.Element {
  return (
    <Box marginTop={0} justifyContent="space-between">
      <Box>
        {selectedModeLabel ? (
          <Box>
            <Text
              color={getFooterModeColor(selectedMode)}
            >{`>> ${selectedModeLabel}`}</Text>
            <Text color={COLORS.dim}> · shift + tab to switch</Text>
          </Box>
        ) : (
          <Text color={COLORS.dim}>
            /help for shortcuts, commands and more...
          </Text>
        )}
      </Box>
      <Text color={COLORS.dim}>
        {loading ? "Esc clears input · Ctrl+C cancels" : status}
      </Text>
    </Box>
  );
}

function ThinkingIndicator({
  thinkingStatus,
}: {
  thinkingStatus: "thinking" | number;
}): React.JSX.Element {
  const text =
    thinkingStatus === "thinking"
      ? "thinking..."
      : `thought for ${Math.max(1, Math.round(thinkingStatus / 1000))}s`;

  return (
    <Box marginBottom={1} paddingX={2}>
      {thinkingStatus === "thinking" ? (
        <Text color={COLORS.assistant}>
          <Spinner type="dots" /> {text}
        </Text>
      ) : (
        <Text color={COLORS.dim}>{text}</Text>
      )}
    </Box>
  );
}

function PermissionApprovalDialog({
  request,
  choice,
}: {
  request: ToolApprovalRequest;
  choice: ApprovalChoice;
}): React.JSX.Element {
  const isApproveSelected = choice === "approve";

  return (
    <Box
      borderStyle="round"
      borderColor={COLORS.warning}
      flexDirection="column"
      paddingX={1}
      marginTop={1}
    >
      <Box justifyContent="space-between">
        <Text color={COLORS.warning}>{request.title}</Text>
        <Text color={COLORS.dim}>←→ select · Enter confirm · Esc deny</Text>
      </Box>
      <Text>{request.reason}</Text>
      <Text
        color={COLORS.assistant}
      >{`${request.toolName}: ${request.summary}`}</Text>
      {request.details.map((detail) => (
        <Text key={detail} color={COLORS.dim} wrap="wrap">
          {`· ${detail}`}
        </Text>
      ))}
      <Box marginTop={1}>
        <Text color={isApproveSelected ? COLORS.success : COLORS.dim}>
          {isApproveSelected ? "> Approve" : "  Approve"}
        </Text>
        <Text color={COLORS.dim}> </Text>
        <Text color={!isApproveSelected ? COLORS.warning : COLORS.dim}>
          {!isApproveSelected ? "> Deny" : "  Deny"}
        </Text>
      </Box>
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
  const visibleSessions = sessions.slice(
    visibleStartIndex,
    visibleStartIndex + 6,
  );

  return (
    <Box
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

function ModelSelector({
  models,
  selectedIndex,
}: {
  models: readonly FlixaModelDefinition[];
  selectedIndex: number;
}): React.JSX.Element {
  const visibleStartIndex = Math.max(
    0,
    Math.min(selectedIndex - 2, models.length - 5),
  );
  const visibleModels = models.slice(visibleStartIndex, visibleStartIndex + 5);

  return (
    <Box
      borderStyle="round"
      borderColor={COLORS.border}
      flexDirection="column"
      paddingX={1}
    >
      <Box justifyContent="space-between">
        <Text color={COLORS.assistant}>Select Model</Text>
        <Text color={COLORS.dim}>↑↓ select · Enter apply · Esc cancel</Text>
      </Box>
      {visibleModels.map((model, index) => {
        const absoluteIndex = visibleStartIndex + index;
        const isSelected = absoluteIndex === selectedIndex;
        const meta = [model.id, model.tier, ...model.tags]
          .filter(Boolean)
          .join(" · ");
        const secondaryLine = model.description || meta;

        return (
          <Box key={model.id} flexDirection="column">
            <Text color={isSelected ? COLORS.assistant : COLORS.dim}>
              {isSelected ? "> " : "  "}
              {model.label}
            </Text>
            <Text color={isSelected ? COLORS.system : COLORS.dim} wrap="truncate">
              {`  ${truncateEnd(secondaryLine, 84)}`}
            </Text>
            <Text color={COLORS.dim} wrap="truncate">
              {`  ${truncateEnd(meta, 84)}`}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

function CommandAutocomplete({
  suggestions,
  selectedIndex,
}: {
  suggestions: readonly SlashCommandSuggestion[];
  selectedIndex: number;
}): React.JSX.Element {
  const selectedSuggestion =
    suggestions[selectedIndex] ?? suggestions[0] ?? null;
  const visibleStartIndex = Math.max(
    0,
    Math.min(selectedIndex - 1, suggestions.length - 4),
  );
  const visibleSuggestions = suggestions.slice(
    visibleStartIndex,
    visibleStartIndex + 4,
  );

  return (
    <Box paddingX={2} flexDirection="column">
      {visibleSuggestions.map((suggestion) => {
        const isSelected = suggestion.name === selectedSuggestion?.name;
        const suggestionLabel = suggestion.matchedAlias
          ? `${suggestion.name} (${suggestion.matchedAlias})`
          : suggestion.name;
        return (
          <Text
            key={suggestion.name}
            color={isSelected ? COLORS.assistant : COLORS.dim}
            wrap="truncate"
          >
            {`${isSelected ? "> " : "  "}${suggestionLabel}  ${suggestion.description}`}
          </Text>
        );
      })}
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
): readonly SlashCommandSuggestion[] {
  if (!isCommandInput(input) || hasCommandArgs(input)) {
    return [];
  }

  const query = input.slice(1).trim().toLowerCase();
  if (query === "") {
    return [...SLASH_COMMANDS].sort((left, right) =>
      left.name.localeCompare(right.name),
    );
  }

  return SLASH_COMMANDS.map((command) => rankCommandSuggestion(command, query))
    .filter(
      (suggestion): suggestion is RankedSlashCommand => suggestion !== null,
    )
    .sort(compareRankedSlashCommands)
    .map(({ command, matchedAlias }) => ({ ...command, matchedAlias }));
}

type RankedSlashCommand = {
  command: SlashCommand;
  matchedAlias?: string;
  bucket: number;
  score: number;
};

function isCommandInput(input: string): boolean {
  return input.startsWith("/");
}

function hasCommandArgs(input: string): boolean {
  if (!isCommandInput(input)) {
    return false;
  }

  if (!input.includes(" ")) {
    return false;
  }

  return !input.endsWith(" ");
}

function formatCommandInput(commandName: string): string {
  return `${commandName} `;
}

function rankCommandSuggestion(
  command: SlashCommand,
  query: string,
): RankedSlashCommand | null {
  const normalizedName = normalizeCommandToken(command.name);
  const normalizedAliases = (command.aliases ?? []).map((alias) => ({
    raw: alias,
    normalized: normalizeCommandToken(alias),
  }));
  const nameParts = normalizedName.split(/[:_-]/g).filter(Boolean);
  const descriptionWords = tokenizeSearchText(command.description);

  if (normalizedName === query) {
    return { command, bucket: 0, score: 0 };
  }

  const exactAlias = normalizedAliases.find(
    (alias) => alias.normalized === query,
  );
  if (exactAlias) {
    return { command, matchedAlias: exactAlias.raw, bucket: 1, score: 0 };
  }

  if (normalizedName.startsWith(query)) {
    return {
      command,
      bucket: 2,
      score: normalizedName.length - query.length,
    };
  }

  const prefixAlias = normalizedAliases.find((alias) =>
    alias.normalized.startsWith(query),
  );
  if (prefixAlias) {
    return {
      command,
      matchedAlias: prefixAlias.raw,
      bucket: 3,
      score: prefixAlias.normalized.length - query.length,
    };
  }

  const namePartMatch = nameParts
    .filter((part) => part.startsWith(query))
    .sort((left, right) => left.length - right.length)[0];
  if (namePartMatch) {
    return {
      command,
      bucket: 4,
      score: namePartMatch.length - query.length,
    };
  }

  const descriptionPrefix = descriptionWords
    .filter((word) => word.startsWith(query))
    .sort((left, right) => left.length - right.length)[0];
  if (descriptionPrefix) {
    return {
      command,
      bucket: 5,
      score: descriptionPrefix.length - query.length,
    };
  }

  const nameContainsIndex = normalizedName.indexOf(query);
  if (nameContainsIndex >= 0) {
    return {
      command,
      bucket: 6,
      score: nameContainsIndex,
    };
  }

  const aliasContains = normalizedAliases
    .map((alias) => ({
      raw: alias.raw,
      index: alias.normalized.indexOf(query),
    }))
    .filter((alias) => alias.index >= 0)
    .sort((left, right) => left.index - right.index)[0];
  if (aliasContains) {
    return {
      command,
      matchedAlias: aliasContains.raw,
      bucket: 7,
      score: aliasContains.index,
    };
  }

  const descriptionContains = descriptionWords
    .map((word) => word.indexOf(query))
    .filter((index) => index >= 0)
    .sort((left, right) => left - right)[0];
  if (descriptionContains !== undefined) {
    return {
      command,
      bucket: 8,
      score: descriptionContains,
    };
  }

  return null;
}

function compareRankedSlashCommands(
  left: RankedSlashCommand,
  right: RankedSlashCommand,
): number {
  if (left.bucket !== right.bucket) {
    return left.bucket - right.bucket;
  }

  if (left.score !== right.score) {
    return left.score - right.score;
  }

  return left.command.name.localeCompare(right.command.name);
}

function normalizeCommandToken(value: string): string {
  return value.replace(/^\//, "").toLowerCase();
}

function tokenizeSearchText(value: string): string[] {
  return value
    .split(/[\s:_/-]+/g)
    .map((part) => part.toLowerCase().replace(/[^a-z0-9]/g, ""))
    .filter(Boolean);
}

function renderSystemLine(line: string, index: number): React.JSX.Element {
  const toolSummaryMatch = line.match(
    /^(Bash|Read|Write|Edit|Grep|Glob)\b(?:\s+(.*))?$/,
  );
  if (toolSummaryMatch) {
    const toolName = toolSummaryMatch[1] ?? "";
    const summary = toolSummaryMatch[2] ?? "";
    return (
      <Text color={COLORS.system}>
        {index === 0 ? "· " : "  "}
        <Text color={COLORS.assistant}>{toolName}</Text>
        {summary ? (
          <>
            {" "}
            <Text dimColor>{summary}</Text>
          </>
        ) : null}
      </Text>
    );
  }

  return (
    <Text color={COLORS.system}>{index === 0 ? `· ${line}` : `  ${line}`}</Text>
  );
}

function getActiveFooterMode(
  autoMode: boolean,
  planMode: boolean,
  acceptEdits: boolean,
): FooterModeKey {
  if (autoMode) {
    return "auto";
  }

  if (planMode) {
    return "plan";
  }

  if (acceptEdits) {
    return "accept-edits";
  }

  return "default";
}

function getFooterModeLabel(mode: FooterModeKey): string | null {
  switch (mode) {
    case "default":
      return null;
    case "accept-edits":
      return "accept edits on";
    case "plan":
      return "plan mode on";
    case "auto":
      return "auto mode on";
  }
}

function getFooterModeColor(
  mode: FooterModeKey,
): (typeof COLORS)[keyof typeof COLORS] {
  switch (mode) {
    case "auto":
      return COLORS.brand;
    case "plan":
      return COLORS.user;
    case "accept-edits":
      return COLORS.warning;
    case "default":
      return COLORS.dim;
  }
}

function getFooterPermissionLabel(mode: FooterModeKey): string {
  switch (mode) {
    case "default":
      return "permissions (approve)";
    case "accept-edits":
      return "permissions (accept edits)";
    case "plan":
      return "permissions (plan)";
    case "auto":
      return "permissions (auto)";
  }
}

function getModeFlags(mode: FooterModeKey | null): {
  autoMode: boolean;
  planMode: boolean;
  acceptEdits: boolean;
} {
  return {
    autoMode: mode === "auto",
    planMode: mode === "plan",
    acceptEdits: mode === "accept-edits",
  };
}

function getNextFooterMode(currentMode: FooterModeKey | null): FooterModeKey {
  switch (currentMode) {
    case "default":
      return "accept-edits";
    case "accept-edits":
      return "plan";
    case "plan":
      return "auto";
    case "auto":
      return "default";
    default:
      return "default";
  }
}

function findModelSelectionIndex(
  models: readonly FlixaModelDefinition[],
  currentModel: string,
): number {
  const exactIndex = models.findIndex((model) => model.id === currentModel);
  if (exactIndex >= 0) {
    return exactIndex;
  }

  const currentModelSuffix = stripModelProvider(currentModel);
  const suffixIndex = models.findIndex(
    (model) => stripModelProvider(model.id) === currentModelSuffix,
  );
  return suffixIndex >= 0 ? suffixIndex : 0;
}

function stripModelProvider(modelId: string): string {
  const slashIndex = modelId.indexOf("/");
  return slashIndex === -1 ? modelId : modelId.slice(slashIndex + 1);
}

function createAbortError(): Error {
  const error = new Error("Aborted");
  error.name = "AbortError";
  return error;
}

function buildHelpMessage(): string {
  return [
    "Flixa understands your codebase, makes edits with your permission, and executes commands from your terminal.",
    "",
    "Shortcuts",
    "  / for commands",
    "  Tab completes the selected command",
    "  ↑↓ navigates command suggestions or resume sessions",
    "  Shift+Tab cycles modes: default -> accept edits -> plan -> auto",
    "  Esc clears input or denies the current approval dialog",
    "  Ctrl+C cancels an active request or exits when idle",
    "  Ctrl+L clears the current conversation",
    "",
    "Commands",
    "  /help                 show this help",
    "  /clear, /new          start a fresh conversation",
    "  /continue             load the latest session for this directory",
    "  /resume [sessionId]   resume a saved session",
    "  /model [id]           open model selector or switch model",
    "  /usage                show plan and quota usage",
    "  /exit, /quit          exit Flixa CLI",
  ].join("\n");
}
