"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { domains, projects, type Project } from "@/content/site";

type SearchEntry = {
  id: string;
  type: "brief" | "section";
  title: string;
  description: string;
  meta: string;
  accent: string;
  keywords: string;
  href?: string;
  project?: Project;
};

const sectionEntries: SearchEntry[] = [
  {
    id: "section-work",
    type: "section",
    title: "Selected work",
    description: "24 project briefs, ordered by relevance to research and security teams.",
    meta: "SECTION",
    accent: "#ff6b4a",
    keywords: "work projects portfolio systems fraud retrieval vision federated",
    href: "#work",
  },
  {
    id: "section-experience",
    type: "section",
    title: "Experience",
    description: "Research AI Engineer at NPCI · M.Tech at IIIT Hyderabad · Infosys.",
    meta: "SECTION",
    accent: "#c8f751",
    keywords: "experience research engineer npci infosys iiit hyderabad career job",
    href: "#experience",
  },
  {
    id: "section-skills",
    type: "section",
    title: "Skills",
    description: "PyTorch, retrieval, federated learning, evaluation and systems.",
    meta: "SECTION",
    accent: "#5eead4",
    keywords: "skills stack pytorch python c++ retrieval rag federated llm evaluation systems",
    href: "#skills",
  },
  {
    id: "section-about",
    type: "section",
    title: "About",
    description: "The research path, the production constraints, and the short version.",
    meta: "SECTION",
    accent: "#a78bfa",
    keywords: "about bio story background iiit infosys gate pgee",
    href: "#about",
  },
  {
    id: "section-contact",
    type: "section",
    title: "Contact",
    description: "Email, GitHub, LinkedIn and Codolio.",
    meta: "SECTION",
    accent: "#fbbf24",
    keywords: "contact email hire reach github linkedin codolio",
    href: "#contact",
  },
];

const projectEntries: SearchEntry[] = projects.map((project) => {
  const domain = domains.find((item) => item.key === project.domain);
  return {
    id: `brief-${project.slug}`,
    type: "brief",
    title: project.title,
    description: project.subtitle,
    meta: project.stack.slice(0, 3).join(" · "),
    accent: domain?.color ?? "#c8f751",
    keywords: [
      project.title,
      project.subtitle,
      project.tags.join(" "),
      project.stack.join(" "),
      project.summary ?? "",
      project.details.join(" "),
    ].join(" "),
    project,
  };
});

const entries = [...projectEntries, ...sectionEntries];

const suggestions = [
  "document forensics",
  "retrieval",
  "federated learning",
  "LLM",
  "fraud",
  "PyTorch",
];

function scoreEntry(entry: SearchEntry, terms: string[]) {
  const title = entry.title.toLowerCase();
  const description = entry.description.toLowerCase();
  const keywords = entry.keywords.toLowerCase();
  const phrase = terms.join(" ");
  let score = 0;

  if (title.includes(phrase)) score += 14;
  if (keywords.includes(phrase)) score += 8;

  for (const term of terms) {
    if (title.includes(term)) score += 9;
    if (description.includes(term)) score += 2;
    if (keywords.includes(term)) score += 4;
  }

  return score;
}

export function AskMyWork() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const terms = query
      .toLowerCase()
      .split(/\s+/)
      .map((term) => term.trim())
      .filter(Boolean);

    if (terms.length === 0) return [];

    return entries
      .map((entry) => ({ entry, score: scoreEntry(entry, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 6)
      .map((item) => item.entry);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function openEntry(entry: SearchEntry) {
    if (entry.project) {
      window.dispatchEvent(
        new CustomEvent("open-project-brief", { detail: entry.project.slug }),
      );
    } else if (entry.href) {
      document
        .querySelector(entry.href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", entry.href);
    }
    setOpen(false);
    setQuery("");
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const top = results[activeIndex] ?? results[0];
    if (top) openEntry(top);
    else setOpen(true);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter" && open && results.length > 0) {
      event.preventDefault();
      openEntry(results[activeIndex] ?? results[0]);
    }
  }

  return (
    <div ref={rootRef} className="relative z-30 mt-8 max-w-[34rem]">
      <form onSubmit={onSubmit}>
        <div className="mx-auto flex items-center gap-2 rounded-full border border-line-2 bg-panel/55 py-1.5 pl-4 pr-1.5 backdrop-blur-md transition-colors focus-within:border-lime/40 hover:border-line-2 hover:bg-panel/75">
          <Search className="size-3.5 shrink-0 text-faint" strokeWidth={1.6} />
          <input
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder="Ask my work anything…"
            aria-label="Ask my work anything"
            role="combobox"
            aria-autocomplete="list"
            aria-controls="ask-my-work-results"
            aria-expanded={open}
            className="h-8 min-w-0 flex-1 border-none bg-transparent text-[12px] text-chalk placeholder:text-faint focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search my work"
            className="grid size-8 shrink-0 place-items-center rounded-full bg-lime text-on-accent transition-colors hover:bg-lime-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </button>
        </div>
      </form>

      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
        Local search · 24 briefs · no API calls
      </p>

      {open ? (
        <div
          id="ask-my-work-results"
          className="enter absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-line-2 bg-panel/95 shadow-2xl backdrop-blur-xl"
        >
          {query.trim().length === 0 ? (
            <div className="p-4">
              <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                <Sparkles className="size-3 text-lime" strokeWidth={1.6} />
                Try a topic
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      setQuery(suggestion);
                      setActiveIndex(0);
                      setOpen(true);
                    }}
                    className="rounded-full border border-line bg-ink/60 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-dim transition-colors hover:border-line-2 hover:text-chalk"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                <span>{results.length} matches</span>
                <span>Briefs + sections</span>
              </div>
              <div className="max-h-[21rem] overflow-y-auto p-1.5">
                {results.map((entry, index) => (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => openEntry(entry)}
                    onPointerEnter={() => setActiveIndex(index)}
                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      index === activeIndex ? "bg-panel-2" : "hover:bg-panel-2"
                    }`}
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full"
                      style={{
                        background: entry.accent,
                        boxShadow: `0 0 8px ${entry.accent}`,
                      }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-[12px] text-chalk">
                          {entry.title}
                        </span>
                        <span className="shrink-0 font-mono text-[7px] uppercase tracking-[0.12em] text-faint">
                          {entry.type}
                        </span>
                      </span>
                      <span className="mt-0.5 block truncate font-mono text-[8px] uppercase tracking-[0.06em] text-faint">
                        {entry.meta}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 size-3 shrink-0 text-faint"
                      strokeWidth={1.6}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 text-[11px] leading-relaxed text-dim">
              No matching brief. Try{" "}
              <span className="text-chalk">fraud</span>,{" "}
              <span className="text-chalk">RAG</span>,{" "}
              <span className="text-chalk">federated</span> or{" "}
              <span className="text-chalk">PyTorch</span>.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
