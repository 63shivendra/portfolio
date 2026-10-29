"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-9 items-center gap-2 rounded-full bg-lime px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-on-accent transition-colors hover:bg-lime-dim"
    >
      <Printer className="size-3.5" strokeWidth={1.8} />
      Print / Save PDF
    </button>
  );
}
