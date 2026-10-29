"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import {
  domains,
  projects,
  projectsByDomain,
  type DomainKey,
  type Project,
} from "@/content/site";
import { ProjectBrief } from "@/components/project-brief";
import { ProjectGlyph } from "@/components/project-glyph";
import { ProjectVisual } from "@/components/project-visual";
import { Spotlight } from "@/components/spotlight";

function DomainTag({
  domain,
  className = "",
}: {
  domain: DomainKey;
  className?: string;
}) {
  const meta = domains.find((item) => item.key === domain)!;

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] ${className}`}
      style={{ color: meta.color }}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}88` }}
      />
      {meta.label}
    </span>
  );
}

function domainAccent(domain: DomainKey) {
  return domains.find((item) => item.key === domain)?.color ?? "#c8f751";
}

const signalBars = [0.42, 0.68, 0.5, 0.86, 0.6];

/**
 * A small, domain-coloured telemetry rail. Every project gets one so the work
 * grid feels alive without mounting a canvas or shipping a video per card.
 */
function ProjectSignal({ accent, seed }: { accent: string; seed: number }) {
  return (
    <div
      aria-hidden="true"
      className="project-signal"
      style={
        {
          "--signal-accent": accent,
          "--signal-delay": `${(seed % 6) * -0.4}s`,
        } as CSSProperties
      }
    >
      <span className="project-signal-rail" />
      <span className="project-signal-sweep" />
      <span className="project-signal-bars">
        {signalBars.map((height, index) => (
          <span
            key={index}
            style={{
              height: `${Math.round(height * 100)}%`,
              animationDelay: `${(index * 0.13 + (seed % 5) * 0.09).toFixed(2)}s`,
            }}
          />
        ))}
      </span>
      <span className="project-signal-dot" />
    </div>
  );
}

function WideCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const accent = domainAccent(project.domain);

  return (
    <Spotlight
      id={project.slug}
      data-project-card
      data-project-wide={project.slug}
      className="enter scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-panel/30 transition-colors duration-200 hover:border-line-2 lg:col-span-2"
    >
      <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
        <div className="flex flex-col p-6 sm:p-8 lg:p-9">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <DomainTag domain={project.domain} />
            <span className="h-px w-4 bg-line-2" />
            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
              {project.year}
            </span>
          </div>

          <h4 className="mt-4 text-[22px] font-medium tracking-[-0.035em] text-chalk sm:text-[26px]">
            {project.title}
          </h4>
          <p className="mt-1.5 max-w-md text-[14px] leading-snug text-chalk">
            {project.subtitle}
          </p>
          <p
            className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            {project.hook}
          </p>
          <p className="mt-2.5 max-w-lg text-[12.5px] leading-[1.75] text-dim">
            {project.summary}
          </p>

          <ProjectSignal accent={accent} seed={index} />

          {project.stats ? (
            <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-ink px-3 py-2.5">
                  <div className="text-[13px] font-medium tracking-tight text-chalk">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-faint">
                    {stat.label}
                  </div>
                  <div className="mt-1 hidden font-mono text-[7px] leading-relaxed text-dim sm:block">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-dim"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-chalk transition-colors hover:border-line-2 hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <Maximize2 className="size-3" strokeWidth={1.6} />
              Open brief
            </button>
            {project.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-chalk transition-colors hover:text-lime"
              >
                {index === 0 ? (
                  <GithubIcon className="size-3.5" strokeWidth={1.6} />
                ) : null}
                {link.label}
                <ArrowUpRight className="size-3 text-faint" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        {project.visual ? (
          <div className="relative min-h-[300px] border-t border-line lg:border-l lg:border-t-0">
            <ProjectVisual kind={project.visual} />
          </div>
        ) : null}
      </div>
    </Spotlight>
  );
}

function CompactCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const href = project.links[0]?.href;
  const accent = domainAccent(project.domain);

  return (
    <article
      id={project.slug}
      data-project-card
      className="enter group flex scroll-mt-24 flex-col rounded-xl border border-line bg-panel/20 p-5 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-2 hover:bg-panel/60"
      style={{ animationDelay: `${Math.min(index, 8) * 26}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <DomainTag domain={project.domain} />
        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
          {project.year}
        </span>
      </div>

      <ProjectGlyph
        kind={project.glyph}
        accent={accent}
        title={project.title}
        className="mt-4"
      />

      <h4 className="mt-3 text-[15px] font-medium tracking-[-0.01em] text-chalk">
        {project.title}
      </h4>
      <p className="mt-1.5 text-[12px] leading-relaxed text-dim">
        {project.subtitle}
      </p>
      {project.summary ? (
        <p
          className="mt-2.5 line-clamp-2 text-[11px] leading-relaxed text-faint"
          title={project.summary}
        >
          {project.summary}
        </p>
      ) : null}

      {project.metric ? (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-[17px] font-medium tracking-[-0.02em] text-chalk">
            {project.metric.value}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
            {project.metric.label}
          </span>
        </div>
      ) : null}

      <div className="mt-auto pt-5">
        <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
          {project.tags.join(" · ")}
        </span>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-chalk transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <Maximize2 className="size-3" strokeWidth={1.6} />
            Open brief
          </button>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} repository on GitHub`}
              className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <GithubIcon className="size-3" strokeWidth={1.7} />
              Repo
              <ArrowUpRight className="size-2.5" strokeWidth={1.6} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState<"all" | DomainKey>("all");
  const [brief, setBrief] = useState<Project | null>(null);
  const closeBrief = useCallback(() => setBrief(null), []);

  useEffect(() => {
    const onOpenProject = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      const project = projects.find((item) => item.slug === slug);
      if (project) setBrief(project);
    };

    window.addEventListener("open-project-brief", onOpenProject);
    return () => window.removeEventListener("open-project-brief", onOpenProject);
  }, []);

  const groups =
    active === "all"
      ? projectsByDomain
      : projectsByDomain.filter((group) => group.key === active);

  return (
    <div>
      <div
        data-reveal
        className="-mx-6 flex flex-nowrap gap-1.5 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`inline-flex h-8 shrink-0 items-center gap-2 rounded-full border px-3.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
            active === "all"
              ? "border-lime/40 bg-lime/10 text-chalk"
              : "border-line text-dim hover:border-line-2 hover:text-chalk"
          }`}
        >
          All
          <span className="text-[8px] text-faint">{projects.length}</span>
        </button>

        {domains.map((domain) => {
          const isActive = active === domain.key;
          return (
            <button
              key={domain.key}
              type="button"
              onClick={() => setActive(domain.key)}
              aria-pressed={isActive}
              className={`inline-flex h-8 shrink-0 items-center gap-2 rounded-full border px-3.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                isActive
                  ? "text-chalk"
                  : "border-line text-dim hover:border-line-2 hover:text-chalk"
              }`}
              style={
                isActive
                  ? {
                      borderColor: `${domain.color}66`,
                      background: `${domain.color}14`,
                    }
                  : undefined
              }
            >
              <span
                className="size-1.5 rounded-full"
                style={{
                  background: domain.color,
                  boxShadow: isActive ? `0 0 8px ${domain.color}` : undefined,
                }}
              />
              {domain.short}
            </button>
          );
        })}
      </div>

      <div key={active} className="mt-10 space-y-14">
        {groups.map((group) => (
          <div key={group.key}>
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
              <div>
                <div
                  className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: group.color }}
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{
                      background: group.color,
                      boxShadow: `0 0 10px ${group.color}aa`,
                    }}
                  />
                  {group.projects.length}{" "}
                  {group.projects.length === 1 ? "project" : "projects"}
                </div>
                <h3 className="mt-2 text-[19px] font-medium tracking-[-0.02em] text-chalk">
                  {group.label}
                </h3>
              </div>
              <p className="max-w-sm text-[11.5px] leading-relaxed text-faint sm:text-right">
                {group.note}
              </p>
            </div>

            <div className="mt-5 grid gap-3.5 lg:grid-cols-2">
              {group.projects.map((project, index) =>
                project.wide ? (
                  <WideCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onOpen={() => setBrief(project)}
                  />
                ) : (
                  <CompactCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onOpen={() => setBrief(project)}
                  />
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          Ordered by relevance to AI systems, research &amp; security roles
        </p>
        <a
          href="https://github.com/63shivendra"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-lime"
        >
          All repositories
          <ArrowUpRight className="size-3" strokeWidth={1.6} />
        </a>
      </div>

      <ProjectBrief project={brief} onClose={closeBrief} />
    </div>
  );
}
