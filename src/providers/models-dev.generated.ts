// Generated from https://models.dev/api.json.
// Refresh with: bun run providers:update

export interface ModelsDevGeneratedModel {
  id: string;
  name: string;
  description: string;
  toolCall: boolean;
}

export interface ModelsDevGeneratedProvider {
  id: string;
  name: string;
  npm: string;
  api: string | null;
  env: string[];
  models: ModelsDevGeneratedModel[];
}

export const MODELS_DEV_PROVIDERS: ModelsDevGeneratedProvider[] = [
  {
    "id": "302ai",
    "name": "302.AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.302.ai/v1",
    "env": [
      "302AI_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-4-7",
        "name": "claude-opus-4-7",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-5v-turbo",
        "name": "GLM-5V-Turbo",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-nano-2026-03-17",
        "name": "gpt-5.4-nano-2026-03-17",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "gpt-5.4-mini",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini-2026-03-17",
        "name": "gpt-5.4-mini-2026-03-17",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-nano",
        "name": "gpt-5.4-nano",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "grok-4.20-beta-0309-reasoning",
        "name": "grok-4.20-beta-0309-reasoning",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "grok-4.20-beta-0309-non-reasoning",
        "name": "grok-4.20-beta-0309-non-reasoning",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "glm-5-turbo",
        "name": "glm-5-turbo",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "abacus",
    "name": "Abacus",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://routellm.abacus.ai/v1",
    "env": [
      "ABACUS_API_KEY"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "route-llm",
        "name": "RouteLLM",
        "description": "RouteLLM routes prompts to an appropriate Abacus-backed text-generation model",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "abliteration-ai",
    "name": "abliteration.ai",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.abliteration.ai/v1",
    "env": [
      "ABLIT_KEY"
    ],
    "models": [
      {
        "id": "abliterated-model-large",
        "name": "Abliterated Model Large",
        "description": "GLM-5.2 model abliterated and finetuned for cyber, ML red teaming, and agent testing",
        "toolCall": true
      },
      {
        "id": "abliterated-model",
        "name": "Abliterated Model",
        "description": "Multimodal model for analyzing text, images, documents, and rich media",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ai-router",
    "name": "AI-ROUTER",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.ai-router.dev/v1",
    "env": [
      "AI_ROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "aiand",
    "name": "ai&",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.aiand.com/v1",
    "env": [
      "AIAND_API_KEY"
    ],
    "models": [
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31b-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "motif-technologies/motif-3",
        "name": "Motif 3",
        "description": "Motif 3 is a large-scale, decoder-only Mixture-of-Experts (MoE) language model with 314 billion total parameters and 13.2 billion parameters activated per token.",
        "toolCall": false
      }
    ]
  },
  {
    "id": "aihubmix",
    "name": "AIHubMix",
    "npm": "@aihubmix/ai-sdk-provider",
    "api": null,
    "env": [
      "AIHUBMIX_API_KEY"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code-highspeed",
        "name": "Kimi K2.7 Code Highspeed",
        "description": "Lower-latency Kimi Code variant for interactive edits and coding-agent loops",
        "toolCall": true
      }
    ]
  },
  {
    "id": "aki-io",
    "name": "AKI.IO",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://aki.io/v1",
    "env": [
      "AKI_IO_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k2.7-code-1100b",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "qwen3.6-35b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "gemma4-26b",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "mistral4-119b",
        "name": "Mistral Small 4",
        "description": "Fast Mistral production model for chat, extraction, and cost-sensitive agents",
        "toolCall": true
      },
      {
        "id": "minimax-m2.5-230b",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba",
    "name": "Alibaba",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    "env": [
      "DASHSCOPE_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-max-preview",
        "name": "Qwen3.6 Max Preview",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "qwen3.6-plus",
        "name": "Qwen3.6 Plus",
        "description": "Earlier Qwen multimodal workhorse for million-token agent and document tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.5-35b-a3b",
        "name": "Qwen3.5 35B-A3B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.5-27b",
        "name": "Qwen3.5 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba-cn",
    "name": "Alibaba (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://dashscope.aliyuncs.com/compatible-mode/v1",
    "env": [
      "DASHSCOPE_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "qwen3.7-flash",
        "name": "Qwen3.7 Flash",
        "description": "Lightweight multimodal Qwen model for high-throughput text, image, and video tasks",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "qwen3.6-max-preview",
        "name": "Qwen3.6 Max Preview",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Moonshot Kimi K2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen3.6-plus",
        "name": "Qwen3.6 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba-coding-plan",
    "name": "Alibaba Coding Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://coding-intl.dashscope.aliyuncs.com/v1",
    "env": [
      "ALIBABA_CODING_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-plus",
        "name": "Qwen3.6 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.5-plus",
        "name": "Qwen3.5 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-next",
        "name": "Qwen3 Coder Next",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "qwen3-max-2026-01-23",
        "name": "Qwen3 Max",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-plus",
        "name": "Qwen3 Coder Plus",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba-coding-plan-cn",
    "name": "Alibaba Coding Plan (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://coding.dashscope.aliyuncs.com/v1",
    "env": [
      "ALIBABA_CODING_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-plus",
        "name": "Qwen3.6 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.5-plus",
        "name": "Qwen3.5 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-next",
        "name": "Qwen3 Coder Next",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "qwen3-max-2026-01-23",
        "name": "Qwen3 Max",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-plus",
        "name": "Qwen3 Coder Plus",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba-token-plan",
    "name": "Alibaba Token Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://token-plan.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1",
    "env": [
      "ALIBABA_TOKEN_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max-preview",
        "name": "Qwen3.8 Max Preview",
        "description": "Preview Qwen flagship for million-token multimodal reasoning and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "alibaba-token-plan-cn",
    "name": "Alibaba Token Plan (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1",
    "env": [
      "ALIBABA_TOKEN_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max-preview",
        "name": "Qwen3.8 Max Preview",
        "description": "Preview Qwen flagship for million-token multimodal reasoning and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "amazon-bedrock",
    "name": "Amazon Bedrock",
    "npm": "@ai-sdk/amazon-bedrock",
    "api": null,
    "env": [
      "AWS_ACCESS_KEY_ID",
      "AWS_SECRET_ACCESS_KEY",
      "AWS_REGION",
      "AWS_BEARER_TOKEN_BEDROCK"
    ],
    "models": [
      {
        "id": "xai.grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "eu.anthropic.claude-opus-5",
        "name": "Claude Opus 5 (EU)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "us.anthropic.claude-opus-5",
        "name": "Claude Opus 5 (US)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "jp.anthropic.claude-opus-5",
        "name": "Claude Opus 5 (JP)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "anthropic.claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "au.anthropic.claude-opus-5",
        "name": "Claude Opus 5 (AU)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "global.anthropic.claude-opus-5",
        "name": "Claude Opus 5 (Global)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "global.openai.gpt-5.6-sol",
        "name": "GPT-5.6 Sol (Global)",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai.gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "openai.gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "global.openai.gpt-5.6-luna",
        "name": "GPT-5.6 Luna (Global)",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "global.openai.gpt-5.6-terra",
        "name": "GPT-5.6 Terra (Global)",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ambient",
    "name": "Ambient",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.ambient.xyz/v1",
    "env": [
      "AMBIENT_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Fast DeepSeek model for efficient chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.2",
        "name": "GLM-5.2",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "ambient/large",
        "name": "Ambient Large",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2-FP8",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "stepfun/step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek model for efficient chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "xiaomi/mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "MiMo omni model for text, image, video, audio, and agents",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1-FP8",
        "name": "GLM 5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "amd",
    "name": "AMD",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://developer.amd.com.cn/radeon/api/v1",
    "env": [
      "AMD_API_KEY"
    ],
    "models": [
      {
        "id": "DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "anthropic",
    "name": "Anthropic",
    "npm": "@ai-sdk/anthropic",
    "api": null,
    "env": [
      "ANTHROPIC_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-5",
        "name": "Claude Opus 4.5 (latest)",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-5-20251101",
        "name": "Claude Opus 4.5",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5-20251001",
        "name": "Claude Haiku 4.5",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5",
        "name": "Claude Haiku 4.5 (latest)",
        "description": "Fast Claude lane for lightweight agents, office tasks, and responsive chat",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-5-20250929",
        "name": "Claude Sonnet 4.5",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      }
    ]
  },
  {
    "id": "anyapi",
    "name": "AnyAPI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.anyapi.ai/v1",
    "env": [
      "ANYAPI_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-r1",
        "name": "DeepSeek Reasoner",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-chat",
        "name": "DeepSeek Chat",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "google/gemini-3-flash-preview",
        "name": "Gemini 3 Flash Preview",
        "description": "New Gemini flash lane bringing frontier-style multimodal reasoning to cheaper runs",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.2",
        "name": "GPT-5.2",
        "description": "Reliable GPT generation for broad coding, writing, and tool-assisted product work",
        "toolCall": true
      },
      {
        "id": "mistralai/devstral-2512",
        "name": "Devstral 2",
        "description": "Mistral's coding-agent model for repository work, terminal tasks, and software fixes",
        "toolCall": true
      }
    ]
  },
  {
    "id": "arcee",
    "name": "Arcee",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.arcee.ai/api/v1",
    "env": [
      "ARCEE_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash-latest",
        "name": "DeepSeek V4 Flash Latest",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling-small",
        "name": "Inkling Small",
        "description": "Multimodal MoE reasoning model (276B total, 12B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "trinity-large-thinking",
        "name": "Trinity Large Thinking",
        "description": "Reasoning-optimized 398B MoE agent model with extended thinking for long-horizon and multi-turn tool use",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      }
    ]
  },
  {
    "id": "atomic-chat",
    "name": "Atomic Chat",
    "npm": "@ai-sdk/openai-compatible",
    "api": "http://127.0.0.1:1337/v1",
    "env": [
      "ATOMIC_CHAT_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen3_5-9B-Q4_K_M",
        "name": "Qwen 3.5 9B (Q4_K_M)",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen3_5-9B-MLX-4bit",
        "name": "Qwen 3.5 9B (MLX 4-bit)",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Meta-Llama-3_1-8B-Instruct-GGUF",
        "name": "Meta Llama 3.1 8B Instruct (GGUF)",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "gemma-4-E4B-it-IQ4_XS",
        "name": "Gemma 4 E4B Instruct (IQ4_XS)",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": false
      },
      {
        "id": "gemma-4-E4B-it-MLX-4bit",
        "name": "Gemma 4 E4B Instruct (MLX 4-bit)",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": false
      }
    ]
  },
  {
    "id": "auriko",
    "name": "Auriko",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.auriko.ai/v1",
    "env": [
      "AURIKO_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "qwen-3.6-plus",
        "name": "Qwen3.6 Plus",
        "description": "Earlier Qwen multimodal workhorse for million-token agent and document tasks",
        "toolCall": true
      },
      {
        "id": "minimax-m2-7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      },
      {
        "id": "minimax-m2-7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "Low-latency M2.7 variant for interactive coding plans and agent loops",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "description": "Reasoning-first Gemini preview for agentic coding and complex problem solving",
        "toolCall": true
      }
    ]
  },
  {
    "id": "azure",
    "name": "Azure",
    "npm": "@ai-sdk/azure",
    "api": null,
    "env": [
      "AZURE_RESOURCE_NAME",
      "AZURE_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "claude-mythos-5",
        "name": "Claude Mythos 5",
        "description": "Restricted Claude model for advanced cybersecurity and biology research workflows",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-chat-latest",
        "name": "GPT Chat Latest",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "azure-cognitive-services",
    "name": "Azure Cognitive Services",
    "npm": "@ai-sdk/azure",
    "api": null,
    "env": [
      "AZURE_COGNITIVE_SERVICES_RESOURCE_NAME",
      "AZURE_COGNITIVE_SERVICES_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "claude-mythos-5",
        "name": "Claude Mythos 5",
        "description": "Restricted Claude model for advanced cybersecurity and biology research workflows",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-chat-latest",
        "name": "GPT Chat Latest",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "bailing",
    "name": "Bailing",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.tbox.cn/api/llm/v1/chat/completions",
    "env": [
      "BAILING_API_TOKEN"
    ],
    "models": [
      {
        "id": "Ling-1T",
        "name": "Ling-1T",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": true
      },
      {
        "id": "Ring-1T",
        "name": "Ring-1T",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": false
      }
    ]
  },
  {
    "id": "baseten",
    "name": "Baseten",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.baseten.co/v1",
    "env": [
      "BASETEN_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling-small",
        "name": "Inkling Small",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling",
        "name": "Inkling",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2-Fast",
        "name": "GLM 5.2 Fast",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B",
        "name": "Nemotron Ultra",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1",
        "name": "GLM 5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "berget",
    "name": "Berget.AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.berget.ai/v1",
    "env": [
      "BERGET_API_KEY"
    ],
    "models": [
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "mistralai/Mistral-Medium-3.5-128B",
        "name": "Mistral Medium 3.5 128B",
        "description": "Mistral model for multilingual chat, reasoning, and tool-assisted workflows",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31B-it",
        "name": "Gemma 4 31B Instruct",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.7",
        "name": "GLM 4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "mistralai/Mistral-Small-3.2-24B-Instruct-2506",
        "name": "Mistral Small 3.2 24B Instruct 2506",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT-OSS-120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-3.3-70B-Instruct",
        "name": "Llama 3.3 70B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "blueclaw",
    "name": "Blue Claw",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://openai.blueclaw.network/v1",
    "env": [
      "BLUECLAW_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen3.6-27B",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B-FP8",
        "name": "Qwen3.6 35B A3B FP8",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cerebras",
    "name": "Cerebras",
    "npm": "@ai-sdk/cerebras",
    "api": null,
    "env": [
      "CEREBRAS_API_KEY"
    ],
    "models": [
      {
        "id": "gemma-4-31b",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "chutes",
    "name": "Chutes",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://llm.chutes.ai/v1",
    "env": [
      "CHUTES_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3.8-27B-TEE",
        "name": "Qwen3.8 27B TEE",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731-TEE",
        "name": "DeepSeek V4 Flash 0731 TEE",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3-TEE",
        "name": "Kimi K3 TEE",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.2-TEE",
        "name": "DeepSeek V3.2 TEE",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-235B-A22B-Thinking-2507-TEE",
        "name": "Qwen3 235B A22B Thinking 2507 TEE",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2-TEE",
        "name": "GLM 5.2 TEE",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-27B-TEE",
        "name": "Qwen3.6 27B TEE",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6-TEE",
        "name": "Kimi K2.6 TEE",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1-TEE",
        "name": "GLM 5.1 TEE",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31B-turbo-TEE",
        "name": "gemma 4 31B turbo TEE",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B-TEE",
        "name": "Qwen3.5 397B A17B TEE",
        "description": "Large open Qwen multimodal MoE for visual agents and long technical tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-32B-TEE",
        "name": "Qwen3 32B TEE",
        "description": "Dense open Qwen model for self-hosted chat, reasoning, and coding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "clarifai",
    "name": "Clarifai",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.clarifai.com/v2/ext/openai/v1",
    "env": [
      "CLARIFAI_PAT"
    ],
    "models": [
      {
        "id": "moonshotai/chat-completion/models/Kimi-K2_6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "arcee_ai/AFM/models/trinity-mini",
        "name": "Trinity Mini",
        "description": "Reasoning-tuned 26B MoE model with 3B active parameters for agents, tools, and multi-step workloads",
        "toolCall": true
      },
      {
        "id": "openai/chat-completion/models/gpt-oss-120b-high-throughput",
        "name": "GPT OSS 120B High Throughput",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "qwen/qwenLM/models/Qwen3-30B-A3B-Thinking-2507",
        "name": "Qwen3 30B A3B Thinking 2507",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507",
        "name": "Qwen3 30B A3B Instruct 2507",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "mistralai/completion/models/Ministral-3-3B-Reasoning-2512",
        "name": "Ministral 3 3B Reasoning 2512",
        "description": "Compact Mistral model for edge, latency-sensitive, and cost-efficient workloads",
        "toolCall": true
      },
      {
        "id": "minimaxai/chat-completion/models/MiniMax-M2_5-high-throughput",
        "name": "MiniMax-M2.5 High Throughput",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "qwen/qwenCoder/models/Qwen3-Coder-30B-A3B-Instruct",
        "name": "Qwen3 Coder 30B A3B Instruct",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "openai/chat-completion/models/gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "mistralai/completion/models/Ministral-3-14B-Reasoning-2512",
        "name": "Ministral 3 14B Reasoning 2512",
        "description": "Compact Mistral model for edge, latency-sensitive, and cost-efficient workloads",
        "toolCall": true
      },
      {
        "id": "clarifai/main/models/mm-poly-8b",
        "name": "MM Poly 8B",
        "description": "Multimodal model for analyzing text, images, documents, and rich media",
        "toolCall": false
      },
      {
        "id": "deepseek-ai/deepseek-ocr/models/DeepSeek-OCR",
        "name": "DeepSeek OCR",
        "description": "OCR model for extracting structured text from documents and screenshots",
        "toolCall": false
      }
    ]
  },
  {
    "id": "claudinio",
    "name": "Claudinio",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.claudin.io/v1",
    "env": [
      "CLAUDINIO_API_KEY"
    ],
    "models": [
      {
        "id": "claudinio",
        "name": "Claudinio",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "claudius",
        "name": "Claudius",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cline-pass",
    "name": "ClinePass",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.cline.bot/api/v1",
    "env": [
      "CLINE_API_KEY"
    ],
    "models": [
      {
        "id": "cline-pass/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "cline-pass/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "cline-pass/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "cline-pass/qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "cline-pass/minimax-m3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "cline-pass/qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "cline-pass/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "cline-pass/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "cline-pass/mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "cline-pass/mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "cline-pass/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cloudferro-sherlock",
    "name": "CloudFerro Sherlock",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api-sherlock.cloudferro.com/openai/v1/",
    "env": [
      "CLOUDFERRO_SHERLOCK_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMaxAI/MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "OpenAI GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "speakleash/Bielik-11B-v3.0-Instruct",
        "name": "Bielik 11B v3.0 Instruct",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": true
      },
      {
        "id": "speakleash/Bielik-11B-v2.6-Instruct",
        "name": "Bielik 11B v2.6 Instruct",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-3.3-70B-Instruct",
        "name": "Llama 3.3 70B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cloudflare-ai-gateway",
    "name": "Cloudflare AI Gateway",
    "npm": "ai-gateway-provider",
    "api": null,
    "env": [
      "CLOUDFLARE_API_TOKEN",
      "CLOUDFLARE_ACCOUNT_ID",
      "CLOUDFLARE_GATEWAY_ID"
    ],
    "models": [
      {
        "id": "anthropic/claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6",
        "name": "GPT-5.6",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "workers-ai/@cf/zai-org/glm-5.2",
        "name": "Glm 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "workers-ai/@cf/moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5-pro",
        "name": "GPT-5.5 Pro",
        "description": "Highest-accuracy GPT-5.5 tier for slower, precision-heavy reasoning and coding",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cloudflare-workers-ai",
    "name": "Cloudflare Workers AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1",
    "env": [
      "CLOUDFLARE_ACCOUNT_ID",
      "CLOUDFLARE_API_KEY"
    ],
    "models": [
      {
        "id": "@cf/qwen/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "@cf/deepseek-ai/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "@cf/deepseek-ai/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "@cf/zai-org/glm-5.2",
        "name": "Glm 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "@cf/moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "@cf/moonshotai/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "@cf/google/gemma-4-26b-a4b-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "@cf/nvidia/nemotron-3-120b-a12b",
        "name": "Nemotron 3 Super 120B",
        "description": "Nemotron middle tier for collaborative agents and high-volume reasoning workloads",
        "toolCall": true
      },
      {
        "id": "@cf/zai-org/glm-4.7-flash",
        "name": "GLM-4.7-Flash",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "@cf/ibm-granite/granite-4.0-h-micro",
        "name": "Granite 4.0 H Micro",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "@cf/openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "@cf/openai/gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cohere",
    "name": "Cohere",
    "npm": "@ai-sdk/cohere",
    "api": null,
    "env": [
      "COHERE_API_KEY"
    ],
    "models": [
      {
        "id": "command-a-plus-05-2026",
        "name": "Command A Plus",
        "description": "Cohere's stronger command model for multilingual agents and enterprise workflows",
        "toolCall": true
      },
      {
        "id": "north-mini-code-1-0",
        "name": "North Mini Code",
        "description": "Cohere coding model for practical software engineering and agentic edits",
        "toolCall": true
      },
      {
        "id": "command-a-translate-08-2025",
        "name": "Command A Translate",
        "description": "Translation model for multilingual conversion, localization, and cross-language workflows",
        "toolCall": true
      },
      {
        "id": "command-a-reasoning-08-2025",
        "name": "Command A Reasoning",
        "description": "Cohere reasoning model for multilingual enterprise agents, tools, and complex workflows",
        "toolCall": true
      },
      {
        "id": "command-a-03-2025",
        "name": "Command A",
        "description": "Cohere command model for multilingual enterprise agents, tools, and chat",
        "toolCall": true
      },
      {
        "id": "command-r7b-arabic-02-2025",
        "name": "Command R7B Arabic",
        "description": "Open Command R model optimized for Arabic enterprise chat, RAG, and cultural knowledge",
        "toolCall": true
      },
      {
        "id": "command-r7b-12-2024",
        "name": "Command R7B",
        "description": "Cohere retrieval model for long-context chat and enterprise RAG workflows",
        "toolCall": true
      },
      {
        "id": "command-r-plus-08-2024",
        "name": "Command R+",
        "description": "Cohere's RAG workhorse for long-context enterprise search and tool use",
        "toolCall": true
      },
      {
        "id": "command-r-08-2024",
        "name": "Command R",
        "description": "Cohere retrieval model for long-context chat and enterprise RAG workflows",
        "toolCall": true
      },
      {
        "id": "command-a-vision-07-2025",
        "name": "Command A Vision",
        "description": "Cohere vision model for multilingual document analysis, OCR, and image understanding",
        "toolCall": false
      },
      {
        "id": "c4ai-aya-vision-32b",
        "name": "Aya Vision 32B",
        "description": "Open multilingual vision model for OCR, visual reasoning, and image question answering",
        "toolCall": false
      },
      {
        "id": "c4ai-aya-vision-8b",
        "name": "Aya Vision 8B",
        "description": "Compact open multilingual vision model for OCR and visual question answering",
        "toolCall": false
      }
    ]
  },
  {
    "id": "coralbricks",
    "name": "CoralBricks",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.coralbricks.ai/v1",
    "env": [
      "CORAL_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-fp4",
        "name": "GLM 5.2 FP4",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "cortecs",
    "name": "Cortecs",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.cortecs.ai/v1",
    "env": [
      "CORTECS_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "qwen3.8-2.4t-a95b",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "crof",
    "name": "CrofAI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://crof.ai/v1",
    "env": [
      "CROF_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash (New)",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "kimi-k3-eco",
        "name": "Kimi K3 Eco",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro-lightning",
        "name": "DeepSeek V4 Pro Lightning",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "crossmodel",
    "name": "CrossModel",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.crossmodel.ai/v1",
    "env": [
      "CROSSMODEL_API_KEY"
    ],
    "models": [
      {
        "id": "z-ai/glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "gemini/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini/gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini/gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "moonshot/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.7-flash",
        "name": "Qwen3.7 Flash",
        "description": "Lightweight multimodal Qwen model for high-throughput text, image, and video tasks",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "crusoe",
    "name": "Crusoe",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.inference.crusoecloud.com/v1",
    "env": [
      "CRUSOE_API_KEY"
    ],
    "models": [
      {
        "id": "zai/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "nvidia/Nemotron-3-Nano-Omni-Reasoning-30B-A3B",
        "name": "Nemotron 3 Nano Omni 30B A3B Reasoning",
        "description": "Open Nemotron omni model combining reasoning with text, vision, and audio",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "zai/GLM-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31b-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3-0324",
        "name": "DeepSeek V3 0324",
        "description": "March 2025 checkpoint of DeepSeek-V3 with improved reasoning and coding",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-3.3-70B-Instruct",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Popular open Llama workhorse for multilingual chat, coding, and self-hosting",
        "toolCall": true
      }
    ]
  },
  {
    "id": "daoxe",
    "name": "DaoXE",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://daoxe.com/v1",
    "env": [
      "DAOXE_API_KEY"
    ],
    "models": [
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "description": "Reasoning-first Gemini preview for agentic coding and complex problem solving",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Earlier Kimi frontier model for long-context agents, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5-20251001",
        "name": "Claude Haiku 4.5",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      }
    ]
  },
  {
    "id": "databricks",
    "name": "Databricks",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://${DATABRICKS_HOST}/ai-gateway/mlflow/v1",
    "env": [
      "DATABRICKS_HOST",
      "DATABRICKS_TOKEN"
    ],
    "models": [
      {
        "id": "databricks-gpt-5-6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "databricks-glm-5-2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "databricks-kimi-k2-7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "databricks-claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-4-nano",
        "name": "GPT-5.4 nano",
        "description": "Cheapest GPT-5.4 lane for simple routing, extraction, and bulk automation",
        "toolCall": true
      },
      {
        "id": "databricks-claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "databricks-claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "databricks-gpt-5-4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "deepinfra",
    "name": "Deep Infra",
    "npm": "@ai-sdk/deepinfra",
    "api": null,
    "env": [
      "DEEPINFRA_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3.8-27B",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.8-2.4T-A95B",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.8-Max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling-Small",
        "name": "Inkling Small",
        "description": "Multimodal MoE reasoning model (276B total, 12B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "tencent/Hy3",
        "name": "Hy3",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.deepseek.com",
    "env": [
      "DEEPSEEK_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "deepseek-chat",
        "name": "DeepSeek Chat",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "deepseek-reasoner",
        "name": "DeepSeek Reasoner",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      }
    ]
  },
  {
    "id": "digitalocean",
    "name": "DigitalOcean",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.do-ai.run/v1",
    "env": [
      "DIGITALOCEAN_ACCESS_TOKEN"
    ],
    "models": [
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8-2.4T-A95B",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "anthropic-claude-opus-5",
        "name": "Anthropic Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-luna",
        "name": "OpenAI GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-terra",
        "name": "OpenAI GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-sol",
        "name": "OpenAI GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "anthropic-claude-5-sonnet",
        "name": "Anthropic Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "nemotron-3-ultra-550b",
        "name": "Nemotron 3 Ultra",
        "description": "Flagship Nemotron model for high-throughput reasoning and complex agents",
        "toolCall": true
      },
      {
        "id": "anthropic-claude-fable-5",
        "name": "Anthropic Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "dinference",
    "name": "DInference",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.dinference.com/v1",
    "env": [
      "DINFERENCE_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "General GLM flagship for coding, analysis, and tool-heavy engineering workflows",
        "toolCall": true
      },
      {
        "id": "minimax-m2.5",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Mature GLM model for dependable coding, reasoning, and structured agent tasks",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "drun",
    "name": "D.Run (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://chat.d.run/v1",
    "env": [
      "DRUN_API_KEY"
    ],
    "models": [
      {
        "id": "public/minimax-m25",
        "name": "MiniMax M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "public/deepseek-r1",
        "name": "DeepSeek R1",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      },
      {
        "id": "public/deepseek-v3",
        "name": "DeepSeek V3",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ebcloud",
    "name": "EBCloud",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://maas-api.ebcloud.com/v1",
    "env": [
      "EBCLOUD_API_KEY"
    ],
    "models": [
      {
        "id": "DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "GLM-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "echo",
    "name": "Echo",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://echo.tracerml.ai/v1",
    "env": [
      "ECHO_API_KEY"
    ],
    "models": [
      {
        "id": "echo",
        "name": "Echo",
        "description": "Adaptive model for coding, reasoning, and tool-driven agent workflows through one OpenAI-compatible endpoint",
        "toolCall": true
      }
    ]
  },
  {
    "id": "edenai",
    "name": "Eden AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.edenai.run/v3",
    "env": [
      "EDENAI_API_KEY"
    ],
    "models": [
      {
        "id": "zai/glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "google/gemini-flash-latest",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "vertex/gemini-3.7-flash@us",
        "name": "Gemini 3.7 Flash (US)",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "vertex/gemini-flash-latest",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "vertex/gemini-3.7-flash@eu",
        "name": "Gemini 3.7 Flash (EU)",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "vertex/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "together_ai/deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "xai/grok-latest",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "qwen/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      }
    ]
  },
  {
    "id": "empiriolabs",
    "name": "EmpirioLabs AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.empiriolabs.ai/v1",
    "env": [
      "EMPIRIOLABS_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3-8-27b",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "glm-5-3",
        "name": "GLM 5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "muse-glimmer-30b",
        "name": "Muse Glimmer 30B",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "muse-spark-1-2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "qwen3-8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "qwen3-7-flash",
        "name": "Qwen3.7 Flash",
        "description": "Lightweight multimodal Qwen model for high-throughput text, image, and video tasks",
        "toolCall": true
      },
      {
        "id": "muse-spark-1-1",
        "name": "Muse Spark 1.1",
        "description": "Muse Spark is a natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration.",
        "toolCall": true
      },
      {
        "id": "seed-2-1-turbo",
        "name": "Seed 2.1 Turbo",
        "description": "Faster ByteDance Seed 2.1 model for multimodal reasoning and latency-sensitive agent workflows",
        "toolCall": true
      },
      {
        "id": "fugu-ultra-v1-0",
        "name": "Fugu Ultra v1.0",
        "description": "Quality-first multi-agent model for hard research, analysis, and competitions",
        "toolCall": true
      }
    ]
  },
  {
    "id": "evroc",
    "name": "evroc",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://models.think.evroc.com/v1",
    "env": [
      "EVROC_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "evroc/roc",
        "name": "roc",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "mistralai/Mistral-Medium-3.5-128B",
        "name": "Mistral Medium 3.5",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B-FP8",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-26B-A4B-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "nvidia/Llama-3.3-70B-Instruct-FP8",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Popular open Llama workhorse for multilingual chat, coding, and self-hosting",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-Reranker-4B",
        "name": "Qwen3 Reranker 4B",
        "description": "Reranking model for improving retrieval quality in search and recommendation systems",
        "toolCall": false
      },
      {
        "id": "Qwen/Qwen3-Embedding-8B",
        "name": "Qwen3 Embedding 8B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      },
      {
        "id": "mistralai/Voxtral-Small-24B-2507",
        "name": "Voxtral Small 24B",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": false
      },
      {
        "id": "KBLab/kb-whisper-large",
        "name": "KB Whisper",
        "description": "Speech transcription model for accurate audio-to-text and captioning workflows",
        "toolCall": false
      }
    ]
  },
  {
    "id": "fastrouter",
    "name": "FastRouter",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://go.fastrouter.ai/api/v1",
    "env": [
      "FASTROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "anthropic/claude-opus-4.8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5-pro",
        "name": "GPT-5.5 Pro",
        "description": "Highest-accuracy GPT-5.5 tier for slower, precision-heavy reasoning and coding",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-build-0.1",
        "name": "Grok Build 0.1",
        "description": "Fast Grok coding model tuned for agentic engineering and iterative edits",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31b-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "Low-latency M2.7 variant for interactive coding plans and agent loops",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "fireworks-ai",
    "name": "Fireworks AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.fireworks.ai/inference/v1/",
    "env": [
      "FIREWORKS_API_KEY"
    ],
    "models": [
      {
        "id": "accounts/fireworks/models/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/nemotron-lightning-3p5-30b-a3b",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "Fast NVIDIA Nemotron MoE for reliable agentic tasks across enterprise workloads",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/muse-glimmer-30b",
        "name": "Muse Glimmer 30B",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/qwen3p8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/routers/kimi-k3-fast",
        "name": "Kimi K3 Fast",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/routers/glm-5p2-fast",
        "name": "GLM 5.2 Fast",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/routers/kimi-k2p7-code-fast",
        "name": "Kimi K2.7 Code Fast",
        "description": "Kimi coding model for software agents, refactors, and repository reasoning",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "accounts/fireworks/models/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "freemodel",
    "name": "FreeModel",
    "npm": "@ai-sdk/anthropic",
    "api": "https://cc.freemodel.dev/v1",
    "env": [
      "FREEMODEL_API_KEY"
    ],
    "models": [
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      },
      {
        "id": "gpt-5.3-codex",
        "name": "GPT-5.3 Codex",
        "description": "Coding-optimized GPT model for repository edits, reviews, and agentic software work",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5-20251001",
        "name": "Claude Haiku 4.5",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      }
    ]
  },
  {
    "id": "friendli",
    "name": "Friendli",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.friendli.ai/serverless/v1",
    "env": [
      "FRIENDLI_TOKEN"
    ],
    "models": [
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31B-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.2",
        "name": "DeepSeek-V3.2",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "frogbot",
    "name": "FrogBot",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://app.frogbot.ai/api/v1",
    "env": [
      "FROGBOT_API_KEY"
    ],
    "models": [
      {
        "id": "grok-4-3",
        "name": "Grok 4.3",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek v4 Pro",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "qwen-3-6-plus",
        "name": "Qwen 3.6 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "minimax-m2-7",
        "name": "MiniMax-M2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "gpt-5-4-mini",
        "name": "GPT-5.4 Mini",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5-5",
        "name": "GPT-5.5",
        "description": "Frontier GPT model for professional reasoning, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "gemini-3-1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "description": "Advanced Gemini model for complex reasoning, coding, and multimodal analysis",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "gpt-5-3-codex",
        "name": "GPT-5.3 Codex",
        "description": "Coding-optimized GPT model for repository edits, reviews, and agentic software work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gemini-3-flash-preview",
        "name": "Gemini 3 Flash Preview",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "github-copilot",
    "name": "GitHub Copilot",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.githubcopilot.com",
    "env": [
      "GITHUB_TOKEN"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "mai-code-1.1-flash",
        "name": "MAI-Code-1.1-Flash",
        "description": "Microsoft coding model with native vision support, optimized for fast and efficient software development",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      }
    ]
  },
  {
    "id": "gitlab",
    "name": "GitLab Duo",
    "npm": "gitlab-ai-provider",
    "api": null,
    "env": [
      "GITLAB_TOKEN"
    ],
    "models": [
      {
        "id": "duo-chat-opus-5",
        "name": "Agentic Chat (Claude Opus 5)",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-6-sol",
        "name": "Agentic Chat (GPT-5.6 Sol)",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-6-luna",
        "name": "Agentic Chat (GPT-5.6 Luna)",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-6-terra",
        "name": "Agentic Chat (GPT-5.6 Terra)",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "duo-chat-sonnet-5",
        "name": "Agentic Chat (Claude Sonnet 5)",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "duo-chat-fable-5",
        "name": "Agentic Chat (Claude Fable 5)",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "duo-chat-opus-4-8",
        "name": "Agentic Chat (Claude Opus 4.8)",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-5",
        "name": "Agentic Chat (GPT-5.5)",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      },
      {
        "id": "duo-chat-opus-4-7",
        "name": "Agentic Chat (Claude Opus 4.7)",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-4-mini",
        "name": "Agentic Chat (GPT-5.4 Mini)",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-4-nano",
        "name": "Agentic Chat (GPT-5.4 Nano)",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      },
      {
        "id": "duo-chat-gpt-5-4",
        "name": "Agentic Chat (GPT-5.4)",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "gmicloud",
    "name": "GMI Cloud",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.gmi-serving.com/v1",
    "env": [
      "GMICLOUD_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/GLM-5.2-FP8",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code-highspeed",
        "name": "Kimi K2.7 Code Highspeed",
        "description": "Lower-latency Kimi Code variant for interactive edits and coding-agent loops",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.7-Max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1-FP8",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-4.6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "google",
    "name": "Google",
    "npm": "@ai-sdk/google",
    "api": null,
    "env": [
      "GOOGLE_API_KEY",
      "GOOGLE_GENERATIVE_AI_API_KEY",
      "GEMINI_API_KEY"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-flash-lite-image",
        "name": "Nano Banana 2 Lite",
        "description": "Fastest, most cost-efficient Gemini image model for high-volume 1K generation and editing",
        "toolCall": true
      },
      {
        "id": "gemini-flash-latest",
        "name": "Gemini Flash Latest",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-flash-lite-latest",
        "name": "Gemini Flash-Lite Latest",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-flash-lite",
        "name": "Gemini 3.1 Flash Lite",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "deep-research-preview-04-2026",
        "name": "Deep Research Preview (Apr-21-2026)",
        "description": "Agentic model for autonomous multi-step research, synthesis, and cited reports",
        "toolCall": true
      },
      {
        "id": "deep-research-max-preview-04-2026",
        "name": "Deep Research Max Preview (Apr-21-2026)",
        "description": "Maximum-comprehensiveness agentic researcher for multi-step investigation, synthesis, and cited reports",
        "toolCall": true
      },
      {
        "id": "gemini-robotics-er-1.6-preview",
        "name": "Gemini Robotics-ER 1.6 Preview",
        "description": "Vision-language model for embodied reasoning: spatial understanding, task planning, and physical-world agentic robotics",
        "toolCall": true
      },
      {
        "id": "gemma-4-26b-a4b-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "google-vertex",
    "name": "Vertex",
    "npm": "@ai-sdk/google-vertex",
    "api": null,
    "env": [
      "GOOGLE_VERTEX_PROJECT",
      "GOOGLE_VERTEX_LOCATION",
      "GOOGLE_APPLICATION_CREDENTIALS"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "claude-opus-5@default",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5@default",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8@default",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gemini-flash-latest",
        "name": "Gemini Flash Latest",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-flash-lite-latest",
        "name": "Gemini Flash-Lite Latest",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-flash-lite",
        "name": "Gemini 3.1 Flash Lite",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7@default",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/deepseek-v3.2-maas",
        "name": "DeepSeek V3.2",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "google-vertex-anthropic",
    "name": "Vertex (Anthropic)",
    "npm": "@ai-sdk/google-vertex/anthropic",
    "api": null,
    "env": [
      "GOOGLE_VERTEX_PROJECT",
      "GOOGLE_VERTEX_LOCATION",
      "GOOGLE_APPLICATION_CREDENTIALS"
    ],
    "models": [
      {
        "id": "claude-opus-5@default",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5@default",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8@default",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7@default",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6@default",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6@default",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-5@20251101",
        "name": "Claude Opus 4.5",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5@20251001",
        "name": "Claude Haiku 4.5",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-5@20250929",
        "name": "Claude Sonnet 4.5",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-1@20250805",
        "name": "Claude Opus 4.1",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-opus-4@20250514",
        "name": "Claude Opus 4",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4@20250514",
        "name": "Claude Sonnet 4",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      }
    ]
  },
  {
    "id": "greenpt",
    "name": "GreenPT",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.greenpt.ai/v1",
    "env": [
      "GREENPT_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-ponytail-lite",
        "name": "GLM-5.2 Ponytail Lite",
        "description": "glm-5.2 carrying a built-in ruleset that compresses generated code, preferring platform features over custom code. The gentlest tier: it cuts filler only and keeps the explanation ",
        "toolCall": true
      },
      {
        "id": "glm-5.2-ponytail-ultra",
        "name": "GLM-5.2 Ponytail Ultra",
        "description": "glm-5.2 carrying a built-in ruleset that compresses generated code, preferring platform features over custom code. The most aggressive tier, close to answer-only. Same upstream mod",
        "toolCall": true
      },
      {
        "id": "glm-5.2-caveman-ultra",
        "name": "GLM-5.2 Caveman Ultra",
        "description": "glm-5.2 carrying a built-in ruleset that compresses prose, keeping code and technical detail verbatim. The most aggressive tier, close to answer-only. Same upstream model and price",
        "toolCall": true
      },
      {
        "id": "glm-5.2-caveman-lite",
        "name": "GLM-5.2 Caveman Lite",
        "description": "glm-5.2 carrying a built-in ruleset that compresses prose, keeping code and technical detail verbatim. The gentlest tier: it cuts filler only and keeps the explanation intact. Same",
        "toolCall": true
      },
      {
        "id": "glm-5.2-caveman",
        "name": "GLM-5.2 Caveman",
        "description": "glm-5.2 carrying a built-in ruleset that compresses prose, keeping code and technical detail verbatim. The middle tier, and the ruleset as its authors wrote it. Same upstream model",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-honey-lite",
        "name": "GLM-5.2 Honey Lite",
        "description": "glm-5.2 carrying a built-in ruleset that compresses both generated code and prose. The gentlest tier: it cuts filler only and keeps the explanation intact. Same upstream model and ",
        "toolCall": true
      },
      {
        "id": "glm-5.2-ponytail",
        "name": "GLM-5.2 Ponytail",
        "description": "glm-5.2 carrying a built-in ruleset that compresses generated code, preferring platform features over custom code. The middle tier, and the ruleset as its authors wrote it. Same up",
        "toolCall": true
      },
      {
        "id": "glm-5.2-honey-ultra",
        "name": "GLM-5.2 Honey Ultra",
        "description": "glm-5.2 carrying a built-in ruleset that compresses both generated code and prose. The most aggressive tier, close to answer-only. Same upstream model and price per token as glm-5.",
        "toolCall": true
      },
      {
        "id": "glm-5.2-honey",
        "name": "GLM-5.2 Honey",
        "description": "glm-5.2 carrying a built-in ruleset that compresses both generated code and prose. The middle tier, and the ruleset as its authors wrote it. Same upstream model and price per token",
        "toolCall": true
      }
    ]
  },
  {
    "id": "groq",
    "name": "Groq",
    "npm": "@ai-sdk/groq",
    "api": null,
    "env": [
      "GROQ_API_KEY"
    ],
    "models": [
      {
        "id": "openai/gpt-oss-safeguard-20b",
        "name": "Safety GPT OSS 20B",
        "description": "Safety model for policy screening, moderation, and risk-aware routing workflows",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "llama-3.3-70b-versatile",
        "name": "Llama 3.3 70B",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "llama-3.1-8b-instant",
        "name": "Llama 3.1 8B",
        "description": "Compact Llama instruction model for fast chat and local deployment",
        "toolCall": true
      },
      {
        "id": "whisper-large-v3",
        "name": "Whisper",
        "description": "Speech transcription model for accurate audio-to-text and captioning workflows",
        "toolCall": false
      },
      {
        "id": "groq/compound-mini",
        "name": "Compound Mini",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": false
      },
      {
        "id": "groq/compound",
        "name": "Compound",
        "description": "General-purpose chat model for instruction following, writing, and analysis",
        "toolCall": false
      },
      {
        "id": "meta-llama/llama-prompt-guard-2-86m",
        "name": "Prompt Guard 2 86M",
        "description": "Safety model for policy screening, moderation, and risk-aware routing workflows",
        "toolCall": false
      },
      {
        "id": "meta-llama/llama-prompt-guard-2-22m",
        "name": "Llama Prompt Guard 2 22M",
        "description": "Safety model for policy screening, moderation, and risk-aware routing workflows",
        "toolCall": false
      },
      {
        "id": "allam-2-7b",
        "name": "ALLaM-2-7b",
        "description": "ALLaM-2-7b instruction tuned model by SDAIA",
        "toolCall": false
      }
    ]
  },
  {
    "id": "helicone",
    "name": "Helicone",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://ai-gateway.helicone.ai/v1",
    "env": [
      "HELICONE_API_KEY"
    ],
    "models": [
      {
        "id": "claude-4.5-opus",
        "name": "Anthropic: Claude Opus 4.5",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gemini-3-pro-preview",
        "name": "Google Gemini 3 Pro Preview",
        "description": "Advanced Gemini model for complex reasoning, coding, and multimodal analysis",
        "toolCall": true
      },
      {
        "id": "grok-4-1-fast-reasoning",
        "name": "xAI Grok 4.1 Fast Reasoning",
        "description": "Fast Grok model for responsive chat, reasoning, and tool-assisted work",
        "toolCall": true
      },
      {
        "id": "grok-4-1-fast-non-reasoning",
        "name": "xAI Grok 4.1 Fast Non-Reasoning",
        "description": "Image model for prompt-driven generation, editing, and visual design workflows",
        "toolCall": true
      },
      {
        "id": "kimi-k2-thinking",
        "name": "Kimi K2 Thinking",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5-20251001",
        "name": "Anthropic: Claude 4.5 Haiku (20251001)",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      },
      {
        "id": "claude-4.5-haiku",
        "name": "Anthropic: Claude 4.5 Haiku",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-5-20250929",
        "name": "Anthropic: Claude Sonnet 4.5 (20250929)",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "claude-4.5-sonnet",
        "name": "Anthropic: Claude Sonnet 4.5",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "qwen3-vl-235b-a22b-instruct",
        "name": "Qwen3 VL 235B A22B Instruct",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v3.1-terminus",
        "name": "DeepSeek V3.1 Terminus",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "deepseek-v3.2",
        "name": "DeepSeek V3.2",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "hetzner",
    "name": "Hetzner",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.hetzner.com/api/v1",
    "env": [
      "HETZNER_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen3.8-27B",
        "name": "Qwen3.8-27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B-FP8",
        "name": "Qwen3.6 35B A3B FP8",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      }
    ]
  },
  {
    "id": "hpc-ai",
    "name": "HPC-AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.hpc-ai.com/inference/v1",
    "env": [
      "HPC_AI_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.1",
        "name": "GLM 5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.5",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Earlier Kimi frontier model for long-context agents, coding, and multimodal work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "huggingface",
    "name": "Hugging Face",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://router.huggingface.co/v1",
    "env": [
      "HF_TOKEN"
    ],
    "models": [
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.8-2.4T-A95B",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling-Small",
        "name": "Inkling Small",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling",
        "name": "Inkling",
        "description": "Multimodal model for analyzing text, images, documents, and rich media",
        "toolCall": true
      },
      {
        "id": "tencent/Hy3",
        "name": "Hy3",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "stepfun-ai/Step-3.7-Flash",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      }
    ]
  },
  {
    "id": "hyper",
    "name": "Charm Hyper",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://hyper.charm.land/v1",
    "env": [
      "HYPER_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "General GLM flagship for coding, analysis, and tool-heavy engineering workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "minimax-m3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "qwen3.7-flash",
        "name": "Qwen3.7 Flash",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "gemma-4-26b-a4b-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "llama-3.3-70b-instruct",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Popular open Llama workhorse for multilingual chat, coding, and self-hosting",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      }
    ]
  },
  {
    "id": "iflowcn",
    "name": "iFlow",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://apis.iflow.cn/v1",
    "env": [
      "IFLOW_API_KEY"
    ],
    "models": [
      {
        "id": "glm-4.6",
        "name": "GLM-4.6",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "kimi-k2-0905",
        "name": "Kimi-K2-0905",
        "description": "Kimi model for long-context chat, coding, and agentic reasoning",
        "toolCall": true
      },
      {
        "id": "qwen3-235b-a22b-thinking-2507",
        "name": "Qwen3-235B-A22B-Thinking",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3-235b-a22b-instruct",
        "name": "Qwen3-235B-A22B-Instruct",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-plus",
        "name": "Qwen3-Coder-Plus",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "deepseek-r1",
        "name": "DeepSeek-R1",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      },
      {
        "id": "qwen3-max-preview",
        "name": "Qwen3-Max-Preview",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "qwen3-vl-plus",
        "name": "Qwen3-VL-Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v3.2",
        "name": "DeepSeek-V3.2-Exp",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "qwen3-max",
        "name": "Qwen3-Max",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v3",
        "name": "DeepSeek-V3",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "qwen3-32b",
        "name": "Qwen3-32B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "impossibl",
    "name": "Impossibl",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.impossibl.com/v1",
    "env": [
      "IMPOSSIBL_API_KEY"
    ],
    "models": [
      {
        "id": "google/gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-max-preview",
        "name": "Qwen3.8 Max Preview",
        "description": "Preview Qwen flagship for million-token multimodal reasoning and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "fireworks/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "zai/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "inception",
    "name": "Inception",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.inceptionlabs.ai/v1/",
    "env": [
      "INCEPTION_API_KEY"
    ],
    "models": [
      {
        "id": "mercury-2",
        "name": "Mercury 2",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      },
      {
        "id": "mercury-edit-2",
        "name": "Mercury Edit 2",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": false
      }
    ]
  },
  {
    "id": "inceptron",
    "name": "Inceptron",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.inceptron.io/v1",
    "env": [
      "INCEPTRON_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "inference",
    "name": "Inference",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.net/v1",
    "env": [
      "INFERENCE_API_KEY"
    ],
    "models": [
      {
        "id": "google/gemma-3",
        "name": "Google Gemma 3",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "meta/llama-3.2-3b-instruct",
        "name": "Llama 3.2 3B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "meta/llama-3.2-1b-instruct",
        "name": "Llama 3.2 1B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "meta/llama-3.1-8b-instruct",
        "name": "Llama 3.1 8B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "meta/llama-3.2-11b-vision-instruct",
        "name": "Llama 3.2 11B Vision Instruct",
        "description": "Open Llama multimodal model for image understanding and text reasoning",
        "toolCall": true
      },
      {
        "id": "osmosis/osmosis-structure-0.6b",
        "name": "Osmosis Structure 0.6B",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": true
      },
      {
        "id": "qwen/qwen-2.5-7b-vision-instruct",
        "name": "Qwen 2.5 7B Vision Instruct",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "mistral/mistral-nemo-12b-instruct",
        "name": "Mistral Nemo 12B Instruct",
        "description": "Mistral model for multilingual chat, reasoning, and tool-assisted workflows",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3-embedding-4b",
        "name": "Qwen 3 Embedding 4B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      }
    ]
  },
  {
    "id": "inferx",
    "name": "InferX",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://model.inferx.net/endpoints/v1",
    "env": [
      "INFERX_API_KEY"
    ],
    "models": [
      {
        "id": "Agents-A1",
        "name": "Agents-A1",
        "description": "35B MoE agentic model built for long-horizon search, engineering, and scientific reasoning tasks",
        "toolCall": true
      },
      {
        "id": "Ornith-1.0-35B-FP8",
        "name": "Ornith-1.0-35B-FP8",
        "description": "Large coding-reasoning model for agentic software tasks and RL search",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "Qwen3.6-27B-FP8",
        "name": "Qwen3.6 27B FP8",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "mimo-v25",
        "name": "mimo-v25",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "Qwen3.6-35B-A3B-FP8",
        "name": "Qwen3.6 35B A3B FP8",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "Qwen3.6-35B-A3B-fp8-no-thinking",
        "name": "Qwen3.6-35B-A3B-fp8-no-thinking",
        "description": "Qwen3.6-35B-A3B-fp8 disable thinking",
        "toolCall": true
      },
      {
        "id": "gemma-4-31B-it-fp8",
        "name": "Gemma 4 31B IT FP8",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen3-Coder-Next-FP8",
        "name": "Qwen3 Coder Next FP8",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen3-Coder-Next-FP8-no-thinking",
        "name": "Qwen3-Coder-Next-FP8-no-thinking",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "Devstral-2-123B-Instruct-2512-int4-AutoRound",
        "name": "Devstral-2-123B-Instruct-2512-int4-AutoRound",
        "description": "Mistral's coding-agent model for repository work, terminal tasks, and software fixes",
        "toolCall": true
      },
      {
        "id": "Qwen3-Embedding-8B",
        "name": "Qwen3-Embedding-8B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      }
    ]
  },
  {
    "id": "infomaniak",
    "name": "Infomaniak",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.infomaniak.com/2/ai/${INFOMANIAK_PRODUCT_ID}/openai/v1",
    "env": [
      "INFOMANIAK_API_KEY",
      "INFOMANIAK_PRODUCT_ID"
    ],
    "models": [
      {
        "id": "nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-FP8",
        "name": "Nemotron 3 Nano 30B A3B FP8",
        "description": "Small Nemotron 3 MoE for efficient coding, math, and long-context agents",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31B-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "swiss-ai/Apertus-v1.5-70B",
        "name": "Apertus v1.5 70B",
        "description": "Open, ethically-sourced Swiss AI model for multilingual, multimodal chat and instruction following",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-122B-A10B-FP8",
        "name": "Qwen3.5 122B-A10B FP8",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B-FP8",
        "name": "Qwen3.5 397B-A17B FP8",
        "description": "Large open Qwen multimodal MoE for visual agents and long technical tasks",
        "toolCall": true
      },
      {
        "id": "mistralai/Ministral-3-14B-Instruct-2512",
        "name": "Ministral 3 14B Instruct",
        "description": "Compact Mistral model for edge, latency-sensitive, and cost-efficient workloads",
        "toolCall": true
      },
      {
        "id": "mistralai/Mistral-Small-4-119B-2603",
        "name": "Mistral Small 4",
        "description": "Fast Mistral production model for chat, extraction, and cost-sensitive agents",
        "toolCall": true
      },
      {
        "id": "mini_lm_l12_v2",
        "name": "All-MiniLM-L12-v2",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      },
      {
        "id": "bge_multilingual_gemma2",
        "name": "BGE Multilingual Gemma2",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      }
    ]
  },
  {
    "id": "io-net",
    "name": "IO.NET",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.intelligence.io.solutions/api/v1",
    "env": [
      "IOINTELLIGENCE_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
        "name": "Qwen 3 235B Thinking",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "mistralai/Magistral-Small-2506",
        "name": "Magistral Small 2506",
        "description": "Mistral reasoning model for transparent analysis, math, and complex decisions",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-R1-0528",
        "name": "DeepSeek R1",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      },
      {
        "id": "mistralai/Devstral-Small-2505",
        "name": "Devstral Small 2505",
        "description": "Mistral coding agent model for repository tasks and software engineering workflows",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
        "name": "Llama 4 Maverick 17B 128E Instruct",
        "description": "Open multimodal Llama model for strong reasoning and fast responses",
        "toolCall": true
      },
      {
        "id": "Intel/Qwen3-Coder-480B-A35B-Instruct-int4-mixed-ar",
        "name": "Qwen 3 Coder 480B",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-Next-80B-A3B-Instruct",
        "name": "Qwen 3 Next 80B Instruct",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-3.3-70B-Instruct",
        "name": "Llama 3.3 70B Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT-OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-20b",
        "name": "GPT-OSS 20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.6",
        "name": "GLM 4.6",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2-Thinking",
        "name": "Kimi K2 Thinking",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "jalapeno",
    "name": "Jalapeno Cloud",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.jalapeno-cloud.ai/v1",
    "env": [
      "JALAPENO_API_KEY"
    ],
    "models": [
      {
        "id": "Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "Hy3",
        "name": "Hy3",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "GLM-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "Qwen3.5-122B-A10B",
        "name": "Qwen3.5 122B-A10B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen3.5-27B",
        "name": "Qwen3.5 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen3.5-35B-A3B",
        "name": "Qwen3.5 35B-A3B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen3.5-397B-A17B",
        "name": "Qwen3.5 397B-A17B",
        "description": "Large open Qwen multimodal MoE for visual agents and long technical tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "jiekou",
    "name": "Jiekou.AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.jiekou.ai/openai",
    "env": [
      "JIEKOU_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-4-6",
        "name": "claude-opus-4-6",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5.1",
        "name": "gpt-5.1",
        "description": "GPT model for general reasoning, writing, coding, and tool-assisted tasks",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3-coder-next",
        "name": "qwen/qwen3-coder-next",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "gemini-2.5-flash-lite-preview-06-17",
        "name": "gemini-2.5-flash-lite-preview-06-17",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-20250514",
        "name": "claude-opus-4-20250514",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "grok-4-fast-reasoning",
        "name": "grok-4-fast-reasoning",
        "description": "Fast Grok model for responsive chat, reasoning, and tool-assisted work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-1-20250805",
        "name": "claude-opus-4-1-20250805",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gpt-5-nano",
        "name": "gpt-5-nano",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gemini-2.5-flash-lite-preview-09-2025",
        "name": "gemini-2.5-flash-lite-preview-09-2025",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5-chat-latest",
        "name": "gpt-5-chat-latest",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      },
      {
        "id": "gemini-2.5-flash-preview-05-20",
        "name": "gemini-2.5-flash-preview-05-20",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gpt-5.1-codex-mini",
        "name": "gpt-5.1-codex-mini",
        "description": "Coding-optimized GPT model for repository edits, reviews, and agentic software work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "kenari",
    "name": "Kenari",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://kenari.id/v1",
    "env": [
      "KENARI_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "grok-4-5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5-2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2-7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2-7-code:free",
        "name": "Kimi K2.7 Code (Free)",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "nemotron-3-ultra-550b-a55b",
        "name": "Nemotron 3 Ultra 550B A55B",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "qwen3-7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "kilo",
    "name": "Kilo Gateway",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.kilo.ai/api/gateway",
    "env": [
      "KILO_API_KEY"
    ],
    "models": [
      {
        "id": "~z-ai/glm-latest",
        "name": "Z.ai: GLM Latest",
        "description": "This model always redirects to the latest GLM model from Z.ai.",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.3",
        "name": "GLM-5.3",
        "description": "GLM-5.3 is a large-scale reasoning model from Z.ai, built for complex software engineering and long-horizon agent tasks. It supports text input and output with a 1M-token context w",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Qwen3.8 27B is an open-weight dense vision-language model from Qwen. It is suited for coding, professional workflows, research, multimodal interaction, and long-running agent tasks",
        "toolCall": true
      },
      {
        "id": "dots-studio/dots-3-note-preview:free",
        "name": "Dots Studio: Dots3-Note Preview (free)",
        "description": "Dots3-Note Preview is an open-weight mixture-of-experts model from Dots Studio, with 16B active parameters out of 280B total. It is the lightest model in the Dots 3 family and is..",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "Gemini 3.7 Flash is a multimodal model from Google for fast agentic workflows, coding, and complex multi-step reasoning. It is designed for tasks that require responsive performanc",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro 0813 is a large-scale mixture-of-experts model from DeepSeek. This is the GA release of DeepSeek V4 Pro.",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.6",
        "name": "Grok 4.6",
        "description": "Grok 4.6 is SpaceXAI's smartest model with frontier performance on coding, knowledge work, and STEM.",
        "toolCall": true
      },
      {
        "id": "bytedance-seed/seed-2-1-turbo",
        "name": "ByteDance Seed: Seed 2.1 Turbo",
        "description": "Seed 2.1 Turbo is a multimodal model from ByteDance Seed for coding and long-horizon agent workflows. It is suited for end-to-end software delivery, multi-step task execution, and ",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-2.4t-a95b",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "NVIDIA Nemotron 3.5 Lightning is an open mixture-of-experts model from NVIDIA, with 3B active parameters out of 30B total. It is suited for high-throughput agentic workloads and sp",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning:free",
        "name": "NVIDIA: Nemotron 3.5 Lightning (free)",
        "description": "NVIDIA Nemotron 3.5 Lightning is an open mixture-of-experts model from NVIDIA, with 3B active parameters out of 30B total. It is suited for high-throughput agentic workloads and sp",
        "toolCall": true
      },
      {
        "id": "liquid/lfm-2.5-2.6b:free",
        "name": "LiquidAI: LFM2.5-2.6B (free)",
        "description": "LFM2.5-2.6B is a compact reasoning model from Liquid AI. It is suited for agent workflows, data extraction, RAG, and long-context processing. Liquid advises against using it for ag",
        "toolCall": true
      }
    ]
  },
  {
    "id": "kimi-for-coding",
    "name": "Kimi For Coding",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.kimi.com/coding/v1",
    "env": [
      "KIMI_API_KEY"
    ],
    "models": [
      {
        "id": "k3-256k",
        "name": "Kimi K3-256K",
        "description": "256K-context version of Kimi K3, reducing token consumption for shorter coding sessions",
        "toolCall": true
      },
      {
        "id": "k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "kimi-for-coding-highspeed",
        "name": "Kimi For Coding HighSpeed",
        "description": "Lower-latency Kimi Code variant for interactive edits and coding-agent loops",
        "toolCall": true
      },
      {
        "id": "kimi-for-coding",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      }
    ]
  },
  {
    "id": "kosmik",
    "name": "Kosmik Compute",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.koscompute.com/v1",
    "env": [
      "KOSMIK_API_KEY"
    ],
    "models": [
      {
        "id": "qwen/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image understanding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "kuae-cloud-coding-plan",
    "name": "KUAE Cloud Coding Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://coding-plan-endpoint.kuaecloud.net/v1",
    "env": [
      "KUAE_API_KEY"
    ],
    "models": [
      {
        "id": "GLM-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      }
    ]
  },
  {
    "id": "lilac",
    "name": "Lilac",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.getlilac.com/v1",
    "env": [
      "LILAC_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/glm-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "minimaxai/minimax-m3",
        "name": "MiniMax M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31b-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "llama",
    "name": "Llama",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.llama.com/compat/v1/",
    "env": [
      "LLAMA_API_KEY"
    ],
    "models": [
      {
        "id": "llama-4-scout-17b-16e-instruct-fp8",
        "name": "Llama-4-Scout-17B-16E-Instruct-FP8",
        "description": "Open multimodal Llama model for long-context analysis and efficient agents",
        "toolCall": true
      },
      {
        "id": "cerebras-llama-4-scout-17b-16e-instruct",
        "name": "Cerebras-Llama-4-Scout-17B-16E-Instruct",
        "description": "Open multimodal Llama model for long-context analysis and efficient agents",
        "toolCall": true
      },
      {
        "id": "cerebras-llama-4-maverick-17b-128e-instruct",
        "name": "Cerebras-Llama-4-Maverick-17B-128E-Instruct",
        "description": "Open multimodal Llama model for strong reasoning and fast responses",
        "toolCall": true
      },
      {
        "id": "llama-4-maverick-17b-128e-instruct-fp8",
        "name": "Llama-4-Maverick-17B-128E-Instruct-FP8",
        "description": "Open multimodal Llama model for strong reasoning and fast responses",
        "toolCall": true
      },
      {
        "id": "groq-llama-4-maverick-17b-128e-instruct",
        "name": "Groq-Llama-4-Maverick-17B-128E-Instruct",
        "description": "Open multimodal Llama model for strong reasoning and fast responses",
        "toolCall": true
      },
      {
        "id": "llama-3.3-70b-instruct",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "llama-3.3-8b-instruct",
        "name": "Llama-3.3-8B-Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "llmgateway",
    "name": "LLM Gateway",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.llmgateway.io/v1",
    "env": [
      "LLMGATEWAY_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "grok-4-6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "seed-2-1-turbo",
        "name": "Seed 2.1 Turbo",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "ling-3.0-flash",
        "name": "InclusionAI Ling 3.0 Flash",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "qwen3.7-flash",
        "name": "Qwen3.7 Flash",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max Preview",
        "description": "Preview Qwen flagship for million-token multimodal reasoning and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "llmtr",
    "name": "LLMTR",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://llmtr.com/v1",
    "env": [
      "LLMTR_API_KEY"
    ],
    "models": [
      {
        "id": "muse-glimmer-30b-tr",
        "name": "Muse Glimmer 30B (TR)",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "upstage/solar-pro4",
        "name": "Solar Pro 4",
        "description": "Upstage's flagship model, specialized for agentic use",
        "toolCall": true
      },
      {
        "id": "meta/muse-spark-1.2-contributor",
        "name": "Muse Spark 1.2 Contributor",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling-small",
        "name": "Inkling Small",
        "description": "Multimodal MoE reasoning model (276B total, 12B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "poolside/laguna-xs-2.1",
        "name": "Laguna XS 2.1",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "sakana/fugu-ultra",
        "name": "Fugu Ultra",
        "description": "Quality-first multi-agent model for hard research, analysis, and competitions",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.6-flash",
        "name": "Qwen3.6 Flash",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "mimo/mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "mimo/mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "gemma-4",
        "name": "Gemma 4",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "lmstudio",
    "name": "LMStudio",
    "npm": "@ai-sdk/openai-compatible",
    "api": "http://127.0.0.1:1234/v1",
    "env": [
      "LMSTUDIO_API_KEY"
    ],
    "models": [
      {
        "id": "openai/gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3-30b-a3b-2507",
        "name": "Qwen3 30B A3B 2507",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3-coder-30b",
        "name": "Qwen3 Coder 30B",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "longcat",
    "name": "LongCat",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.longcat.chat/openai",
    "env": [
      "LONGCAT_API_KEY"
    ],
    "models": [
      {
        "id": "LongCat-2.0",
        "name": "LongCat-2.0",
        "description": "Meituan LongCat-2.0, a reasoning model with tool calling and a 1M-token context window",
        "toolCall": true
      }
    ]
  },
  {
    "id": "lucidquery",
    "name": "LucidQuery",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.lucidquery.com/v1",
    "env": [
      "LUCIDQUERY_API_KEY"
    ],
    "models": [
      {
        "id": "lucidquery-agi-01-frontier",
        "name": "AGI-01 Frontier",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "lucidquery-agi-01-swift",
        "name": "AGI-01 Swift",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "lucidnova-rf1-100b",
        "name": "LucidNova RF1 100B",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      },
      {
        "id": "lucidquery-nexus-coder",
        "name": "LucidQuery Nexus Coder",
        "description": "Coding model for repository understanding, refactors, and agentic engineering tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "lynkr",
    "name": "Lynkr",
    "npm": "@ai-sdk/openai-compatible",
    "api": "http://127.0.0.1:8081/v1",
    "env": [
      "LYNKR_API_KEY"
    ],
    "models": [
      {
        "id": "lynkr-auto",
        "name": "Lynkr Auto (complexity routing)",
        "description": "Virtual model: Lynkr scores each request on complexity and routes it to the tier model the user configured (local Ollama/llama.cpp for simple requests, configured cloud providers f",
        "toolCall": true
      }
    ]
  },
  {
    "id": "meganova",
    "name": "Meganova",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.meganova.ai/v1",
    "env": [
      "MEGANOVA_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMaxAI/MiniMax-M2.5",
        "name": "MiniMax M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5",
        "name": "GLM-5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-Plus",
        "name": "Qwen3.5 Plus",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.5",
        "name": "Kimi K2.5",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M2.1",
        "name": "MiniMax M2.1",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "XiaomiMiMo/MiMo-V2-Flash",
        "name": "MiMo V2 Flash",
        "description": "MiMo flash model for fast multimodal assistance and agent workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.2",
        "name": "DeepSeek V3.2",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2-Thinking",
        "name": "Kimi K2 Thinking",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.2-Exp",
        "name": "DeepSeek V3.2 Exp",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.6",
        "name": "GLM-4.6",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.1",
        "name": "DeepSeek V3.1",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "merge-gateway",
    "name": "Merge Gateway",
    "npm": "merge-gateway-ai-sdk-provider",
    "api": "https://api-gateway.merge.dev/v1/ai-sdk",
    "env": [
      "MERGE_GATEWAY_API_KEY"
    ],
    "models": [
      {
        "id": "zai/glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning-30b-a3b",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "Fast NVIDIA Nemotron MoE for reliable agentic tasks across enterprise workloads",
        "toolCall": true
      },
      {
        "id": "meta/muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "sakana/sakana-namazu",
        "name": "Sakana Namazu",
        "description": "Japanese-specialized reasoning model based on Kimi K2.6 and tuned for Japanese language, culture, and business workflows",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash-Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "meta",
    "name": "Meta",
    "npm": "@ai-sdk/openai",
    "api": "https://api.meta.ai/v1",
    "env": [
      "META_MODEL_API_KEY"
    ],
    "models": [
      {
        "id": "muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2-contributor",
        "name": "Muse Spark 1.2 Contributor",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.1",
        "name": "Muse Spark 1.1",
        "description": "Muse Spark is a natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration.",
        "toolCall": true
      }
    ]
  },
  {
    "id": "minimax",
    "name": "MiniMax (minimax.io)",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.minimax.io/anthropic/v1",
    "env": [
      "MINIMAX_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "Low-latency M2.7 variant for interactive coding plans and agent loops",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5-highspeed",
        "name": "MiniMax-M2.5-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.1",
        "name": "MiniMax-M2.1",
        "description": "Earlier MiniMax agent model for practical coding and productivity tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2",
        "name": "MiniMax-M2",
        "description": "Efficient open MiniMax model built for coding agents and tool-heavy workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "minimax-cn",
    "name": "MiniMax (minimaxi.com)",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.minimaxi.com/anthropic/v1",
    "env": [
      "MINIMAX_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5-highspeed",
        "name": "MiniMax-M2.5-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.1",
        "name": "MiniMax-M2.1",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2",
        "name": "MiniMax-M2",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "minimax-cn-coding-plan",
    "name": "MiniMax Token Plan (minimaxi.com)",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.minimaxi.com/anthropic/v1",
    "env": [
      "MINIMAX_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5-highspeed",
        "name": "MiniMax-M2.5-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.1",
        "name": "MiniMax-M2.1",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2",
        "name": "MiniMax-M2",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "minimax-coding-plan",
    "name": "MiniMax Token Plan (minimax.io)",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.minimax.io/anthropic/v1",
    "env": [
      "MINIMAX_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5-highspeed",
        "name": "MiniMax-M2.5-highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.1",
        "name": "MiniMax-M2.1",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2",
        "name": "MiniMax-M2",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "mistral",
    "name": "Mistral",
    "npm": "@ai-sdk/mistral",
    "api": null,
    "env": [
      "MISTRAL_API_KEY"
    ],
    "models": [
      {
        "id": "mistral-medium-2604",
        "name": "Mistral Medium 3.5",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "mistral-medium-latest",
        "name": "Mistral Medium (latest)",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "mistral-small-latest",
        "name": "Mistral Small (latest)",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": true
      },
      {
        "id": "mistral-small-2603",
        "name": "Mistral Small 4",
        "description": "Fast Mistral production model for chat, extraction, and cost-sensitive agents",
        "toolCall": true
      },
      {
        "id": "devstral-latest",
        "name": "Devstral 2",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "devstral-2512",
        "name": "Devstral 2",
        "description": "Mistral's coding-agent model for repository work, terminal tasks, and software fixes",
        "toolCall": true
      },
      {
        "id": "labs-devstral-small-2512",
        "name": "Devstral Small 2",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "mistral-large-latest",
        "name": "Mistral Large (latest)",
        "description": "Flagship Mistral model for advanced reasoning, coding, and multilingual work",
        "toolCall": true
      },
      {
        "id": "mistral-large-2512",
        "name": "Mistral Large 3",
        "description": "Mistral's largest general model for enterprise agents, coding, and multilingual reasoning",
        "toolCall": true
      },
      {
        "id": "devstral-medium-latest",
        "name": "Devstral 2 (latest)",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "mistral-medium-2508",
        "name": "Mistral Medium 3.1",
        "description": "Mistral model for multilingual chat, reasoning, and tool-assisted workflows",
        "toolCall": true
      },
      {
        "id": "voxtral-small-latest",
        "name": "Voxtral Small (latest)",
        "description": "Instruct model with native audio input for speech understanding and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "mixlayer",
    "name": "Mixlayer",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://models.mixlayer.ai/v1",
    "env": [
      "MIXLAYER_API_KEY"
    ],
    "models": [
      {
        "id": "qwen/qwen3.5-35b-a3b",
        "name": "Qwen3.5 35B A3B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.5-397b-a17b",
        "name": "Qwen3.5 397B A17B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.5-9b",
        "name": "Qwen3.5 9B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.5-27b",
        "name": "Qwen3.5 27B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.5-122b-a10b",
        "name": "Qwen3.5 122B A10B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "moark",
    "name": "Moark",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://moark.com/v1",
    "env": [
      "MOARK_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMax-M2.1",
        "name": "MiniMax-M2.1",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "GLM-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      }
    ]
  },
  {
    "id": "modal",
    "name": "Modal",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.us-west.modal.direct/v1",
    "env": [
      "MODAL_PROXY_TOKEN"
    ],
    "models": [
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling-NVFP4",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      }
    ]
  },
  {
    "id": "model-oracle-ai",
    "name": "Model Oracle AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.modeloracle.com/api/v1",
    "env": [
      "MODEL_ORACLE_API_KEY"
    ],
    "models": [
      {
        "id": "auto",
        "name": "Auto",
        "description": "Model Oracle AI decision engine that selects and routes among configured coding-agent models",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4.8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-nano",
        "name": "GPT-5.4 nano",
        "description": "Cheapest GPT-5.4 lane for simple routing, extraction, and bulk automation",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4.5",
        "name": "Claude Haiku 4.5 (latest)",
        "description": "Fast Claude lane for lightweight agents, office tasks, and responsive chat",
        "toolCall": true
      },
      {
        "id": "gpt-5",
        "name": "GPT-5",
        "description": "Original GPT-5 workhorse for reasoning, coding, writing, and tool workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "modelis",
    "name": "Modelis",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://modelishub.com/v1",
    "env": [
      "MODELIS_API_KEY"
    ],
    "models": [
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal Qwen workhorse for long-context agents, visual inputs, and coding",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.7-max",
        "name": "Qwen3.7 Max",
        "description": "Qwen frontier model tuned for agent frameworks, coding assistants, and long tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash",
        "description": "Fast Gemini workhorse for multimodal apps where latency and price matter",
        "toolCall": true
      },
      {
        "id": "gemini-2.5-pro",
        "name": "Gemini 2.5 Pro",
        "description": "Google's proven reasoning model for coding, math, and multimodal analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "modelscope",
    "name": "ModelScope",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api-inference.modelscope.cn/v1",
    "env": [
      "MODELSCOPE_API_KEY"
    ],
    "models": [
      {
        "id": "ZhipuAI/GLM-4.6",
        "name": "GLM-4.6",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-Coder-30B-A3B-Instruct",
        "name": "Qwen3 Coder 30B A3B Instruct",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-30B-A3B-Thinking-2507",
        "name": "Qwen3 30B A3B Thinking 2507",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-30B-A3B-Instruct-2507",
        "name": "Qwen3 30B A3B Instruct 2507",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "ZhipuAI/GLM-4.5",
        "name": "GLM-4.5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
        "name": "Qwen3-235B-A22B-Thinking-2507",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-235B-A22B-Instruct-2507",
        "name": "Qwen3 235B A22B Instruct 2507",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "moonshotai",
    "name": "Moonshot AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.moonshot.ai/v1",
    "env": [
      "MOONSHOT_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code-highspeed",
        "name": "Kimi K2.7 Code HighSpeed",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Earlier Kimi frontier model for long-context agents, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "kimi-k2-thinking-turbo",
        "name": "Kimi K2 Thinking Turbo",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "kimi-k2-thinking",
        "name": "Kimi K2 Thinking",
        "description": "Thinking Kimi model for slower research passes, planning, and hard technical questions",
        "toolCall": true
      },
      {
        "id": "kimi-k2-0905-preview",
        "name": "Kimi K2 0905",
        "description": "Kimi model for long-context chat, coding, and agentic reasoning",
        "toolCall": true
      },
      {
        "id": "kimi-k2-turbo-preview",
        "name": "Kimi K2 Turbo",
        "description": "Fast Kimi model for responsive chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "kimi-k2-0711-preview",
        "name": "Kimi K2 0711",
        "description": "Kimi model for long-context chat, coding, and agentic reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "moonshotai-cn",
    "name": "Moonshot AI (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.moonshot.cn/v1",
    "env": [
      "MOONSHOT_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code-highspeed",
        "name": "Kimi K2.7 Code HighSpeed",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi K2.5",
        "description": "Earlier Kimi frontier model for long-context agents, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "kimi-k2-thinking",
        "name": "Kimi K2 Thinking",
        "description": "Thinking Kimi model for slower research passes, planning, and hard technical questions",
        "toolCall": true
      },
      {
        "id": "kimi-k2-thinking-turbo",
        "name": "Kimi K2 Thinking Turbo",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "kimi-k2-turbo-preview",
        "name": "Kimi K2 Turbo",
        "description": "Fast Kimi model for responsive chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "kimi-k2-0905-preview",
        "name": "Kimi K2 0905",
        "description": "Kimi model for long-context chat, coding, and agentic reasoning",
        "toolCall": true
      },
      {
        "id": "kimi-k2-0711-preview",
        "name": "Kimi K2 0711",
        "description": "Kimi model for long-context chat, coding, and agentic reasoning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "morph",
    "name": "Morph",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.morphllm.com/v1",
    "env": [
      "MORPH_API_KEY"
    ],
    "models": [
      {
        "id": "morph-v3-large",
        "name": "Morph v3 Large",
        "description": "Flagship model for demanding analysis, coding, and production agent workflows",
        "toolCall": false
      },
      {
        "id": "morph-v3-fast",
        "name": "Morph v3 Fast",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": false
      },
      {
        "id": "auto",
        "name": "Auto",
        "description": "Automatic model router for matching prompts to suitable backends and budgets",
        "toolCall": false
      }
    ]
  },
  {
    "id": "nano-gpt",
    "name": "NanoGPT",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://nano-gpt.com/api/v1",
    "env": [
      "NANO_GPT_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.5-2b",
        "name": "Qwen3.5 2B",
        "description": "Qwen3.5 2B is a small open-weight multimodal model from Alibaba for efficient reasoning, coding, visual understanding, tool use, and JSON output.",
        "toolCall": true
      },
      {
        "id": "qwen3.5-0.8b",
        "name": "Qwen3.5 0.8B",
        "description": "Qwen3.5 0.8B is a lightweight open-weight multimodal model from Alibaba for fast reasoning, visual understanding, tool use, and JSON output.",
        "toolCall": true
      },
      {
        "id": "qwen3.5-4b",
        "name": "Qwen3.5 4B",
        "description": "Qwen3.5 4B is a compact open-weight multimodal model from Alibaba for reasoning, coding, visual understanding, tool use, and structured output.",
        "toolCall": true
      },
      {
        "id": "dots-studio/dots-3-note-preview",
        "name": "Dots3-Note Preview",
        "description": "Dots Studio's open-weight multimodal Mixture-of-Experts model activates 16B of 280B parameters for long-context reasoning, coding, visual and document understanding, tool use, and ",
        "toolCall": true
      },
      {
        "id": "qwen3.8-27b:thinking",
        "name": "Qwen3.8 27B Thinking",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.3:thinking",
        "name": "GLM 5.3 Preview Thinking",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.3",
        "name": "GLM 5.3 Preview",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813:thinking",
        "name": "DeepSeek V4 Pro 0813 Thinking",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      }
    ]
  },
  {
    "id": "nearai",
    "name": "NEAR AI Cloud",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://cloud-api.near.ai/v1",
    "env": [
      "NEARAI_API_KEY"
    ],
    "models": [
      {
        "id": "google/gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.1-flash-lite",
        "name": "Gemini 3.1 Flash Lite",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B-FP8",
        "name": "Qwen 3.6 35B A3B FP8",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31B-it",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1-FP8",
        "name": "GLM-5.1 FP8",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4-nano",
        "name": "GPT-5.4 nano",
        "description": "Cheapest GPT-5.4 lane for simple routing, extraction, and bulk automation",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "nebius",
    "name": "Nebius Token Factory",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.tokenfactory.nebius.com/v1",
    "env": [
      "NEBIUS_API_KEY"
    ],
    "models": [
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M2.5-fast",
        "name": "MiniMax-M2.5-fast",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "nvidia/Nemotron-3-Nano-Omni",
        "name": "Nemotron-3-Nano-Omni",
        "description": "Open Nemotron omni model combining reasoning with text, vision, and audio",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b-fast",
        "name": "gpt-oss-120b-fast",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.2-fast",
        "name": "DeepSeek-V3.2-fast",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B-fast",
        "name": "Qwen3.5-397B-A17B-fast",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-Next-80B-A3B-Thinking-fast",
        "name": "Qwen3-Next-80B-A3B-Thinking-fast",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B",
        "name": "Qwen3.5-397B-A17B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "neon",
    "name": "Neon",
    "npm": "@ai-sdk/openai-compatible",
    "api": "${NEON_AI_GATEWAY_BASE_URL}/v1",
    "env": [
      "NEON_AI_GATEWAY_BASE_URL",
      "NEON_AI_GATEWAY_TOKEN"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3-5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3-6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "gpt-5-6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5-2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      }
    ]
  },
  {
    "id": "neuralwatt",
    "name": "Neuralwatt",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.neuralwatt.com/v1",
    "env": [
      "NEURALWATT_API_KEY"
    ],
    "models": [
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "kimi-k3-fast",
        "name": "Kimi K3 Fast",
        "description": "Kimi K3 with thinking disabled for low-latency tool calling, vision, and JSON work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-fast",
        "name": "GLM 5.2 Fast",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-5.2-flex",
        "name": "GLM 5.2 Flex",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-5.2-short",
        "name": "GLM 5.2 Short",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-5.2-short-fast-flex",
        "name": "GLM 5.2 Short Fast Flex",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM 5.2",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-5.2-short-fast",
        "name": "GLM 5.2 Short Fast",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-5.2-short-flex",
        "name": "GLM 5.2 Short Flex",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code-flex",
        "name": "Kimi K2.7 Code Flex",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "nova",
    "name": "Nova",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.nova.amazon.com/v1",
    "env": [
      "NOVA_API_KEY"
    ],
    "models": [
      {
        "id": "nova-2-pro-v1",
        "name": "Nova 2 Pro",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "nova-2-lite-v1",
        "name": "Nova 2 Lite",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "novita-ai",
    "name": "NovitaAI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.novita.ai/openai",
    "env": [
      "NOVITA_API_KEY"
    ],
    "models": [
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2-thinking",
        "name": "Kimi K2 Thinking",
        "description": "Kimi reasoning model for long-horizon research, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "inclusionai/ling-2.6-1t",
        "name": "Ling-2.6-1T",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": true
      },
      {
        "id": "baidu/ernie-4.5-vl-28b-a3b",
        "name": "ERNIE 4.5 VL 28B A3B",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "zai-org/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.7-max",
        "name": "Qwen3.7-Max",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "xiaomimimo/mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "description": "Earlier MiMo Pro model for multimodal agents, reasoning, and code tasks",
        "toolCall": true
      },
      {
        "id": "xiaomimimo/mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "inclusionai/ring-2.6-1t",
        "name": "Ring-2.6-1T",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.7-highspeed",
        "name": "MiniMax-M2.7-highspeed",
        "description": "Low-latency M2.7 variant for interactive coding plans and agent loops",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "nvidia",
    "name": "Nvidia",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://integrate.api.nvidia.com/v1",
    "env": [
      "NVIDIA_API_KEY"
    ],
    "models": [
      {
        "id": "nvidia/nemotron-3.5-lightning-30b-a3b",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "Fast NVIDIA Nemotron MoE for reliable agentic tasks across enterprise workloads",
        "toolCall": true
      },
      {
        "id": "meta/muse-glimmer-30b",
        "name": "Muse Glimmer 30B",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "poolside/laguna-xs-2.1",
        "name": "Laguna XS 2.1",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3-ultra-550b-a55b",
        "name": "Nemotron 3 Ultra 550B A55B",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "minimaxai/minimax-m3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "stepfun-ai/step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "mistralai/mistral-medium-3.5-128b",
        "name": "Mistral Medium 3.5",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
        "name": "Nemotron 3 Nano Omni",
        "description": "Open Nemotron omni model combining reasoning with text, vision, and audio",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ofox",
    "name": "Ofox",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.ofox.ai/v1",
    "env": [
      "OFOX_API_KEY"
    ],
    "models": [
      {
        "id": "z-ai/glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "bailian/qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ollama-cloud",
    "name": "Ollama Cloud",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://ollama.com/v1",
    "env": [
      "OLLAMA_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-flash:0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "kimi-k3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "kimi-k2.7-code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "nemotron-3-ultra",
        "name": "nemotron-3-ultra",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "minimax-m3",
        "name": "minimax-m3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "deepseek-v4-flash",
        "description": "Fast DeepSeek model for efficient chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "deepseek-v4-pro",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "kimi-k2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "gemma4:31b",
        "name": "gemma4:31b",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "glm-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "minimax-m2.7",
        "name": "minimax-m2.7",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "openai",
    "name": "OpenAI",
    "npm": "@ai-sdk/openai",
    "api": null,
    "env": [
      "OPENAI_API_KEY"
    ],
    "models": [
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6",
        "name": "GPT-5.6",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "gpt-realtime-2.1",
        "name": "GPT-Realtime-2.1",
        "description": "Realtime speech-to-speech model with configurable reasoning, tool use, and robust voice-agent behavior",
        "toolCall": true
      },
      {
        "id": "gpt-5.5-pro",
        "name": "GPT-5.5 Pro",
        "description": "Highest-accuracy GPT-5.5 tier for slower, precision-heavy reasoning and coding",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-nano",
        "name": "GPT-5.4 nano",
        "description": "Cheapest GPT-5.4 lane for simple routing, extraction, and bulk automation",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-pro",
        "name": "GPT-5.4 Pro",
        "description": "More exact GPT-5.4 tier for demanding professional reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      },
      {
        "id": "gpt-5.3-chat-latest",
        "name": "GPT-5.3 Chat (latest)",
        "description": "Chat-tuned GPT model for conversational assistance, writing, and tool workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "opencode",
    "name": "OpenCode Zen",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://opencode.ai/zen/v1",
    "env": [
      "OPENCODE_API_KEY"
    ],
    "models": [
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "nemotron-3.5-lightning-free",
        "name": "Nemotron 3.5 Lightning Free",
        "description": "Fast NVIDIA Nemotron MoE for reliable agentic tasks across enterprise workloads",
        "toolCall": true
      },
      {
        "id": "ling-3.0-tiny-free",
        "name": "Ling-3.0-tiny Free",
        "description": "Compact MoE model for responsive agents, instruction following, and multi-turn conversations",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2-contributor-free",
        "name": "Muse Spark 1.2 Free",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-free",
        "name": "DeepSeek V4 Flash Free",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "ling-3.0-flash-free",
        "name": "Ling-3.0-flash Free",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "laguna-s-2.1-free",
        "name": "Laguna S 2.1 Free",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "opencode-go",
    "name": "OpenCode Go",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://opencode.ai/zen/go/v1",
    "env": [
      "OPENCODE_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "muse-spark-1.2-contributor",
        "name": "Muse Spark 1.2 Contributor",
        "description": "Muse Spark 1.2 is a coding-focused update to Muse Spark 1.1 with improvements in code generation, complex debugging, codebase understanding, and end-to-end developer workflows.",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter multimodal flagship for coding, professional work, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "hy3",
        "name": "Hy3 (8x usage)",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "qwen3.7-plus",
        "name": "Qwen3.7 Plus",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "minimax-m3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "openrouter",
    "name": "OpenRouter",
    "npm": "@openrouter/ai-sdk-provider",
    "api": "https://openrouter.ai/api/v1",
    "env": [
      "OPENROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "~z-ai/glm-latest",
        "name": "GLM Latest",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "dots-studio/dots-3-note-preview:free",
        "name": "Dots3-Note Preview (free)",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.6",
        "name": "Grok 4.6",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "bytedance-seed/seed-2-1-turbo",
        "name": "Seed 2.1 Turbo",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.8-2.4t-a95b",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "Nemotron model for efficient reasoning, coding, and specialized AI agents",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning:free",
        "name": "Nemotron 3.5 Lightning (free)",
        "description": "Nemotron model for efficient reasoning, coding, and specialized AI agents",
        "toolCall": true
      },
      {
        "id": "liquid/lfm-2.5-2.6b:free",
        "name": "LFM2.5-2.6B (free)",
        "description": "Free provider route for experiments, demos, and cost-sensitive chat workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "orcarouter",
    "name": "OrcaRouter",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.orcarouter.ai/v1",
    "env": [
      "ORCAROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "google/gemini-flash-latest",
        "name": "Gemini Flash Latest",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "orcarouter/auto",
        "name": "OrcaRouter Auto",
        "description": "Automatic model router for matching prompts to suitable backends and budgets",
        "toolCall": true
      },
      {
        "id": "google/gemini-flash-lite-latest",
        "name": "Gemini Flash-Lite Latest",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5-pro",
        "name": "GPT-5.5 Pro",
        "description": "Highest-accuracy GPT-5.5 tier for slower, precision-heavy reasoning and coding",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "kimi/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "grok/grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "qwen/qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "ovhcloud",
    "name": "OVHcloud AI Endpoints",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
    "env": [
      "OVHCLOUD_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.6-27b",
        "name": "Qwen3.6-27B",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3.5-397b-a17b",
        "name": "Qwen3.5-397B-A17B",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3.5-9b",
        "name": "Qwen3.5-9B",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-30b-a3b-instruct",
        "name": "Qwen3-Coder-30B-A3B-Instruct",
        "description": "Coding model for repository understanding, refactors, and agentic engineering tasks",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "gpt-oss-120b",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "gpt-oss-20b",
        "name": "gpt-oss-20b",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "qwen3-32b",
        "name": "Qwen3-32B",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      },
      {
        "id": "mistral-small-3.2-24b-instruct-2506",
        "name": "Mistral-Small-3.2-24B-Instruct-2506",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": true
      },
      {
        "id": "meta-llama-3_3-70b-instruct",
        "name": "Meta-Llama-3_3-70B-Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "mistral-7b-instruct-v0.3",
        "name": "Mistral-7B-Instruct-v0.3",
        "description": "Mistral model for multilingual chat, reasoning, and tool-assisted workflows",
        "toolCall": true
      },
      {
        "id": "mistral-nemo-instruct-2407",
        "name": "Mistral-Nemo-Instruct-2407",
        "description": "Mistral model for multilingual chat, reasoning, and tool-assisted workflows",
        "toolCall": true
      },
      {
        "id": "qwen3guard-gen-8b",
        "name": "Qwen3Guard-Gen-8B",
        "description": "Open-weight instruction model for adaptable chat and self-hosted production workloads",
        "toolCall": false
      }
    ]
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "npm": "@ai-sdk/perplexity",
    "api": null,
    "env": [
      "PERPLEXITY_API_KEY"
    ],
    "models": [
      {
        "id": "sonar-deep-research",
        "name": "Perplexity Sonar Deep Research",
        "description": "Sonar search model for current answers, retrieval, and citation-backed chat",
        "toolCall": false
      },
      {
        "id": "sonar",
        "name": "Sonar",
        "description": "Fast web-grounded Sonar for current answers, citations, and lightweight retrieval",
        "toolCall": false
      },
      {
        "id": "sonar-reasoning-pro",
        "name": "Sonar Reasoning Pro",
        "description": "Web-grounded Sonar for multi-step research questions that need cited reasoning",
        "toolCall": false
      },
      {
        "id": "sonar-pro",
        "name": "Sonar Pro",
        "description": "Deeper Sonar search model with broader retrieval and stronger synthesis",
        "toolCall": false
      }
    ]
  },
  {
    "id": "perplexity-agent",
    "name": "Perplexity Agent",
    "npm": "@ai-sdk/openai",
    "api": "https://api.perplexity.ai/v1",
    "env": [
      "PERPLEXITY_API_KEY"
    ],
    "models": [
      {
        "id": "xai/grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "moonshot-ai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "moonshot-ai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Frontier GPT model for professional reasoning, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3-super-120b-a12b",
        "name": "Nemotron 3 Super 120B",
        "description": "Nemotron middle tier for collaborative agents and high-volume reasoning workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4",
        "name": "GPT-5.4",
        "description": "Frontier GPT model for professional reasoning, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "description": "Advanced Gemini model for complex reasoning, coding, and multimodal analysis",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "google/gemini-3-flash-preview",
        "name": "Gemini 3 Flash Preview",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "pioneer",
    "name": "Pioneer",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.pioneer.ai/v1",
    "env": [
      "PIONEER_API_KEY"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash-lite",
        "name": "Gemini 3.5 Flash Lite",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.6-flash",
        "name": "Gemini 3.6 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "poolside/laguna-s-2.1",
        "name": "Laguna S 2.1",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "meta/muse-spark-1.1",
        "name": "Muse Spark 1.1",
        "description": "Muse Spark is a natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration.",
        "toolCall": true
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "sakana/fugu-ultra",
        "name": "Fugu Ultra",
        "description": "Quality-first multi-agent model for hard research, analysis, and competitions",
        "toolCall": true
      }
    ]
  },
  {
    "id": "poe",
    "name": "Poe",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.poe.com/v1",
    "env": [
      "POE_API_KEY"
    ],
    "models": [
      {
        "id": "anthropic/claude-opus-4.8",
        "name": "Claude-Opus-4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.5-flash",
        "name": "Gemini-3.5-Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "novita/kimi-k2.6",
        "name": "Kimi-K2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "empiriolabs/deepseek-v4-flash-el",
        "name": "DeepSeek-V4-Flash-EL",
        "description": "Fast DeepSeek model for efficient chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "empiriolabs/deepseek-v4-pro-el",
        "name": "DeepSeek-V4-Pro-EL",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-opus-4.7",
        "name": "Claude-Opus-4.7",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5-pro",
        "name": "GPT-5.5-Pro",
        "description": "Highest-accuracy GPT-5.5 tier for slower, precision-heavy reasoning and coding",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-31b",
        "name": "Gemma-4-31B",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.20-multi-agent",
        "name": "Grok-4.20-Multi-Agent",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4-mini",
        "name": "GPT-5.4-Mini",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.4-nano",
        "name": "GPT-5.4-Nano",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "poolside",
    "name": "Poolside",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.poolside.ai/v1",
    "env": [
      "POOLSIDE_API_KEY"
    ],
    "models": [
      {
        "id": "poolside/laguna-s-2.1",
        "name": "Laguna S 2.1",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "poolside/laguna-xs-2.1",
        "name": "Laguna XS 2.1",
        "description": "Agentic coding model from Poolside in the XS size class for local deployment",
        "toolCall": true
      },
      {
        "id": "poolside/laguna-m.1",
        "name": "Laguna M.1",
        "description": "Poolside's open-weight model for agentic coding and long-horizon work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "privatemode-ai",
    "name": "Privatemode AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "http://localhost:8080/v1",
    "env": [
      "PRIVATEMODE_API_KEY",
      "PRIVATEMODE_ENDPOINT"
    ],
    "models": [
      {
        "id": "kimi-latest",
        "name": "Kimi (latest)",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "gpt-oss-120b",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "deepseek-ocr-2",
        "name": "DeepSeek OCR 2",
        "description": "High-accuracy OCR model for extracting text from documents, screenshots, receipts, and natural scenes",
        "toolCall": false
      },
      {
        "id": "voxtral-mini-3b",
        "name": "Voxtral Mini 3B",
        "description": "Speech-to-text model for audio transcription, translation, and audio understanding",
        "toolCall": false
      },
      {
        "id": "qwen3-embedding-4b",
        "name": "Qwen3-Embedding 4B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      },
      {
        "id": "whisper-large-v3",
        "name": "Whisper large-v3",
        "description": "Open Whisper checkpoint for robust multilingual transcription and captioning",
        "toolCall": false
      }
    ]
  },
  {
    "id": "qihang-ai",
    "name": "QiHang",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.qhaigc.net/v1",
    "env": [
      "QIHANG_API_KEY"
    ],
    "models": [
      {
        "id": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3-flash-preview",
        "name": "Gemini 3 Flash Preview",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gpt-5.2",
        "name": "GPT-5.2",
        "description": "GPT model for general reasoning, writing, coding, and tool-assisted tasks",
        "toolCall": true
      },
      {
        "id": "gpt-5.2-codex",
        "name": "GPT-5.2 Codex",
        "description": "Coding-optimized GPT model for repository edits, reviews, and agentic software work",
        "toolCall": true
      },
      {
        "id": "gemini-3-pro-preview",
        "name": "Gemini 3 Pro Preview",
        "description": "Advanced Gemini model for complex reasoning, coding, and multimodal analysis",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-5-20251101",
        "name": "Claude Opus 4.5",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-haiku-4-5-20251001",
        "name": "Claude Haiku 4.5",
        "description": "Fast Claude model for responsive assistance, classification, and lightweight agents",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-5-20250929",
        "name": "Claude Sonnet 4.5",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      },
      {
        "id": "gpt-5-mini",
        "name": "GPT-5-Mini",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "qiniu-ai",
    "name": "Qiniu",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.qnaigc.com/v1",
    "env": [
      "QINIU_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.5-397b-a17b",
        "name": "Qwen3.5 397B A17B",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "doubao-seed-2.0-mini",
        "name": "Doubao Seed 2.0 Mini",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "doubao-seed-2.0-code",
        "name": "Doubao Seed 2.0 Code",
        "description": "Coding model for repository understanding, refactors, and agentic engineering tasks",
        "toolCall": true
      },
      {
        "id": "doubao-seed-2.0-lite",
        "name": "Doubao Seed 2.0 Lite",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "doubao-seed-2.0-pro",
        "name": "Doubao Seed 2.0 Pro",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.5-highspeed",
        "name": "Minimax/Minimax-M2.5 Highspeed",
        "description": "High-speed MiniMax model for low-latency coding and agent workflows",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5",
        "name": "Z-Ai/GLM 5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m2.5",
        "name": "Minimax/Minimax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "qwen3-vl-30b-a3b-thinking",
        "name": "Qwen3-Vl 30b A3b Thinking",
        "description": "Multimodal model for analyzing text, images, documents, and rich media",
        "toolCall": true
      },
      {
        "id": "meituan/longcat-flash-lite",
        "name": "Meituan/Longcat-Flash-Lite",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "qwen3-30b-a3b-instruct-2507",
        "name": "Qwen3 30b A3b Instruct 2507",
        "description": "Tool-capable chat model for instruction following and agentic application workflows",
        "toolCall": true
      },
      {
        "id": "qwen3-30b-a3b-thinking-2507",
        "name": "Qwen3 30b A3b Thinking 2507",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "qvac",
    "name": "QVAC",
    "npm": "@qvac/ai-sdk-provider",
    "api": null,
    "env": [
      "QVAC_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "gemma4-31b",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "qwen3.5-9b",
        "name": "Qwen3.5 9B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3.5-2b",
        "name": "Qwen3.5 2B",
        "description": "Qwen instruction model for multilingual chat and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3.5-0.8b",
        "name": "Qwen3.5 0.8B",
        "description": "Qwen instruction model for multilingual chat and tool use",
        "toolCall": true
      },
      {
        "id": "qwen3.5-4b",
        "name": "Qwen3.5 4B",
        "description": "Qwen instruction model for multilingual chat and tool use",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "regolo-ai",
    "name": "Regolo AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.regolo.ai/v1",
    "env": [
      "REGOLO_API_KEY"
    ],
    "models": [
      {
        "id": "glm5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "qwen3.6-27b",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "gemma4-31b",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "mistral-small-4-119b",
        "name": "Mistral Small 4 119B",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-next",
        "name": "Qwen3-Coder-Next",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "gpt-oss-20b",
        "name": "GPT-OSS-20B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "brick-complexity-pro",
        "name": "Brick Complexity Pro",
        "description": "Complexity classifier that powers the Brick semantic router by extracting query difficulty",
        "toolCall": true
      },
      {
        "id": "brick-v1-beta",
        "name": "Brick v1 Beta",
        "description": "Semantic router by Regolo.ai that directs each request to the most suitable model, optimizing costs and performance",
        "toolCall": true
      },
      {
        "id": "qwen3.5-122b",
        "name": "Qwen3.5-122B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "qwen3.5-9b",
        "name": "Qwen3.5-9B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "apertus-70b",
        "name": "Apertus 70B",
        "description": "Fully open 70B multilingual LLM supporting 1800+ languages with 65K context. Trained on 15T tokens of compliant open data. Apache 2.0, EU AI Act compliant.",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT-OSS-120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "requesty",
    "name": "Requesty",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://router.requesty.ai/v1",
    "env": [
      "REQUESTY_API_KEY"
    ],
    "models": [
      {
        "id": "nemotron-lightning-3.5-30b-a3b",
        "name": "nemotron-lightning-3.5-30b-a3b",
        "description": "Nemotron-Lightning-3.5-30B-A3B is a 30B-parameter Mixture-of-Experts language model (3B active) from NVIDIA's Nemotron-H family, built on a hybrid Mamba-Transformer architecture fo",
        "toolCall": true
      },
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "gemini-3.7-flash@eu",
        "name": "Gemini 3.7 Flash (EU)",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "High-efficiency Gemini model for agentic workflows, coding, and multimodal reasoning",
        "toolCall": true
      },
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "qwen3.8-2.4T-A95B",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "nemotron-3.5-lightning-30b-a3b",
        "name": "nemotron-3.5-lightning-30b-a3b",
        "description": "NVIDIA Nemotron 3.5 Lightning 30B-A3B is a hybrid Mamba-2 + MoE + Attention model with 30B total and 3B active parameters, pre-trained on over 20T tokens with an NVFP4 recipe and M",
        "toolCall": true
      },
      {
        "id": "muse-glimmer-30b",
        "name": "Muse Glimmer 30B",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "ling-3.0-tiny",
        "name": "ling-3.0-tiny",
        "description": "Ling-3.0-tiny is an efficient 7.9B parameter MoE model from inclusionAI with only 1.3B active parameters per token. Built for responsive agents, reliable instruction following and ",
        "toolCall": true
      },
      {
        "id": "qwen3.8-max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731@eu",
        "name": "DeepSeek V4 Flash 0731 (EU)",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "routing-run",
    "name": "routing.run",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.routing.run/v1",
    "env": [
      "ROUTING_RUN_API_KEY"
    ],
    "models": [
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-nitro",
        "name": "GLM 5.2 Nitro",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "kimi-k2.7-code-nitro",
        "name": "Kimi K2.7 Code Nitro",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "nemotron-3-ultra",
        "name": "Nemotron 3 Ultra 550B A55B",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "kimi-k2.6-nitro",
        "name": "Kimi K2.6 Nitro",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      }
    ]
  },
  {
    "id": "runinfra",
    "name": "RunInfra",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.runinfra.ai/v1",
    "env": [
      "RUNINFRA_GATEWAY_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3.8-27B",
        "name": "Qwen3.8 27B",
        "description": "Dense 27B vision-language model for coding, agent tasks, and image and video understanding",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "Inferact/Qwen3.8-2.4T-A95B-NVFP4",
        "name": "Qwen3.8 2.4T A95B (NVFP4)",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
        "name": "Nemotron 3.5 Lightning 30B A3B",
        "description": "Fast NVIDIA Nemotron MoE for reliable agentic tasks across enterprise workloads",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      }
    ]
  },
  {
    "id": "sakana",
    "name": "Sakana AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.sakana.ai/v1",
    "env": [
      "SAKANA_API_KEY"
    ],
    "models": [
      {
        "id": "sakana-namazu",
        "name": "Sakana Namazu",
        "description": "Japanese-specialized reasoning model based on Kimi K2.6 and tuned for Japanese language, culture, and business workflows",
        "toolCall": true
      },
      {
        "id": "fugu",
        "name": "Fugu",
        "description": "Multi-agent model for routing expert agents across complex analytical tasks",
        "toolCall": true
      },
      {
        "id": "fugu-ultra-20260615",
        "name": "Fugu Ultra",
        "description": "Quality-first multi-agent model for hard research, analysis, and competitions",
        "toolCall": true
      },
      {
        "id": "fugu-ultra",
        "name": "Fugu Ultra",
        "description": "Quality-first multi-agent model for hard research, analysis, and competitions",
        "toolCall": true
      }
    ]
  },
  {
    "id": "salad-cloud",
    "name": "SaladCloud AI Gateway",
    "npm": "@saladtechnologies-oss/ai-sdk-provider",
    "api": null,
    "env": [
      "SALAD_CLOUD_API_KEY"
    ],
    "models": [
      {
        "id": "qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Qwen MoE for agentic tasks, complex reasoning, code generation, and instruction following",
        "toolCall": true
      }
    ]
  },
  {
    "id": "sap-ai-core",
    "name": "SAP AI Core",
    "npm": "@jerome-benoit/sap-ai-provider-v2",
    "api": null,
    "env": [
      "AICORE_SERVICE_KEY"
    ],
    "models": [
      {
        "id": "gpt-5.6-sol",
        "name": "gpt-5.6-sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "gpt-5.6-luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "gpt-5.6-terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "anthropic--claude-4.8-opus",
        "name": "anthropic--claude-4.8-opus",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash",
        "name": "gemini-3.5-flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gemini-3.1-flash-lite",
        "name": "gemini-3.1-flash-lite",
        "description": "Low-latency Gemini model for high-volume multimodal and agent workloads",
        "toolCall": true
      },
      {
        "id": "mistralai--mistral-medium",
        "name": "Mistral Medium 3.5",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "gpt-5.5",
        "description": "Frontier GPT model for professional reasoning, coding, and multimodal work",
        "toolCall": true
      },
      {
        "id": "anthropic--claude-4.7-opus",
        "name": "anthropic--claude-4.7-opus",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "mistralai--mistral-small",
        "name": "mistralai--mistral-small",
        "description": "Fast Mistral production model for chat, extraction, and cost-sensitive agents",
        "toolCall": true
      },
      {
        "id": "anthropic--claude-4.6-opus",
        "name": "anthropic--claude-4.6-opus",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "anthropic--claude-4.6-sonnet",
        "name": "anthropic--claude-4.6-sonnet",
        "description": "Balanced Claude model for coding, analysis, agent workflows, and cost control",
        "toolCall": true
      }
    ]
  },
  {
    "id": "sarvam",
    "name": "Sarvam AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.sarvam.ai/v1",
    "env": [
      "SARVAM_API_KEY"
    ],
    "models": [
      {
        "id": "sarvam-105b",
        "name": "Sarvam-105B",
        "description": "Flagship Indian-language reasoning model for enterprise multilingual applications",
        "toolCall": true
      },
      {
        "id": "sarvam-30b",
        "name": "Sarvam-30B",
        "description": "Efficient Indian-language reasoning model for chat, coding, and multilingual work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "scaleway",
    "name": "Scaleway",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.scaleway.ai/v1",
    "env": [
      "SCALEWAY_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "gemma-4-26b-a4b-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      },
      {
        "id": "qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "mistral-medium-3.5-128b",
        "name": "Mistral Medium 3.5 128B",
        "description": "Balanced Mistral model for enterprise assistants, multilingual work, and tools",
        "toolCall": true
      },
      {
        "id": "qwen3-coder-30b-a3b-instruct",
        "name": "Qwen3-Coder 30B-A3B Instruct",
        "description": "Smaller Qwen coder for efficient local agents and repo-level fixes",
        "toolCall": true
      },
      {
        "id": "mistral-small-3.2-24b-instruct-2506",
        "name": "Mistral Small 3.2 24B Instruct (2506)",
        "description": "Efficient Mistral model for fast chat, extraction, and production assistants",
        "toolCall": true
      },
      {
        "id": "llama-3.3-70b-instruct",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "qwen3.5-397b-a17b",
        "name": "Qwen3.5 397B A17B",
        "description": "Large open Qwen multimodal MoE for visual agents and long technical tasks",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT-OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "qwen3-235b-a22b-instruct-2507",
        "name": "Qwen3 235B A22B Instruct 2507",
        "description": "Large open Qwen MoE for multilingual reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "pixtral-12b-2409",
        "name": "Pixtral 12B 2409",
        "description": "Mistral vision-language model for image understanding and multimodal chat",
        "toolCall": true
      },
      {
        "id": "whisper-large-v3",
        "name": "Whisper Large v3",
        "description": "Speech transcription model for accurate audio-to-text and captioning workflows",
        "toolCall": false
      }
    ]
  },
  {
    "id": "scnet-token-plan",
    "name": "SCNet Token Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.scnet.cn/api/llm/v1",
    "env": [
      "SCNET_API_KEY"
    ],
    "models": [
      {
        "id": "Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "MiMo-V2.5-Pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "GLM-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      },
      {
        "id": "GLM-5",
        "name": "GLM-5",
        "description": "General GLM flagship for coding, analysis, and tool-heavy engineering workflows",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.5",
        "name": "MiniMax-M2.5",
        "description": "Prior MiniMax coding model for agent workflows, office edits, and automation",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.5",
        "name": "Kimi K2.5",
        "description": "Earlier Kimi frontier model for long-context agents, coding, and multimodal work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "scx-ai",
    "name": "SCX.ai",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.scx.ai/v1",
    "env": [
      "SCX_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen3.8-Max",
        "name": "Qwen3.8 Max",
        "description": "2.4-trillion-parameter MoE flagship for coding, professional work, multimodal understanding, and long-horizon agentic workflows",
        "toolCall": true
      },
      {
        "id": "GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "siliconflow",
    "name": "SiliconFlow",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.siliconflow.com/v1",
    "env": [
      "SILICONFLOW_API_KEY"
    ],
    "models": [
      {
        "id": "MiniMaxAI/MiniMax-M2.5",
        "name": "MiniMaxAI/MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "moonshotai/Kimi-K2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5",
        "name": "zai-org/GLM-5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-9B",
        "name": "Qwen/Qwen3.5-9B",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-27B",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "tencent/Hy3-preview",
        "name": "Hy3 preview",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1",
        "name": "zai-org/GLM-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "google/gemma-4-26B-A4B-it",
        "name": "Gemma 4 26B A4B IT",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": true
      }
    ]
  },
  {
    "id": "siliconflow-cn",
    "name": "SiliconFlow (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.siliconflow.cn/v1",
    "env": [
      "SILICONFLOW_CN_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "deepseek-ai/DeepSeek-V4-Pro",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "Pro/moonshotai/Kimi-K2.6",
        "name": "Pro/moonshotai/Kimi-K2.6",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-35B-A3B",
        "name": "Qwen/Qwen3.6-35B-A3B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Pro/zai-org/GLM-5.1",
        "name": "Pro/zai-org/GLM-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-9B",
        "name": "Qwen/Qwen3.5-9B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-4B",
        "name": "Qwen/Qwen3.5-4B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-122B-A10B",
        "name": "Qwen/Qwen3.5-122B-A10B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-27B",
        "name": "Qwen/Qwen3.5-27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-35B-A3B",
        "name": "Qwen/Qwen3.5-35B-A3B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B",
        "name": "Qwen/Qwen3.5-397B-A17B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "snowflake-cortex",
    "name": "Snowflake Cortex",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://${SNOWFLAKE_ACCOUNT}.snowflakecomputing.com/api/v2/cortex/v1",
    "env": [
      "SNOWFLAKE_ACCOUNT",
      "SNOWFLAKE_CORTEX_PAT"
    ],
    "models": [
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Strongest Claude Opus model for coding, agents, and professional work",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-7",
        "name": "Claude Opus 4.7",
        "description": "Stronger Opus tier for advanced software work and high-stakes reasoning",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-6",
        "name": "Claude Opus 4.6",
        "description": "High-end Claude for difficult coding, planning, and slower expert reasoning",
        "toolCall": true
      },
      {
        "id": "openai-gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "stackit",
    "name": "STACKIT",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.openai-compat.model-serving.eu01.onstackit.cloud/v1",
    "env": [
      "STACKIT_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3.6-27B",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-20b",
        "name": "GPT OSS 20B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic",
        "name": "Llama 3.3 70B",
        "description": "Open Llama instruction model for multilingual chat, reasoning, and coding",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-VL-235B-A22B-Instruct-FP8",
        "name": "Qwen3-VL 235B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-VL-Embedding-8B",
        "name": "Qwen3-VL Embedding 8B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      },
      {
        "id": "google/gemma-3-27b-it",
        "name": "Gemma 3 27B",
        "description": "Open Gemma instruction model for efficient chat and self-hosted deployments",
        "toolCall": false
      },
      {
        "id": "intfloat/e5-mistral-7b-instruct",
        "name": "E5 Mistral 7B",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      }
    ]
  },
  {
    "id": "stepfun",
    "name": "StepFun (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.stepfun.com/v1",
    "env": [
      "STEPFUN_API_KEY"
    ],
    "models": [
      {
        "id": "step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash",
        "name": "Step 3.5 Flash",
        "description": "StepFun flash lane for quick multimodal reasoning and coding assistance",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash-2603",
        "name": "Step 3.5 Flash 2603",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-2-16k",
        "name": "Step 2 (16K)",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-1-32k",
        "name": "Step 1 (32K)",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "stepaudio-2.5-asr",
        "name": "StepAudio 2.5 ASR",
        "description": "Speech transcription model for accurate audio-to-text and captioning workflows",
        "toolCall": false
      }
    ]
  },
  {
    "id": "stepfun-ai",
    "name": "StepFun (Global)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.stepfun.ai/v1",
    "env": [
      "STEPFUN_API_KEY"
    ],
    "models": [
      {
        "id": "step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash",
        "name": "Step 3.5 Flash",
        "description": "StepFun flash lane for quick multimodal reasoning and coding assistance",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash-2603",
        "name": "Step 3.5 Flash 2603",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-1-32k",
        "name": "Step 1 (32K)",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-2-16k",
        "name": "Step 2 (16K)",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "stepaudio-2.5-asr",
        "name": "StepAudio 2.5 ASR",
        "description": "Speech transcription model for accurate audio-to-text and captioning workflows",
        "toolCall": false
      }
    ]
  },
  {
    "id": "stepfun-ai-step-plan",
    "name": "StepFun Step Plan (Global)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.stepfun.ai/step_plan/v1",
    "env": [
      "STEPFUN_API_KEY"
    ],
    "models": [
      {
        "id": "step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash-2603",
        "name": "Step 3.5 Flash 2603",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash",
        "name": "Step 3.5 Flash",
        "description": "StepFun flash lane for quick multimodal reasoning and coding assistance",
        "toolCall": true
      }
    ]
  },
  {
    "id": "stepfun-step-plan",
    "name": "StepFun Step Plan (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.stepfun.com/step_plan/v1",
    "env": [
      "STEPFUN_API_KEY"
    ],
    "models": [
      {
        "id": "step-router-v1",
        "name": "Step Router v1",
        "description": "StepFun routing model that dispatches requests to the appropriate Step model.",
        "toolCall": true
      },
      {
        "id": "step-3.7-flash",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash-2603",
        "name": "Step 3.5 Flash 2603",
        "description": "StepFun flash model for efficient multimodal reasoning, coding, and tool use",
        "toolCall": true
      },
      {
        "id": "step-3.5-flash",
        "name": "Step 3.5 Flash",
        "description": "StepFun flash lane for quick multimodal reasoning and coding assistance",
        "toolCall": true
      }
    ]
  },
  {
    "id": "subconscious",
    "name": "Subconscious",
    "npm": "@ai-sdk/anthropic",
    "api": "https://api.subconscious.dev/v1",
    "env": [
      "SUBCONSCIOUS_API_KEY"
    ],
    "models": [
      {
        "id": "subconscious/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "subconscious/tim-qwen3.6-27b",
        "name": "TIM-Qwen3.6 27B",
        "description": "Reasoning model for deliberate analysis, multi-step problem solving, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "submodel",
    "name": "submodel",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://llm.submodel.ai/v1",
    "env": [
      "SUBMODEL_INSTAGEN_ACCESS_KEY"
    ],
    "models": [
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-R1-0528",
        "name": "DeepSeek R1 0528",
        "description": "DeepSeek reasoning model for multi-step analysis, math, coding, and tools",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3.1",
        "name": "DeepSeek V3.1",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V3-0324",
        "name": "DeepSeek V3 0324",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-235B-A22B-Instruct-2507",
        "name": "Qwen3 235B A22B Instruct 2507",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8",
        "name": "Qwen3 Coder 480B A35B Instruct",
        "description": "Qwen coding model for software agents, repository edits, and code reasoning",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3-235B-A22B-Thinking-2507",
        "name": "Qwen3 235B A22B Thinking 2507",
        "description": "Qwen reasoning model for deliberate problem solving, math, and coding",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.5-Air",
        "name": "GLM 4.5 Air",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-4.5-FP8",
        "name": "GLM 4.5 FP8",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      }
    ]
  },
  {
    "id": "synthetic",
    "name": "Synthetic",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.synthetic.new/openai/v1",
    "env": [
      "SYNTHETIC_API_KEY"
    ],
    "models": [
      {
        "id": "hf:moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "hf:zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "hf:moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "hf:MiniMaxAI/MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "hf:Qwen/Qwen3.6-27B",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "hf:nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-NVFP4",
        "name": "Nemotron 3 Super 120B A12B",
        "description": "Nemotron middle tier for collaborative agents and high-volume reasoning workloads",
        "toolCall": true
      },
      {
        "id": "hf:zai-org/GLM-4.7-Flash",
        "name": "GLM-4.7-Flash",
        "description": "Budget GLM lane for fast coding help, routing, and everyday automation",
        "toolCall": true
      },
      {
        "id": "hf:openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open-weight GPT model for self-hosted reasoning and instruction-following workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "tencent-coding-plan",
    "name": "Tencent Coding Plan (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.lkeap.cloud.tencent.com/coding/v3",
    "env": [
      "TENCENT_CODING_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "hunyuan-2.0-thinking",
        "name": "Tencent HY 2.0 Think",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "hunyuan-2.0-instruct",
        "name": "Tencent HY 2.0 Instruct",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "tc-code-latest",
        "name": "Auto",
        "description": "Automatic model router for matching prompts to suitable backends and budgets",
        "toolCall": true
      },
      {
        "id": "hunyuan-t1",
        "name": "Hunyuan-T1",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "hunyuan-turbos",
        "name": "Hunyuan-TurboS",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "minimax-m2.5",
        "name": "MiniMax-M2.5",
        "description": "MiniMax model for chat, coding, office work, and agentic tasks",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "kimi-k2.5",
        "name": "Kimi-K2.5",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      }
    ]
  },
  {
    "id": "tencent-token-plan",
    "name": "Tencent Token Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.lkeap.cloud.tencent.com/plan/v3",
    "env": [
      "TENCENT_TOKEN_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "hy3",
        "name": "Hy3",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "tencent-tokenhub",
    "name": "Tencent TokenHub",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://tokenhub.tencentmaas.com/v1",
    "env": [
      "TENCENT_TOKENHUB_API_KEY"
    ],
    "models": [
      {
        "id": "hy3",
        "name": "Hy3",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      },
      {
        "id": "hy3-preview",
        "name": "Hy3 preview",
        "description": "Tencent Hy reasoning model for coding, instruction following, and agent tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "tensorx",
    "name": "TensorX",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.tensorx.ai/v1",
    "env": [
      "TENSORX_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek/deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "minimax/minimax-m3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5v-turbo",
        "name": "GLM-5V-Turbo",
        "description": "Fast GLM vision model for screenshots, documents, and multimodal agent tasks",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5-turbo",
        "name": "GLM-5-Turbo",
        "description": "Faster GLM-5 lane for coding agents that need lower latency",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3-super-120b-a12b",
        "name": "Nemotron 3 Super 120B A12B",
        "description": "Nemotron middle tier for collaborative agents and high-volume reasoning workloads",
        "toolCall": true
      }
    ]
  },
  {
    "id": "the-grid-ai",
    "name": "The Grid AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.thegrid.ai/v1",
    "env": [
      "THEGRID_API_KEY"
    ],
    "models": [
      {
        "id": "agent-max",
        "name": "Agent Max",
        "description": "Frontier models for autonomous research, deep multi-step tool chains, and complex long-horizon tasks. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "text-max",
        "name": "Text Max",
        "description": "Frontier models for deep reasoning, long context, and complex workflows. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "code-max",
        "name": "Code Max",
        "description": "Frontier models for complex research, architectural decisions, debugging, and multi-file development. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "code-prime",
        "name": "Code Prime",
        "description": "Reliable models for everyday software tasks, code completion, review, and standard debugging. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "text-prime",
        "name": "Text Prime",
        "description": "Reliable models for everyday text generation, editing, and analysis across diverse workflows. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "text-standard",
        "name": "Text Standard",
        "description": "Price-optimized models with low-latency, high-throughput and shorter maximum outputs. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "agent-prime",
        "name": "Agent Prime",
        "description": "Reliable models for dependable agentic applications, multi-step tool use, and reasoning workflows. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "code-standard",
        "name": "Code Standard",
        "description": "Price-optimized models for rapid autocomplete, linting, high-frequency suggestions, and batch edits. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      },
      {
        "id": "agent-standard",
        "name": "Agent Standard",
        "description": "Price-optimized models for fast tool calls, simple agent loops, high-throughput automation, and orchestration. Any model that meets the contract spec can serve your request.",
        "toolCall": true
      }
    ]
  },
  {
    "id": "thinkingmachines",
    "name": "Thinking Machines",
    "npm": "@ai-sdk/anthropic",
    "api": "https://tinker.thinkingmachines.dev/services/tinker-prod/anthropic/api/v1",
    "env": [
      "TINKER_API_KEY"
    ],
    "models": [
      {
        "id": "thinkingmachines/Inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling:peft:262144",
        "name": "Inkling (256K)",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      }
    ]
  },
  {
    "id": "tinfoil",
    "name": "Tinfoil",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://inference.tinfoil.sh/v1",
    "env": [
      "TINFOIL_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "glm-5-2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "gemma4-31b",
        "name": "Gemma 4 31B IT",
        "description": "Largest Gemma 4 instruction model for open, self-hosted chat and reasoning",
        "toolCall": true
      },
      {
        "id": "gpt-oss-safeguard-120b",
        "name": "gpt-oss-safeguard-120b",
        "description": "Safety model for policy screening, moderation, and risk-aware routing workflows",
        "toolCall": true
      },
      {
        "id": "gpt-oss-120b",
        "name": "gpt-oss-120b",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "llama3-3-70b",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Popular open Llama workhorse for multilingual chat, coding, and self-hosting",
        "toolCall": true
      },
      {
        "id": "nomic-embed-text",
        "name": "Nomic Embed Text v1.5",
        "description": "Embedding model for semantic search, retrieval, clustering, and ranking pipelines",
        "toolCall": false
      }
    ]
  },
  {
    "id": "togetherai",
    "name": "Together AI",
    "npm": "@ai-sdk/togetherai",
    "api": null,
    "env": [
      "TOGETHER_API_KEY"
    ],
    "models": [
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "thinkingmachines/Inkling",
        "name": "Inkling",
        "description": "Multimodal MoE reasoning model (975B total, 41B active) for text, image, and audio",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.7-Max",
        "name": "Qwen3.7 Max",
        "description": "Flagship Qwen model for complex reasoning, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.1",
        "name": "GLM-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        "name": "Llama 3.3 70B",
        "description": "Compact Llama instruction model for fast chat and local deployment",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B",
        "name": "Qwen3.5 397B A17B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Kimi coding model for software agents, refactors, and repository reasoning",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal coding model for long-context reasoning and agent tasks",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3-ultra-550b-a55b",
        "name": "Nemotron 3 Ultra 550B A55B",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      }
    ]
  },
  {
    "id": "trustedrouter",
    "name": "TrustedRouter",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.trustedrouter.com/v1",
    "env": [
      "TRUSTEDROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "cheap",
        "name": "Cheap",
        "description": "TrustedRouter low-cost routing alias that prefers inexpensive healthy model endpoints.",
        "toolCall": true
      },
      {
        "id": "fast",
        "name": "Fast",
        "description": "TrustedRouter speed routing alias that prefers low-latency healthy model endpoints.",
        "toolCall": true
      },
      {
        "id": "auto",
        "name": "Auto",
        "description": "TrustedRouter automatic routing alias that chooses a healthy supported model endpoint for the request.",
        "toolCall": true
      },
      {
        "id": "synth-code",
        "name": "Synth Code",
        "description": "TrustedRouter code synthesis orchestration alias that combines multiple model responses into one answer.",
        "toolCall": true
      },
      {
        "id": "e2e",
        "name": "End-to-End Encrypted",
        "description": "TrustedRouter privacy routing alias for end-to-end encrypted provider routes where available.",
        "toolCall": true
      },
      {
        "id": "zdr",
        "name": "Zero Data Retention",
        "description": "TrustedRouter privacy routing alias that prefers zero data retention model endpoints.",
        "toolCall": true
      },
      {
        "id": "synth",
        "name": "Synth",
        "description": "TrustedRouter synthesis orchestration alias that combines multiple model responses into one answer.",
        "toolCall": true
      }
    ]
  },
  {
    "id": "umans-ai",
    "name": "Umans AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.code.umans.ai/v1",
    "env": [
      "UMANS_AI_API_KEY"
    ],
    "models": [
      {
        "id": "umans-deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "umans-deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "umans-kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "umans-glm-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "umans-coder",
        "name": "Umans Coder",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "umans-kimi-k2.7",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "umans-flash",
        "name": "Umans Flash",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      }
    ]
  },
  {
    "id": "umans-ai-coding-plan",
    "name": "Umans AI Coding Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.code.umans.ai/v1",
    "env": [
      "UMANS_AI_CODING_PLAN_API_KEY"
    ],
    "models": [
      {
        "id": "umans-deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro",
        "description": "DeepSeek V4 Pro snapshot with million-token context and support for thinking and non-thinking modes",
        "toolCall": true
      },
      {
        "id": "umans-deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "umans-kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "umans-glm-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "umans-coder",
        "name": "Umans Coder",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "umans-kimi-k2.7",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "umans-qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      },
      {
        "id": "umans-flash",
        "name": "Umans Flash",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      }
    ]
  },
  {
    "id": "unorouter",
    "name": "UnoRouter",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.unorouter.com/v1",
    "env": [
      "UNOROUTER_API_KEY"
    ],
    "models": [
      {
        "id": "claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "glm-5.2:free",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "nemotron-3-ultra-550b-a55b:free",
        "name": "Nemotron 3 Ultra 550B A55B",
        "description": "Largest Nemotron 3 model for maximum open-weight reasoning and agent accuracy",
        "toolCall": true
      },
      {
        "id": "step-3.7-flash:free",
        "name": "Step 3.7 Flash",
        "description": "Newer StepFun flash model for faster agents, coding, and multimodal prompts",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro:free",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash:free",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "gpt-5.5:free",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "upstage",
    "name": "Upstage",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.upstage.ai/v1/solar",
    "env": [
      "UPSTAGE_API_KEY"
    ],
    "models": [
      {
        "id": "solar-pro4",
        "name": "Solar Pro 4",
        "description": "Upstage's flagship model, specialized for agentic use",
        "toolCall": true
      },
      {
        "id": "solar-pro3",
        "name": "solar-pro3",
        "description": "Flagship model for demanding analysis, coding, and production agent workflows",
        "toolCall": true
      },
      {
        "id": "solar-pro2",
        "name": "solar-pro2",
        "description": "Flagship model for demanding analysis, coding, and production agent workflows",
        "toolCall": true
      },
      {
        "id": "solar-mini",
        "name": "solar-mini",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      }
    ]
  },
  {
    "id": "v0",
    "name": "v0",
    "npm": "@ai-sdk/vercel",
    "api": null,
    "env": [
      "V0_API_KEY"
    ],
    "models": [
      {
        "id": "v0-1.5-md",
        "name": "v0-1.5-md",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "v0-1.5-lg",
        "name": "v0-1.5-lg",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      },
      {
        "id": "v0-1.0-md",
        "name": "v0-1.0-md",
        "description": "Multimodal reasoning model for visual analysis, planning, and tool use",
        "toolCall": true
      }
    ]
  },
  {
    "id": "venice",
    "name": "Venice AI",
    "npm": "venice-ai-sdk-provider",
    "api": null,
    "env": [
      "VENICE_API_KEY"
    ],
    "models": [
      {
        "id": "z-ai-glm-5-3",
        "name": "GLM 5.3",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "qwen-3-8-27b",
        "name": "Qwen 3.8 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "gemini-3-7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "qwen-3-8-2-4t-a95b",
        "name": "Qwen 3.8 2.4T",
        "description": "Qwen instruction model for multilingual chat, reasoning, and tool use",
        "toolCall": true
      },
      {
        "id": "grok-4-6",
        "name": "Grok 4.6",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "nvidia-nemotron-3-5-lightning-30b-a3b",
        "name": "NVIDIA Nemotron 3.5 Lightning 30B",
        "description": "Nemotron model for efficient reasoning, coding, and specialized AI agents",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731-fast",
        "name": "DeepSeek V4 Flash 0731 Fast",
        "description": "Fast DeepSeek model for efficient chat, coding help, and agent loops",
        "toolCall": true
      },
      {
        "id": "kimi-k3-fast-api",
        "name": "Kimi K3 Fast",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "claude-opus-5-fast",
        "name": "Claude Opus 5 Fast",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "claude-opus-5",
        "name": "Claude Opus 5",
        "description": "Flagship Claude model for deep reasoning, coding, and long-horizon agents",
        "toolCall": true
      }
    ]
  },
  {
    "id": "vercel",
    "name": "Vercel AI Gateway",
    "npm": "@ai-sdk/gateway",
    "api": null,
    "env": [
      "AI_GATEWAY_API_KEY"
    ],
    "models": [
      {
        "id": "zai/glm-5.3",
        "name": "GLM 5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "alibaba/qwen3.8-27b",
        "name": "Qwen3.8 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "google/gemini-3.7-flash",
        "name": "Gemini 3.7 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "deepseek/deepseek-v4-pro-0813",
        "name": "DeepSeek V4 Pro 0813",
        "description": "Flagship DeepSeek model for coding, reasoning, and agentic work",
        "toolCall": true
      },
      {
        "id": "xai/grok-4.6",
        "name": "Grok 4.6",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "alibaba/qwen3.8-2.4t-a95b",
        "name": "Qwen3.8 2.4T A95B",
        "description": "Open-weight sparse MoE (2.4T total, 95B active), the open-weight twin of Qwen3.8 Max for coding, research, complex reasoning, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "nvidia/nemotron-3.5-lightning",
        "name": "Nemotron 3.5 Lightning 30B",
        "description": "Nemotron model for efficient reasoning, coding, and specialized AI agents",
        "toolCall": true
      },
      {
        "id": "meta/muse-glimmer-30b",
        "name": "Muse Glimmer 30B",
        "description": "Muse Glimmer is a 30-billion-parameter open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark for always-on local agents, tool use, coding, and im",
        "toolCall": true
      },
      {
        "id": "inclusionai/ling-3.0-flash",
        "name": "Ling 3.0 Flash",
        "description": "Efficient model for low-latency assistance, extraction, and routine automation",
        "toolCall": true
      },
      {
        "id": "meta/muse-spark-1.2",
        "name": "Muse Spark 1.2",
        "description": "Open Llama multimodal model for image understanding and text reasoning",
        "toolCall": true
      },
      {
        "id": "meta/muse-spark-1.2-contributor",
        "name": "Muse Spark 1.2 Contributor",
        "description": "Open Llama multimodal model for image understanding and text reasoning",
        "toolCall": true
      },
      {
        "id": "sakana/namazu",
        "name": "Sakana Namazu",
        "description": "Multi-agent model for routing expert agents across complex analytical tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "vivgrid",
    "name": "Vivgrid",
    "npm": "@ai-sdk/openai",
    "api": "https://api.vivgrid.com/v1",
    "env": [
      "VIVGRID_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-flash",
        "name": "DeepSeek V4 Flash",
        "description": "Official DeepSeek V4 Flash release with enhanced agentic capabilities and integrated DSpark speculative decoding",
        "toolCall": true
      },
      {
        "id": "kimi-k3",
        "name": "Kimi K3",
        "description": "Kimi multimodal agent model for visual understanding, coding, and planning",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-sol",
        "name": "GPT 5.6 Sol",
        "description": "GPT model for general reasoning, writing, coding, and tool-assisted tasks",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-luna",
        "name": "GPT 5.6 Luna",
        "description": "GPT model for general reasoning, writing, coding, and tool-assisted tasks",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT 5.6 Terra",
        "description": "GPT model for general reasoning, writing, coding, and tool-assisted tasks",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "deepseek-v4-pro",
        "name": "DeepSeek V4 Pro",
        "description": "Open MoE flagship with million-token context for coding and long agent runs",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT-5.4 Mini",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-nano",
        "name": "GPT-5.4 Nano",
        "description": "Compact GPT model for low-latency assistance and high-volume workloads",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Frontier GPT model for professional reasoning, coding, and multimodal work",
        "toolCall": true
      }
    ]
  },
  {
    "id": "vultr",
    "name": "Vultr",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.vultrinference.com/v1",
    "env": [
      "VULTR_API_KEY"
    ],
    "models": [
      {
        "id": "zai-org/GLM-5.2-FP8",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16",
        "name": "NVIDIA Nemotron 3 Nano Omni",
        "description": "Open Nemotron omni model combining reasoning with text, vision, and audio",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "Fast DeepSeek V4 lane for economical reasoning, coding, and long-context work",
        "toolCall": true
      },
      {
        "id": "XiaomiMiMo/MiMo-V2.5-Pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.6-27B",
        "name": "Qwen3.6 27B",
        "description": "Qwen vision-language model for visual reasoning, documents, and agent tasks",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Multimodal Kimi workhorse for agent loops, coding tasks, and visual context",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M2.7",
        "name": "MiniMax-M2.7",
        "description": "Open MiniMax flagship for coding agents, office automation, and complex environments",
        "toolCall": true
      },
      {
        "id": "Qwen/Qwen3.5-397B-A17B",
        "name": "Qwen3.5 397B-A17B",
        "description": "Large open Qwen multimodal MoE for visual agents and long technical tasks",
        "toolCall": true
      },
      {
        "id": "nvidia/Nemotron-Cascade-2-30B-A3B",
        "name": "NVIDIA Nemotron Cascade 2",
        "description": "Nemotron model for efficient reasoning, coding, and specialized AI agents",
        "toolCall": true
      },
      {
        "id": "nvidia/DeepSeek-V3.2-NVFP4",
        "name": "DeepSeek V3.2",
        "description": "DeepSeek chat model for instruction following, coding, and analysis",
        "toolCall": true
      }
    ]
  },
  {
    "id": "wafer.ai",
    "name": "Wafer",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://pass.wafer.ai/v1",
    "env": [
      "WAFER_API_KEY"
    ],
    "models": [
      {
        "id": "GLM-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm5.2-fast",
        "name": "GLM5.2-Fast",
        "description": "The same model served for high TPS.",
        "toolCall": true
      },
      {
        "id": "MiniMax-M3",
        "name": "MiniMax-M3",
        "description": "MiniMax multimodal model for long-context coding, perception, and agent planning",
        "toolCall": true
      },
      {
        "id": "GLM-5.1",
        "name": "GLM-5.1",
        "description": "General Language Model 5.1 — high-quality bilingual (EN/ZH) generation with strong coding and reasoning capabilities.",
        "toolCall": true
      },
      {
        "id": "Kimi-K2.6",
        "name": "Kimi K2.6",
        "description": "Kimi K2.6 sparse MoE model with a 262K context window. Available serverless and not included in standard Wafer Pass. Non-ZDR only: requests with `Wafer-ZDR: required` are rejected.",
        "toolCall": true
      }
    ]
  },
  {
    "id": "wandb",
    "name": "Weights & Biases",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.inference.wandb.ai/v1",
    "env": [
      "WANDB_API_KEY"
    ],
    "models": [
      {
        "id": "Qwen/Qwen3.8-27B",
        "name": "Qwen3.8 27B",
        "description": "Qwen3.8-27B is a dense multimodal model suited for coding, research, vision, and long-running agent tasks.",
        "toolCall": true
      },
      {
        "id": "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B",
        "name": "Nemotron 3.5 Lightning",
        "description": "Nemotron 3.5 Lightning is an MoE model built for fast, reliable agentic tasks across use cases such as financial services, cybersecurity, telecom, and retail.",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash-0731",
        "name": "DeepSeek V4 Flash 0731",
        "description": "DeepSeek V4-Flash-0731 is an MoE model great for coding, reasoning, and agentic workloads.",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K3",
        "name": "Kimi K3",
        "description": "Kimi K3 is a 2.8T-parameter multimodal MoE model with 104B active parameters built for long-horizon coding and agentic workflows.",
        "toolCall": true
      },
      {
        "id": "zai-org/GLM-5.2",
        "name": "GLM 5.2",
        "description": "GLM-5.2 is a Mixture-of-Experts language model featuring 40 billion activated parameters and a total of 744 billion parameters.",
        "toolCall": true
      },
      {
        "id": "MiniMaxAI/MiniMax-M3",
        "name": "MiniMax M3",
        "description": "MiniMax M3 is a multimodal MoE model with 23B active parameters optimized for coding and agentic workflows.",
        "toolCall": true
      },
      {
        "id": "moonshotai/Kimi-K2.7-Code",
        "name": "Kimi K2.7 Code",
        "description": "Kimi K2.7 Code is a 1T-parameter MoE model with 32B active parameters purpose-built for long-horizon agentic coding and software engineering.",
        "toolCall": true
      },
      {
        "id": "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B",
        "name": "Nemotron 3 Ultra",
        "description": "Nemotron 3 Ultra is a powerful MoE model designed for long-running agents across coding, deep research, and enterprise automation.",
        "toolCall": true
      },
      {
        "id": "JetBrains/Mellum2-12B-A2.5B-Instruct",
        "name": "Mellum2 12B A2.5B",
        "description": "Mellum2-12B-A2.5B-Instruct is a fast MoE model with 131K context built for coding, tool use, and low-latency AI workflows.",
        "toolCall": true
      },
      {
        "id": "ibm-granite/granite-4.1-8b",
        "name": "Granite 4.1 8B",
        "description": "Granite 4.1 8B is a long-context instruct model capable of enhanced tool calling, instruction following, and chat capabilities.",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Pro",
        "name": "DeepSeek V4 Pro",
        "description": "DeepSeek V4-Pro is a 1.6T-parameter MoE model with 49B active parameters excelling at advanced reasoning, coding, and complex agentic workloads.",
        "toolCall": true
      },
      {
        "id": "deepseek-ai/DeepSeek-V4-Flash",
        "name": "DeepSeek V4 Flash",
        "description": "DeepSeek V4-Flash is an MoE model with 1M context length great for coding, reasoning, and agentic workloads.",
        "toolCall": true
      }
    ]
  },
  {
    "id": "watsonx",
    "name": "watsonx.ai",
    "npm": "watsonx-ai-provider",
    "api": null,
    "env": [
      "WATSONX_AI_APIKEY",
      "WATSONX_AI_PROJECT_ID"
    ],
    "models": [
      {
        "id": "ibm/granite-4-h-small",
        "name": "Granite-4.0-H-Small",
        "description": "Open-weight hybrid model for enterprise chat, coding, retrieval-augmented generation, and tool-calling workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-oss-120b",
        "name": "GPT OSS 120B",
        "description": "Open GPT reasoning model for self-hosted agents and controllable deployments",
        "toolCall": true
      },
      {
        "id": "meta-llama/llama-4-maverick-17b-128e-instruct-fp8",
        "name": "Llama 4 Maverick 17B 128E Instruct FP8",
        "description": "Open multimodal Llama for strong reasoning with efficient everyday serving",
        "toolCall": true
      },
      {
        "id": "mistralai/mistral-small-3-1-24b-instruct-2503",
        "name": "Mistral Small 3.1 24B",
        "description": "Efficient multimodal model for instruction following, coding, reasoning, and function calling",
        "toolCall": true
      },
      {
        "id": "meta-llama/llama-3-3-70b-instruct",
        "name": "Llama-3.3-70B-Instruct",
        "description": "Popular open Llama workhorse for multilingual chat, coding, and self-hosting",
        "toolCall": true
      }
    ]
  },
  {
    "id": "xai",
    "name": "xAI",
    "npm": "@ai-sdk/xai",
    "api": null,
    "env": [
      "XAI_API_KEY"
    ],
    "models": [
      {
        "id": "grok-4.6",
        "name": "Grok 4.6",
        "description": "xAI's frontier model for long-running agents, coding, knowledge work, and visual projects",
        "toolCall": true
      },
      {
        "id": "grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "grok-4.3",
        "name": "Grok 4.3",
        "description": "xAI's Grok for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "grok-build-0.1",
        "name": "Grok Build 0.1",
        "description": "Fast Grok coding model tuned for agentic engineering and iterative edits",
        "toolCall": true
      },
      {
        "id": "grok-4.20-0309-non-reasoning",
        "name": "Grok 4.20 (Non-Reasoning)",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": true
      },
      {
        "id": "grok-4.20-0309-reasoning",
        "name": "Grok 4.20 (Reasoning)",
        "description": "Reasoning Grok for document-heavy analysis and long-horizon tool use",
        "toolCall": true
      },
      {
        "id": "grok-4.20-multi-agent-0309",
        "name": "Grok 4.20 Multi-Agent",
        "description": "Grok model for agentic tool use, reasoning, coding, and live assistance",
        "toolCall": false
      }
    ]
  },
  {
    "id": "xiaomi",
    "name": "Xiaomi",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.xiaomimimo.com/v1",
    "env": [
      "XIAOMI_API_KEY"
    ],
    "models": [
      {
        "id": "mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "description": "Earlier MiMo Pro model for multimodal agents, reasoning, and code tasks",
        "toolCall": true
      },
      {
        "id": "mimo-v2-omni",
        "name": "MiMo-V2-Omni",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "mimo-v2-flash",
        "name": "MiMo-V2-Flash",
        "description": "Legacy model retained for compatibility with older integrations",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5-pro-ultraspeed",
        "name": "MiMo-V2.5-Pro-UltraSpeed",
        "description": "MiMo pro model for strong multimodal reasoning and agent execution",
        "toolCall": true
      }
    ]
  },
  {
    "id": "xiaomi-token-plan-ams",
    "name": "Xiaomi Token Plan (Europe)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://token-plan-ams.xiaomimimo.com/v1",
    "env": [
      "XIAOMI_API_KEY"
    ],
    "models": [
      {
        "id": "mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "description": "Earlier MiMo Pro model for multimodal agents, reasoning, and code tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "xiaomi-token-plan-cn",
    "name": "Xiaomi Token Plan (China)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://token-plan-cn.xiaomimimo.com/v1",
    "env": [
      "XIAOMI_API_KEY"
    ],
    "models": [
      {
        "id": "mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "description": "Earlier MiMo Pro model for multimodal agents, reasoning, and code tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "xiaomi-token-plan-sgp",
    "name": "Xiaomi Token Plan (Singapore)",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://token-plan-sgp.xiaomimimo.com/v1",
    "env": [
      "XIAOMI_API_KEY"
    ],
    "models": [
      {
        "id": "mimo-v2.5-pro",
        "name": "MiMo-V2.5-Pro",
        "description": "Stronger MiMo Pro tier for multimodal reasoning and coding-agent execution",
        "toolCall": true
      },
      {
        "id": "mimo-v2.5",
        "name": "MiMo-V2.5",
        "description": "Open MiMo model for multimodal coding agents and long-context automation",
        "toolCall": true
      },
      {
        "id": "mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "description": "Earlier MiMo Pro model for multimodal agents, reasoning, and code tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "xpersona",
    "name": "Xpersona",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://www.xpersona.co/v1",
    "env": [
      "XPERSONA_API_KEY"
    ],
    "models": [
      {
        "id": "gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6",
        "name": "GPT-5.6",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "claude-fable-5",
        "name": "Claude Fable 5",
        "description": "Claude model for creative writing, analysis, and controlled agent workflows",
        "toolCall": true
      },
      {
        "id": "xpersona-gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "claude-opus-4-8",
        "name": "Claude Opus 4.8",
        "description": "Top Claude Opus tier for the hardest reasoning, coding, and long-horizon agents",
        "toolCall": true
      },
      {
        "id": "xpersona-frieren-coder",
        "name": "Xpersona Frieren 1",
        "description": "Coding model for repository understanding, refactors, and agentic engineering tasks",
        "toolCall": true
      },
      {
        "id": "gemini-3.5-flash",
        "name": "Gemini 3.5 Flash",
        "description": "Fast Gemini model balancing multimodal reasoning, tool use, and cost",
        "toolCall": true
      },
      {
        "id": "gpt-5.5",
        "name": "GPT-5.5",
        "description": "Default frontier GPT for coding, computer use, research, and knowledge work",
        "toolCall": true
      },
      {
        "id": "gpt-5.4-mini",
        "name": "GPT-5.4 mini",
        "description": "Strong small GPT for coding subagents, quick tool use, and high-volume work",
        "toolCall": true
      },
      {
        "id": "claude-sonnet-4-6",
        "name": "Claude Sonnet 4.6",
        "description": "Claude workhorse for coding agents, careful analysis, and production cost control",
        "toolCall": true
      },
      {
        "id": "gpt-5.4",
        "name": "GPT-5.4",
        "description": "Agent-ready GPT for coding and computer-use workflows at a lower cost",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zai",
    "name": "Z.AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.z.ai/api/paas/v4",
    "env": [
      "ZHIPU_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "glm-5v-turbo",
        "name": "GLM-5V-Turbo",
        "description": "Fast GLM vision model for screenshots, documents, and multimodal agent tasks",
        "toolCall": true
      },
      {
        "id": "glm-5-turbo",
        "name": "GLM-5-Turbo",
        "description": "Faster GLM-5 lane for coding agents that need lower latency",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "General GLM flagship for coding, analysis, and tool-heavy engineering workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7-flashx",
        "name": "GLM-4.7-FlashX",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7-flash",
        "name": "GLM-4.7-Flash",
        "description": "Budget GLM lane for fast coding help, routing, and everyday automation",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Mature GLM model for dependable coding, reasoning, and structured agent tasks",
        "toolCall": true
      },
      {
        "id": "glm-4.6v",
        "name": "GLM-4.6V",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "glm-4.6",
        "name": "GLM-4.6",
        "description": "Late GLM-4 workhorse for coding agents, reasoning, and structured tasks",
        "toolCall": true
      },
      {
        "id": "glm-4.5v",
        "name": "GLM-4.5V",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "glm-4.5-flash",
        "name": "GLM-4.5-Flash",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zai-coding-plan",
    "name": "Z.AI Coding Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.z.ai/api/coding/paas/v4",
    "env": [
      "ZHIPU_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.2-highspeed",
        "name": "GLM-5.2 Highspeed",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5-turbo",
        "name": "GLM-5-Turbo",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zeldoc",
    "name": "Zeldoc",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://api.zeldoc.ai/v1",
    "env": [
      "ZELDOC_API_KEY"
    ],
    "models": [
      {
        "id": "zdev",
        "name": "ZDev",
        "description": "Coding model for repository understanding, refactors, and agentic engineering tasks",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zenifra",
    "name": "Zenifra",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://ai.zenifra.com/v1",
    "env": [
      "ZENIFRA_AI_KEY"
    ],
    "models": [
      {
        "id": "alibaba/qwen3.6-35b-a3b",
        "name": "Qwen3.6 35B-A3B",
        "description": "Open multimodal Qwen MoE for local agents that need vision, audio, and code",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zenmux",
    "name": "ZenMux",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://zenmux.ai/api/v1",
    "env": [
      "ZENMUX_API_KEY"
    ],
    "models": [
      {
        "id": "moonshotai/kimi-k3-free",
        "name": "Kimi K3 (Free)",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k3",
        "name": "Kimi K3",
        "description": "Multimodal Kimi model with 1M context and toggleable max-effort thinking for long-horizon agent work",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-sol",
        "name": "GPT-5.6 Sol",
        "description": "Frontier GPT-5.6 model for complex professional work, coding, and agentic workflows",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-luna",
        "name": "GPT-5.6 Luna",
        "description": "Cost-efficient GPT-5.6 model for fast, high-volume workloads",
        "toolCall": true
      },
      {
        "id": "openai/gpt-5.6-terra",
        "name": "GPT-5.6 Terra",
        "description": "Balanced GPT-5.6 model for capable, cost-efficient everyday work",
        "toolCall": true
      },
      {
        "id": "x-ai/grok-4.5",
        "name": "Grok 4.5",
        "description": "xAI's Grok model for chat, coding, agentic tools, and lower hallucination risk",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-5",
        "name": "Claude Sonnet 5",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "anthropic/claude-sonnet-5-free",
        "name": "Claude Sonnet 5 (Free)",
        "description": "Everyday Claude agent model for coding, planning, browsing, and general work",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.2-free",
        "name": "GLM 5.2 (Free)",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "z-ai/glm-5.2",
        "name": "GLM 5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code",
        "name": "Kimi K2.7 Code",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      },
      {
        "id": "moonshotai/kimi-k2.7-code-free",
        "name": "Kimi K2.7 Code (Free)",
        "description": "Coding-focused Kimi model, stronger on long-horizon repo work with less overthinking",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zhipuai",
    "name": "Zhipu AI",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://open.bigmodel.cn/api/paas/v4",
    "env": [
      "ZHIPU_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5v-turbo",
        "name": "GLM-5V-Turbo",
        "description": "Fast GLM vision model for screenshots, documents, and multimodal agent tasks",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Strong GLM coding model for agentic engineering, terminals, and repository generation",
        "toolCall": true
      },
      {
        "id": "glm-5",
        "name": "GLM-5",
        "description": "General GLM flagship for coding, analysis, and tool-heavy engineering workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7-flash",
        "name": "GLM-4.7-Flash",
        "description": "Budget GLM lane for fast coding help, routing, and everyday automation",
        "toolCall": true
      },
      {
        "id": "glm-4.7-flashx",
        "name": "GLM-4.7-FlashX",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Mature GLM model for dependable coding, reasoning, and structured agent tasks",
        "toolCall": true
      },
      {
        "id": "glm-4.6v",
        "name": "GLM-4.6V",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "glm-4.6",
        "name": "GLM-4.6",
        "description": "Late GLM-4 workhorse for coding agents, reasoning, and structured tasks",
        "toolCall": true
      },
      {
        "id": "glm-4.5v",
        "name": "GLM-4.5V",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "glm-4.5",
        "name": "GLM-4.5",
        "description": "Hybrid-reasoning GLM release that made the 4.5 line broadly useful",
        "toolCall": true
      },
      {
        "id": "glm-4.5-air",
        "name": "GLM-4.5-Air",
        "description": "Lighter GLM-4.5 variant for fast coding assistance and cheaper agents",
        "toolCall": true
      }
    ]
  },
  {
    "id": "zhipuai-coding-plan",
    "name": "Zhipu AI Coding Plan",
    "npm": "@ai-sdk/openai-compatible",
    "api": "https://open.bigmodel.cn/api/coding/paas/v4",
    "env": [
      "ZHIPU_API_KEY"
    ],
    "models": [
      {
        "id": "glm-5.3",
        "name": "GLM-5.3",
        "description": "Flagship GLM model for long-horizon coding, agents, and complex project delivery",
        "toolCall": true
      },
      {
        "id": "glm-5.2-highspeed",
        "name": "GLM-5.2 Highspeed",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5.2",
        "name": "GLM-5.2",
        "description": "Open flagship GLM for long-horizon coding agents and million-token context work",
        "toolCall": true
      },
      {
        "id": "glm-5v-turbo",
        "name": "GLM-5V-Turbo",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      },
      {
        "id": "glm-5.1",
        "name": "GLM-5.1",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-5-turbo",
        "name": "GLM-5-Turbo",
        "description": "Efficient GLM model for fast reasoning, coding, and agent workflows",
        "toolCall": true
      },
      {
        "id": "glm-4.7",
        "name": "GLM-4.7",
        "description": "Flagship GLM model for hybrid reasoning, coding, and agentic engineering",
        "toolCall": true
      },
      {
        "id": "glm-4.6v",
        "name": "GLM-4.6V",
        "description": "GLM vision model for visual reasoning, documents, and multimodal agents",
        "toolCall": true
      }
    ]
  }
];
