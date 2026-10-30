import type { CSSProperties, ReactNode } from "react";
import { ArrowDownRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  accent?: string;
  icon?: LucideIcon;
  next?: { label: string; href: string };
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
  icon: Icon,
  next,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      className={`section-shell relative z-10 scroll-mt-16 border-t border-line ${className}`}
      style={{ "--section": accent } as CSSProperties}
    >
      <span aria-hidden className="beam" />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-6 select-none font-mono text-[clamp(7rem,17vw,15rem)] leading-none tracking-[-0.06em] text-chalk/[0.025] sm:top-10"
        >
          {index}
        </span>

        <header data-reveal className="section-header relative">
          <div className="section-marker" aria-hidden="true">
            <span className="section-marker-icon">
              {Icon ? <Icon className="size-5" strokeWidth={1.5} /> : <span className="size-1.5 rounded-full" />}
            </span>
            <span className="section-marker-line" />
            <span className="section-marker-index">{index}</span>
          </div>

          <div className="section-heading">
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }} />
              <span className="eyebrow">{label}</span>
            </div>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.95rem,3.5vw,2.8rem)] leading-[1.04] font-medium tracking-[-0.04em] text-chalk">
              {title}
            </h2>
          </div>

          {intro ? <p className="section-intro">{intro}</p> : null}
        </header>

        <div className="mt-12 lg:mt-14">{children}</div>

        {next ? (
          <div className="section-next">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">Next chapter</span>
            <a href={next.href} className="section-next-link">
              {next.label}
              <ArrowDownRight className="size-3.5" strokeWidth={1.6} />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
