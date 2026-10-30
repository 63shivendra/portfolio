import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { experience, projects, trajectory } from "@/content/site";

const kinds: Record<
  string,
  { icon: LucideIcon; color: string; label: string }
> = {
  Current: { icon: ShieldCheck, color: "#5eead4", label: "Current" },
  Education: { icon: GraduationCap, color: "#a78bfa", label: "Education" },
  Independent: { icon: Rocket, color: "#fbbf24", label: "Independent" },
  Industry: { icon: BriefcaseBusiness, color: "#94a3b8", label: "Industry" },
};

function Trajectory() {
  return (
    <div className="trajectory-strip" data-reveal>
      <span aria-hidden className="trajectory-line" />
      {trajectory.map((step, index) => (
        <div key={step.title} className="trajectory-step">
          <span className="trajectory-dot" style={{ "--step": step.color } as CSSProperties}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="trajectory-copy">
            <span className="trajectory-period">{step.period}</span>
            <span className="trajectory-title">{step.title}</span>
            <span className="trajectory-note">{step.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <div>
      <Trajectory />

      <div className="timeline">
        <span aria-hidden className="timeline-line" />
        {experience.map((item, index) => {
          const kind = kinds[item.kind] ?? kinds.Industry;
          const Icon = kind.icon;
          const proofs = (item.proofs ?? [])
            .map((slug) => projects.find((project) => project.slug === slug))
            .filter((project): project is (typeof projects)[number] => Boolean(project));

          return (
            <article
              key={`${item.org}-${item.period}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 60}ms`, "--step": kind.color } as CSSProperties}
              className={`timeline-item ${item.kind === "Current" ? "timeline-item--current" : ""}`}
            >
              <div className="timeline-rail">
                <span className="timeline-icon">
                  <Icon strokeWidth={1.5} />
                </span>
                <span className="timeline-node" />
              </div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-kind">{kind.label}</span>
                </div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">
                  {item.org}
                  <span> · {item.location}</span>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="timeline-bullet" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {proofs.length ? (
                  <div className="timeline-proofs">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                      Proof
                    </span>
                    {proofs.map((project) => (
                      <a key={project.slug} href={`#${project.slug}`} className="timeline-proof">
                        {project.title}
                        <ArrowUpRight className="size-2.5" strokeWidth={1.8} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
