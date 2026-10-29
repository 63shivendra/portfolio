import { ArrowUp } from "lucide-react";
import { navItems, site } from "@/content/site";
import { LocalTime } from "@/components/local-time";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-x py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md border border-line-2 bg-panel font-mono text-[10px] tracking-[0.12em] text-lime">
              {site.initials}
            </span>
            <div>
              <div className="text-[11px] text-dim">
                © 2026 {site.name}
              </div>
              <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                Next.js 16 · Three.js · no template
              </div>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] text-faint transition-colors hover:text-chalk"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
            <a
              href={site.codolio}
              target="_blank"
              rel="noreferrer"
              className="hidden transition-colors hover:text-lime sm:inline"
            >
              Codolio ↗
            </a>
            <LocalTime />
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-8 place-items-center rounded-full border border-line transition-colors hover:border-line-2 hover:text-chalk"
            >
              <ArrowUp className="size-3.5" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
