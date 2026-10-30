"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Eye,
  LayoutGrid,
  Maximize2,
  MessageCircle,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import {
  domains,
  projects,
  projectsByDomain,
  type DomainIcon,
  type DomainKey,
  type Project,
} from "@/content/site";
import { ProjectArt } from "@/components/project-art";
import { ProjectBrief } from "@/components/project-brief";
import { getProjectVisual } from "@/content/project-visuals";

const domainIcons: Record<DomainIcon, LucideIcon> = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  search: Search,
  eye: Eye,
  privacy: Network,
  language: MessageCircle,
  terminal: Terminal,
};

function domainMeta(domain: DomainKey) {
  return domains.find((item) => item.key === domain) ?? domains[0];
}

function CategoryMark({
  domain,
  size = "sm",
}: {
  domain: DomainKey;
  size?: "sm" | "lg";
}) {
  const meta = domainMeta(domain);
  const Icon = domainIcons[meta.icon];

  return (
    <span
      aria-hidden="true"
      className={`category-mark ${size === "lg" ? "category-mark--lg" : ""}`}
      style={{ "--cat": meta.color } as CSSProperties}
    >
      <Icon strokeWidth={1.5} />
    </span>
  );
}

function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <div className="project-stack-top" data-project-stack>
      <span className="project-stack-label">Stack</span>
      <div className="project-stack-chips">
        {stack.map((item) => (
          <span key={item} className="project-stack-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  lead = false,
  onOpen,
}: {
  project: Project;
  index: number;
  lead?: boolean;
  onOpen: () => void;
}) {
  const meta = domainMeta(project.domain);
  const visual = getProjectVisual(project.slug);
  const Icon = visual.icon;

  if (lead) {
    return (
      <article
        id={project.slug}
        data-project-card
        data-project-lead
        className="project-card project-card--lead enter scroll-mt-24"
        style={{ "--cat": meta.color, "--project": visual.accent, "--reveal-delay": `${index * 40}ms` } as CSSProperties}
      >
        <div className="project-card-copy">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="project-cat-label" style={{ color: meta.color }}>
              <span className="size-1.5 rounded-full" style={{ background: meta.color, boxShadow: `0 0 10px ${meta.color}` }} />
              {meta.label}
            </span>
            <span className="h-px w-4 bg-line-2" />
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">{project.year}</span>
            <span className="lead-badge">Lead case study</span>
          </div>

          <ProjectStack stack={project.stack} />

          <div className="project-title-row mt-4">
            <span className="project-icon project-icon--lg" data-project-icon={project.slug} aria-hidden="true">
              <Icon strokeWidth={1.45} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.02] font-medium tracking-[-0.04em] text-chalk">
                {project.title}
              </h3>
              <p className="mt-2 max-w-lg text-[14px] leading-snug text-chalk/90">{project.subtitle}</p>
            </div>
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: visual.accent }}>
            {project.hook}
          </p>
          <p className="mt-3 max-w-xl text-[12.5px] leading-[1.75] text-dim">{project.summary}</p>

          {project.stats ? (
            <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-ink/80 px-3 py-2.5">
                  <div className="text-[13px] font-medium tracking-tight text-chalk">{stat.value}</div>
                  <div className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-faint">{stat.label}</div>
                  <div className="mt-1 hidden font-mono text-[7px] leading-relaxed text-dim sm:block">{stat.note}</div>
                </div>
              ))}
            </div>
          ) : project.metric ? (
            <div className="mt-5 inline-flex flex-wrap items-baseline gap-x-2 rounded-full border border-line bg-panel/50 px-3.5 py-2">
              <span className="font-mono text-[15px] tracking-tight text-chalk">{project.metric.value}</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-faint">{project.metric.label}</span>
            </div>
          ) : null}

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-chalk transition-colors hover:border-line-2 hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <Maximize2 className="size-3" strokeWidth={1.6} />
              Open brief
            </button>
            {project.links.slice(0, 1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-chalk transition-colors hover:text-lime"
              >
                <GithubIcon className="size-3.5" strokeWidth={1.6} />
                Repository
                <ArrowUpRight className="size-3 text-faint" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div className="project-card-art">
          <ProjectArt project={project} size="wide" />
        </div>
      </article>
    );
  }

  const href = project.links[0]?.href;

  return (
    <article
      id={project.slug}
      data-project-card
      className="project-card enter scroll-mt-24"
      style={{ "--cat": meta.color, "--project": visual.accent, "--reveal-delay": `${Math.min(index, 6) * 30}ms` } as CSSProperties}
    >
      <div className="project-card-stackbar">
        <span className="project-icon" data-project-icon={project.slug} aria-hidden="true">
          <Icon strokeWidth={1.5} />
        </span>
        <ProjectStack stack={project.stack} />
      </div>
      <ProjectArt project={project} />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="project-title-row">
          <div className="min-w-0">
            <span className="project-cat-label" style={{ color: meta.color }}>
              <span className="size-1.5 rounded-full" style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}88` }} />
              {meta.short}
            </span>
            <h4 className="mt-2 text-[15px] font-medium tracking-[-0.015em] text-chalk">{project.title}</h4>
          </div>
          <span className="ml-auto shrink-0 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">{project.year}</span>
        </div>

        <p className="mt-1.5 text-[12px] leading-relaxed text-dim">{project.subtitle}</p>
        <p className="mt-2.5 line-clamp-2 text-[11px] leading-relaxed text-faint" title={project.summary}>
          {project.summary}
        </p>

        {project.metric ? (
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-[17px] font-medium tracking-[-0.02em] text-chalk">{project.metric.value}</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-faint">{project.metric.label}</span>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
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

  const groups = active === "all" ? projectsByDomain : projectsByDomain.filter((group) => group.key === active);
  const count = active === "all" ? projects.length : groups[0]?.projects.length ?? 0;

  return (
    <div>
      <div data-reveal className="work-filter-head">
        <div>
          <div className="eyebrow">Choose a lane</div>
          <p className="mt-1 text-[12px] text-dim">
            Seven categories. Every lead card is a full case study; every compact card opens the same brief.
          </p>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          Showing {count} / {projects.length}
        </span>
      </div>

      <div data-reveal className="category-map mt-5">
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`category-tile category-tile--all ${active === "all" ? "is-active" : ""}`}
        >
          <span className="category-tile-icon">
            <LayoutGrid className="size-5" strokeWidth={1.5} />
          </span>
          <span className="category-tile-top">
            <span className="category-tile-label">All work</span>
            <span className="category-tile-count">{projects.length}</span>
          </span>
          <span className="category-tile-note">One catalog, ordered by hiring signal.</span>
        </button>

        {domains.map((domain) => {
          const isActive = active === domain.key;
          return (
            <button
              key={domain.key}
              type="button"
              onClick={() => setActive(domain.key)}
              aria-pressed={isActive}
              className={`category-tile ${isActive ? "is-active" : ""}`}
              style={{ "--cat": domain.color } as CSSProperties}
            >
              <span className="category-tile-icon">
                {(() => {
                  const Icon = domainIcons[domain.icon];
                  return <Icon className="size-5" strokeWidth={1.5} />;
                })()}
              </span>
              <span className="category-tile-top">
                <span className="category-tile-label">{domain.label}</span>
                <span className="category-tile-count">
                  {projects.filter((project) => project.domain === domain.key).length}
                </span>
              </span>
              <span className="category-tile-note">{domain.note}</span>
            </button>
          );
        })}
      </div>

      <div id="work-grid" key={active} className="mt-10 space-y-16">
        {groups.map((group, groupIndex) => {
          const lead = group.projects.find((project) => project.lead) ?? group.projects[0];
          const rest = group.projects.filter((project) => project.slug !== lead.slug);

          return (
            <section key={group.key} aria-labelledby={`category-${group.key}-title`} className="work-category">
              <header className="category-header">
                <CategoryMark domain={group.key} size="lg" />
                <div className="min-w-0">
                  <div className="category-kicker" style={{ color: group.color }}>
                    <span className="size-1.5 rounded-full" style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }} />
                    {String(projectsByDomain.findIndex((item) => item.key === group.key) + 1).padStart(2, "0")} /{" "}
                    {group.projects.length} {group.projects.length === 1 ? "project" : "projects"}
                  </div>
                  <h3 id={`category-${group.key}-title`} className="mt-2 text-[clamp(1.2rem,2.4vw,1.8rem)] font-medium tracking-[-0.03em] text-chalk">
                    {group.label}
                  </h3>
                  <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-dim">{group.note}</p>
                </div>
                <span className="category-rule" style={{ background: group.color }} />
              </header>

              <div className="mt-5 grid gap-4 xl:grid-cols-3">
                <ProjectCard project={lead} index={groupIndex} lead onOpen={() => setBrief(lead)} />
                {rest.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onOpen={() => setBrief(project)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          Every brief includes the build notes, stack and public repository links.
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
