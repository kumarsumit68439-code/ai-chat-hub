export type Provider =
  | "gemini"
  | "groq"
  | "openrouter"
  | "huggingface"
  | "openai"
  | "xai"
  | "kimi";

export interface ModelOption {
  id: string;
  name: string;
  free?: boolean;
}

export interface ProviderConfig {
  id: Provider;
  name: string;
  color: string;
  models: ModelOption[];
}

export const PROVIDERS: ProviderConfig[] = [
  {
    id: "gemini",
    name: "Google Gemini",
    color: "#38bdf8",
    models: [
      { id: "gemini-3.8-flash", name: "Gemini 3.8 Flash (Fast Reasoning)", free: true },
      { id: "gemini-3.1-flash-lite", name: "Gemini 3.1 Flash Lite (Ultra Fast)", free: true },
      { id: "gemini-4-argon", name: "Gemini 4 Argon (Complex STEM)", free: true },
    ],
  },
  {
    id: "groq",
    name: "Groq Cloud",
    color: "#f97316",
    models: [
      { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B Versatile", free: true },
      { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B Instant", free: true },
      { id: "deepseek-r1-distill-llama-70b", name: "DeepSeek R1 Distill Llama 70B", free: true },
      { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B", free: true },
      { id: "gemma2-9b-it", name: "Gemma 2 9B IT", free: true },
    ],
  },
  {
    id: "openrouter",
    name: "OpenRouter (Free)",
    color: "#a855f7",
    models: [
      { id: "meta-llama/llama-3.3-70b-instruct:free", name: "Llama 3.3 70B Instruct", free: true },
      { id: "deepseek/deepseek-r1:free", name: "DeepSeek R1", free: true },
      { id: "deepseek/deepseek-chat:free", name: "DeepSeek Chat", free: true },
      { id: "qwen/qwen-2.5-72b-instruct:free", name: "Qwen 2.5 72B Instruct", free: true },
      { id: "mistralai/mistral-7b-instruct:free", name: "Mistral 7B Instruct", free: true },
    ],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    color: "#eab308",
    models: [
      { id: "meta-llama/Llama-3.2-3B-Instruct", name: "Llama 3.2 3B Instruct", free: true },
      { id: "mistralai/Mistral-7B-Instruct-v0.3", name: "Mistral 7B Instruct v0.3", free: true },
      { id: "Qwen/Qwen2.5-72B-Instruct", name: "Qwen 2.5 72B Instruct", free: true },
      { id: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B", name: "DeepSeek R1 Distill Qwen 32B", free: true },
    ],
  },
  {
    id: "openai",
    name: "OpenAI / ChatGPT",
    color: "#10b981",
    models: [
      { id: "gpt-4o-mini", name: "GPT-4o Mini" },
      { id: "gpt-4o", name: "GPT-4o" },
    ],
  },
  {
    id: "xai",
    name: "xAI (Grok)",
    color: "#94a3b8",
    models: [
      { id: "grok-2-latest", name: "Grok 2 Latest" },
      { id: "grok-beta", name: "Grok Beta" },
    ],
  },
  {
    id: "kimi",
    name: "Kimi (Moonshot)",
    color: "#06b6d4",
    models: [
      { id: "moonshot-v1-8k", name: "Moonshot v1 8K" },
      { id: "moonshot-v1-32k", name: "Moonshot v1 32K" },
    ],
  },
];

export function getProvider(id: Provider) {
  return PROVIDERS.find((p) => p.id === id);
}

export function getDefaultModel(provider: Provider) {
  return PROVIDERS.find((p) => p.id === provider)?.models[0]?.id || "gemini-3.8-flash";
}