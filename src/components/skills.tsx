import { Code2, Cpu, Database, Gauge, Layers, ShieldCheck } from "lucide-react";
import { skillGroups } from "@/content/site";

const icons = {
  shield: ShieldCheck,
  cpu: Cpu,
  gauge: Gauge,
  database: Database,
  code: Code2,
  layers: Layers,
} as const;

export function Skills() {
  return (
    <div className="relative grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
      <span className="beam absolute inset-x-0 top-0 z-10" />
      {skillGroups.map((group, index) => {
        const Icon = icons[group.icon as keyof typeof icons];
        const isLastOdd =
          skillGroups.length % 2 === 1 && index === skillGroups.length - 1;

        return (
          <div
            key={group.label}
            data-reveal
            style={{ "--reveal-delay": `${index * 50}ms` } as React.CSSProperties}
            className={`bg-ink p-6 transition-colors hover:bg-panel/50 lg:p-7 ${
              isLastOdd ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border border-line bg-panel">
                  <Icon className="size-4 text-lime" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[14px] font-medium text-chalk">
                    {group.label}
                  </h3>
                  <p className="mt-0.5 font-mono text-[9px] tracking-[0.02em] text-faint">
                    {group.note}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[9px] text-faint">
                0{index + 1}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-panel/40 px-2.5 py-1.5 text-[11px] text-dim transition-colors hover:border-line-2 hover:text-chalk"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
