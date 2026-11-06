"use client";

import { PROVIDERS, Provider, getProvider } from "@/lib/models";
import { ChevronDown } from "lucide-react";

interface ModelSelectorProps {
  provider: Provider;
  model: string;
  onProviderChange: (p: Provider) => void;
  onModelChange: (m: string) => void;
  disabled?: boolean;
}

export default function ModelSelector({
  provider,
  model,
  onProviderChange,
  onModelChange,
  disabled,
}: ModelSelectorProps) {
  const currentProvider = getProvider(provider);

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {/* Provider Select */}
      <div className="relative">
        <select
          value={provider}
          onChange={(e) => {
            const p = e.target.value as Provider;
            onProviderChange(p);
            const firstModel = getProvider(p)?.models[0]?.id;
            if (firstModel) onModelChange(firstModel);
          }}
          disabled={disabled}
          className="appearance-none w-full sm:w-auto min-w-[160px] bg-[#070A12] border border-white/10 text-slate-200 text-xs font-medium rounded-xl px-3.5 py-2.5 pr-8 outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 disabled:opacity-50 cursor-pointer"
        >
          {PROVIDERS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
      </div>

      {/* Model Select */}
      <div className="relative flex-1">
        <select
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
          disabled={disabled}
          className="appearance-none w-full bg-[#070A12] border border-white/10 text-slate-200 text-xs font-medium rounded-xl px-3.5 py-2.5 pr-8 outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/50 disabled:opacity-50 cursor-pointer"
        >
          {currentProvider?.models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} {m.free ? "· Free" : ""}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}