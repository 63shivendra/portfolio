"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, roleLenses } from "@/content/site";

/**
 * A role lens, not a skills list: pick the job you are hiring for and the
 * evidence line changes to the work that role should read first.
 */
export function RoleFit() {
  const [activeKey, setActiveKey] = useState(roleLenses[0].key);
  const active = roleLenses.find((role) => role.key === activeKey) ?? roleLenses[0];
  const proofs = active.proofs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section
      aria-label="Role fit"
      className="relative z-10 border-t border-line bg-ink/50"
    >
      <div className="container-x py-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex shrink-0 items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
              Role fit
            </span>
            <span className="h-px w-6 bg-line-2" />
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:flex lg:flex-nowrap">
            {roleLenses.map((role) => {
              const isActive = role.key === activeKey;
              return (
                <button
                  key={role.key}
                  type="button"
                  onClick={() => setActiveKey(role.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "border-lime/40 bg-lime/10 text-lime"
                      : "border-line/70 text-faint hover:border-line-2 hover:text-dim"
                  }`}
                >
                  <span
                    className={`size-1 rounded-full ${isActive ? "bg-lime" : "bg-line-2"}`}
                  />
                  {role.short}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 border-t border-line/70 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p
            key={active.key}
            className="enter max-w-[46rem] text-[11px] leading-relaxed text-dim"
          >
            <span className="font-medium text-chalk">{active.label}</span>
            <span className="mx-2 text-faint">/</span>
            {active.evidence}
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1.5">
            {proofs.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                className="group inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-lime"
              >
                {project.title}
                <ArrowUpRight
                  className="size-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
