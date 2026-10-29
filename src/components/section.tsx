import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  label,
  title,
  intro,
  accent = "#c8f751",
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-10 scroll-mt-16 border-t border-line ${className}`}
    >
      <span aria-hidden className="beam" />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-6 select-none font-mono text-[clamp(7rem,17vw,15rem)] leading-none tracking-[-0.06em] text-chalk/[0.025] sm:top-10"
        >
          {index}
        </span>

        <header
          data-reveal
          className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <span
                className="font-mono text-[10px] tracking-[0.1em]"
                style={{ color: accent }}
              >
                {index}
              </span>
              <span className="h-px w-7 bg-line-2" />
              <span className="eyebrow">{label}</span>
            </div>
            <h2 className="mt-5 max-w-2xl text-[clamp(1.95rem,3.5vw,2.8rem)] leading-[1.04] font-medium tracking-[-0.04em] text-chalk">
              {title}
            </h2>
          </div>
          {intro ? (
            <p className="max-w-xs text-[13px] leading-relaxed text-dim lg:pb-2 lg:text-right">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="mt-12 lg:mt-14">{children}</div>
      </div>
    </section>
  );
}
