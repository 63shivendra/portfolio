import { Code2, Cpu, Database, Gauge, Layers, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";
import { skillGroups } from "@/content/site";

const icons = {
  shield: ShieldCheck,
  cpu: Cpu,
  gauge: Gauge,
  database: Database,
  code: Code2,
  layers: Layers,
} as const;

const accents = ["#ff6b4a", "#c8f751", "#5eead4", "#a78bfa", "#fbbf24", "#60a5fa"];

export function Skills() {
  return (
    <div className="skills-wrap">
      <div className="skills-summary" data-reveal>
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
          Six capability clusters
        </span>
        <p className="max-w-xl text-[13px] leading-relaxed text-dim">
          The left column is the work I want. The rest is what I use to make it
          real: models, retrieval, systems, engineering and delivery.
        </p>
        <div className="skills-chips">
          {["Research", "Systems", "Product"].map((item) => (
            <span key={item} className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-dim">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon as keyof typeof icons];
          const accent = accents[index % accents.length];

          return (
            <div
              key={group.label}
              data-reveal
              style={{ "--reveal-delay": `${index * 50}ms`, "--skill": accent } as CSSProperties}
              className="skill-card"
            >
              <div className="skill-card-head">
                <span className="skill-icon">
                  <Icon className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-[14px] font-medium text-chalk">{group.label}</h3>
                  <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-faint">
                    {group.note}
                  </p>
                </div>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
