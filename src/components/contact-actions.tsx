"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function ContactActions({
  email,
  github,
  linkedin,
  codolio,
}: {
  email: string;
  github: string;
  linkedin: string;
  codolio: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="mt-7">
      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href={`mailto:${email}?subject=Hello%20Shivendra`}
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-lime px-5 text-[13px] font-medium text-on-accent transition-colors hover:bg-lime-dim"
        >
          <Mail className="size-4" strokeWidth={1.8} />
          Say hello
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line-2 bg-panel/50 px-4 text-[13px] text-chalk transition-colors hover:border-faint hover:bg-panel"
        >
          <LinkedinIcon className="size-4 text-lime" strokeWidth={1.7} />
          LinkedIn
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line-2 bg-panel/50 px-4 text-[13px] text-chalk transition-colors hover:border-faint hover:bg-panel"
        >
          <GithubIcon className="size-4 text-lime" strokeWidth={1.7} />
          GitHub
        </a>

        <a
          href={codolio}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line-2 bg-panel/50 px-4 text-[13px] text-chalk transition-colors hover:border-faint hover:bg-panel"
        >
          <Code2 className="size-4 text-lime" strokeWidth={1.7} />
          Codolio
        </a>
      </div>

      <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-panel/40 py-1.5 pl-3 pr-1.5">
        <span className="truncate font-mono text-[10px] tracking-[0.02em] text-dim">
          {email}
        </span>
        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="grid size-7 shrink-0 place-items-center rounded-full text-faint transition-colors hover:bg-panel-2 hover:text-lime"
        >
          {copied ? (
            <Check className="size-3.5 text-mint" strokeWidth={2} />
          ) : (
            <Copy className="size-3.5" strokeWidth={1.7} />
          )}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </div>
    </div>
  );
}
