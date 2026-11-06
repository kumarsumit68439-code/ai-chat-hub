"use client";

import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant" | "system";
  content: string;
  isStreaming?: boolean;
  model?: string;
}

export default function ChatMessage({ role, content, isStreaming, model }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`message-enter flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
          <Bot className="w-4 h-4 text-cyan-400" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-cyan-600/20 border border-cyan-500/30 text-cyan-50"
            : "bg-[#0B0F19] border border-white/[0.08] text-slate-200"
        }`}
      >
        {!isUser && model && (
          <div className="text-[10px] font-mono text-cyan-400/70 mb-1.5 uppercase tracking-wider">
            {model}
          </div>
        )}
        <div className={`whitespace-pre-wrap break-words ${isStreaming ? "cursor-blink" : ""}`}>
          {content || (isStreaming ? "" : "...")}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-700/50 border border-white/10 flex items-center justify-center">
          <User className="w-4 h-4 text-slate-300" />
        </div>
      )}
    </div>
  );
}