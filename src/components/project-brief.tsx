"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { domains, type Project } from "@/content/site";
import { getProjectVisual } from "@/content/project-visuals";
import { ProjectArt } from "@/components/project-art";

type ProjectBriefProps = {
  project: Project | null;
  onClose: () => void;
};

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Slide-over project dossier. It carries the longer, general build notes that
 * do not fit on a card, plus a tech-forward one-line summary for each project.
 */
export function ProjectBrief({ project, onClose }: ProjectBriefProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const domain = domains.find((item) => item.key === project.domain) ?? domains[0];
  const visual = getProjectVisual(project.slug);
  const accent = visual.accent;
  const Icon = visual.icon;

  return createPortal(
    <div
      className="project-brief-backdrop fixed inset-0 z-[90] flex justify-end bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-brief-title"
        aria-describedby="project-brief-summary"
        data-project-brief={project.slug}
        className="project-brief-panel relative flex h-full max-h-[100dvh] w-full max-w-2xl flex-col overflow-hidden border-l border-line bg-ink shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-5 py-3 sm:px-7">
          <div className="flex min-w-0 items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
            />
            <span className="truncate">{domain.label}</span>
            <span className="text-line-2">/</span>
            <span className="shrink-0">{project.year}</span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project brief"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-dim transition hover:border-line-2 hover:text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            <X className="size-4" strokeWidth={1.6} />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="px-5 pt-5 sm:px-7 sm:pt-6">
            <ProjectArt project={project} size="wide" />
          </div>

          <div className="px-5 py-6 sm:px-7 sm:py-7">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
              Project brief / {project.hook}
            </div>
            <div className="mt-2 flex items-start gap-3">
              <span
                className="project-icon project-icon--lg"
                data-project-icon={project.slug}
                aria-hidden="true"
                style={{ "--project": accent } as CSSProperties}
              >
                <Icon strokeWidth={1.45} />
              </span>
              <h2
                id="project-brief-title"
                className="display text-[clamp(2rem,5vw,3.2rem)] text-chalk"
              >
                {project.title}
              </h2>
            </div>
            <p
              className="mt-4 border-l-2 pl-3 text-[15px] leading-relaxed text-chalk/90"
              style={{ borderColor: accent }}
            >
              {project.tagline}
            </p>
            <div className="project-stack-top project-brief-stack" data-project-stack>
              <span className="project-stack-label">Stack</span>
              <div className="project-stack-chips">
                {project.stack.map((item) => (
                  <span key={item} className="project-stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p
              id="project-brief-summary"
              className="mt-5 text-[13.5px] leading-7 text-dim"
            >
              {project.summary ?? project.subtitle}
            </p>

            {project.stats ? (
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-line bg-panel/60 px-3 py-3"
                  >
                    <div className="font-mono text-lg tracking-tight text-chalk">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                      {stat.label}
                    </div>
                    <div className="mt-1 font-mono text-[9px] leading-relaxed text-dim">
                      {stat.note}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {project.metric ? (
              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg border border-line bg-panel/60 px-4 py-3">
                <span className="font-mono text-xl tracking-tight text-chalk">
                  {project.metric.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  {project.metric.label}
                </span>
              </div>
            ) : null}

            <div className="mt-8 grid gap-8 sm:grid-cols-[1.2fr_0.8fr]">
              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                  Build notes
                </h3>
                <ol className="mt-3 space-y-3">
                  {project.details.map((detail, index) => (
                    <li
                      key={detail}
                      className="grid grid-cols-[1.6rem_1fr] gap-3"
                    >
                      <span
                        className="font-mono text-[9px] leading-5"
                        style={{ color: accent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[12.5px] leading-6 text-dim">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                  Repositories
                </h3>
                <div className="mt-3 space-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-panel/60 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-dim transition hover:border-line-2 hover:text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowUpRight
                        className="size-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.6}
                      />
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
