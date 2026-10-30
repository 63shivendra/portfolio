"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Award,
  Boxes,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  GraduationCap,
  MapPin,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  about,
  hireReasons,
  profileFacts,
  projects,
  roleLenses,
  site,
} from "@/content/site";

const reasonIcons: Record<string, LucideIcon> = {
  research: FlaskConical,
  trust: ShieldCheck,
  systems: Boxes,
  product: Rocket,
};

const factIcons: Record<string, LucideIcon> = {
  now: BriefcaseBusiness,
  study: GraduationCap,
  before: Building2,
  independent: Rocket,
  credential: Award,
  base: MapPin,
};

export function WhyHire() {
  const [activeKey, setActiveKey] = useState(roleLenses[0].key);
  const active = roleLenses.find((role) => role.key === activeKey) ?? roleLenses[0];
  const proofs = active.proofs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <div className="why-hire">
      <div className="why-profile" data-profile-summary data-reveal>
        <div className="why-profile-head">
          <span className="why-profile-mark" aria-hidden="true">
            {site.initials}
          </span>
          <div className="min-w-0">
            <div className="why-kicker">
              <span className="size-1.5 rounded-full bg-lime shadow-[0_0_12px_var(--color-lime)]" />
              Profile / full picture
            </div>
            <p className="why-profile-name">{site.name}</p>
            <p className="why-profile-role">
              {site.role} at NPCI · M.Tech CS at IIIT Hyderabad
            </p>
          </div>
          <Link href={site.resume} className="why-profile-link">
            Full profile
            <ArrowUpRight className="size-3" strokeWidth={1.7} />
          </Link>
        </div>

        <dl className="why-profile-facts">
          {profileFacts.map((fact) => {
            const Icon = factIcons[fact.key] ?? BriefcaseBusiness;
            return (
              <div key={fact.key} className="why-profile-fact">
                <span className="why-profile-fact-icon" aria-hidden="true">
                  <Icon strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>

      <div data-reveal className="why-hire-intro">
        <div>
          <div className="why-kicker">
            <span className="size-1.5 rounded-full bg-lime shadow-[0_0_12px_var(--color-lime)]" />
            The 30-second case
          </div>
          <p className="why-quote">
            I build AI systems that have to be right when being wrong is expensive.
          </p>
          <p className="why-body">
            At NPCI and IIIT Hyderabad, I work where model quality meets fraud, privacy, latency and a
            decision someone will be held to. That means the full loop: frame the problem, build the
            system, measure the failure mode, and make the result usable.
          </p>
          <div className="why-looking">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">Best fit</span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Applied AI", "AI systems", "ML research", "Fraud / AML", "Edge & vision", "Privacy", "LLM eval"].map(
                (item) => (
                  <span key={item} className="rounded-full border border-line bg-panel/45 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-dim">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="why-proof-grid">
          {hireReasons.map((reason) => {
            const Icon = reasonIcons[reason.icon] ?? FlaskConical;
            const project = projects.find((item) => item.slug === reason.project);
            return (
              <a
                key={reason.key}
                href={`#${reason.project}`}
                className="why-proof group"
                style={{ "--reason": reason.accent } as CSSProperties}
              >
                <div className="why-proof-head">
                  <span className="why-proof-icon">
                    <Icon strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                    {reason.kicker}
                  </span>
                  <ArrowUpRight className="ml-auto size-3.5 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 text-[16px] font-medium tracking-[-0.015em] text-chalk">{reason.title}</h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-dim">{reason.body}</p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <div>
                    <div className="why-proof-metric">{reason.metric}</div>
                    <div className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-faint">{reason.metricLabel}</div>
                  </div>
                  <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-faint">{project?.year ?? ""}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div data-reveal className="role-lens">
        <div className="role-lens-head">
          <div>
            <div className="eyebrow">Hiring for a role?</div>
            <p className="mt-1 text-[12px] text-dim">Pick a lens. The evidence changes to the work that role should read first.</p>
          </div>
          <span className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-faint sm:block">
            One person · several ways to use him
          </span>
        </div>

        <div className="role-lens-tabs">
          {roleLenses.map((role) => {
            const isActive = role.key === activeKey;
            return (
              <button
                key={role.key}
                type="button"
                onClick={() => setActiveKey(role.key)}
                aria-pressed={isActive}
                className={`role-lens-tab ${isActive ? "is-active" : ""}`}
              >
                <span className="role-lens-dot" />
                {role.short}
              </button>
            );
          })}
        </div>

        <div className="role-lens-body">
          <p key={active.key} className="enter text-[13px] leading-relaxed text-dim">
            <span className="font-medium text-chalk">{active.label}</span>
            <span className="mx-2 text-faint">/</span>
            {active.evidence}
          </p>
          <div className="role-lens-proofs">
            {proofs.map((project) => (
              <a key={project.slug} href={`#${project.slug}`} className="role-lens-proof">
                {project.title}
                <ArrowUpRight className="size-2.5" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <p className="role-lens-looking">{about.looking}</p>
      </div>
    </div>
  );
}
