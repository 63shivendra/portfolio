import { experience, trajectory } from "@/content/site";

const kindStyles: Record<string, string> = {
  Current: "border-mint/30 bg-mint/10 text-mint",
  Education: "border-line-2 bg-panel text-dim",
  Independent: "border-line-2 bg-panel text-dim",
  Industry: "border-line-2 bg-panel text-dim",
};

function Trajectory() {
  return (
    <div className="mb-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {trajectory.map((step, index) => (
        <div key={step.title} className="group relative bg-ink p-4 lg:p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] tracking-[0.1em] text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="size-1.5 rounded-full"
              style={{ backgroundColor: step.color }}
            />
          </div>
          <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-dim">
            {step.period}
          </div>
          <div className="mt-1 text-[13px] font-medium text-chalk">
            {step.title}
          </div>
          <div className="mt-0.5 text-[10px] text-faint">{step.note}</div>
          <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-lime/60 transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <div>
      <Trajectory />
      <div className="border-t border-line">
        {experience.map((item, index) => (
          <div
            key={`${item.org}-${item.period}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
            className="grid gap-4 border-b border-line py-8 sm:grid-cols-[142px_1fr] sm:gap-8 lg:grid-cols-[180px_1fr] lg:py-10"
          >
            <div>
              <div className="font-mono text-[10px] tracking-[0.08em] text-dim">
                {item.period}
              </div>
              <span
                className={`mt-2.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] ${kindStyles[item.kind]}`}
              >
                {item.kind === "Current" ? (
                  <span className="size-1 rounded-full bg-mint" />
                ) : null}
                {item.kind}
              </span>
            </div>

            <div>
              <h3 className="text-[17px] font-medium tracking-[-0.01em] text-chalk">
                {item.role}
              </h3>
              <div className="mt-1 text-[12px] text-dim">
                {item.org}
                <span className="text-faint"> · {item.location}</span>
              </div>
              <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-dim">
                {item.summary}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex max-w-2xl gap-2.5 text-[13px] leading-relaxed text-dim"
                  >
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-lime/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
