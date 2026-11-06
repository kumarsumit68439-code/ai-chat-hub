# AI Chat Hub

Modern multi-provider AI chat application powered by **Unified AI Hub** endpoints.

Supports **all providers and models**:

| Provider | Models |
|----------|--------|
| **Google Gemini** | `gemini-3.8-flash`, `gemini-3.1-flash-lite`, `gemini-4-argon` |
| **Groq** | `llama-3.3-70b-versatile`, `llama-3.1-8b-instant`, `deepseek-r1-distill-llama-70b`, `mixtral-8x7b-32768`, `gemma2-9b-it` |
| **OpenRouter** | `meta-llama/llama-3.3-70b-instruct:free`, `deepseek/deepseek-r1:free`, `deepseek/deepseek-chat:free`, `qwen/qwen-2.5-72b-instruct:free`, `mistralai/mistral-7b-instruct:free` |
| **Hugging Face** | `meta-llama/Llama-3.2-3B-Instruct`, `mistralai/Mistral-7B-Instruct-v0.3`, `Qwen/Qwen2.5-72B-Instruct`, `deepseek-ai/DeepSeek-R1-Distill-Qwen-32B` |
| **OpenAI** | `gpt-4o-mini`, `gpt-4o` |
| **xAI (Grok)** | `grok-2-latest`, `grok-beta` |
| **Kimi (Moonshot)** | `moonshot-v1-8k`, `moonshot-v1-32k` |

## Features

- Beautiful dark UI
- Real-time streaming responses
- Provider + Model selector
- Conversation history
- Mobile responsive
- Ready for Vercel one-click deploy

## Quick Start (Vercel)

1. **Import this repository** into [Vercel](https://vercel.com/new)
2. Add Environment Variables in Vercel Project Settings → Environment Variables:

| Name | Value |
|------|-------|
| `API_HUB_KEY` | `ah_live_eKM47YA_YlEJCg7ib9uMDJx3` (or your own key) |
| `NEXT_PUBLIC_API_BASE_URL` | Your Unified AI Hub domain (e.g. `https://your-domain.com`) |

3. Deploy

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your API_HUB_KEY and NEXT_PUBLIC_API_BASE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## API Endpoint Used

```
POST {NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/completions
Authorization: Bearer {API_HUB_KEY}
```

Body example:
```json
{
  "provider": "gemini",
  "model": "gemini-3.8-flash",
  "messages": [{"role": "user", "content": "Hello"}],
  "stream": true
}
```

## License

MIT
