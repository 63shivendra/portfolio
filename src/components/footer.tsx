import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/content/site";
import { LocalTime } from "@/components/local-time";

export function Footer() {
  return (
    <footer className="footer-shell relative z-10 border-t border-line">
      <div className="container-x py-9">
        <div className="footer-top">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-line-2 bg-panel font-mono text-[10px] tracking-[0.12em] text-lime">
              {site.initials}
            </span>
            <div>
              <div className="text-[12px] font-medium text-chalk">{site.name}</div>
              <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                Research AI Engineer · Hyderabad
              </div>
            </div>
          </a>

          <div className="footer-status">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-mint" />
              {site.availability}
            </span>
            <span className="hidden h-3 w-px bg-line-2 sm:block" />
            <span>
              <LocalTime /> local
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <nav aria-label="Footer navigation" className="footer-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-meta">
            <span>24 projects · 7 categories</span>
            <span className="hidden sm:inline">·</span>
            <span>Next.js 16 · static export</span>
            <span className="hidden sm:inline">·</span>
            <span>© 2026</span>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social">
              <ArrowUpRight className="size-3" strokeWidth={1.6} />
            </a>
          </div>

          <a href="#top" className="footer-top-link" aria-label="Back to top">
            Top
            <ArrowUp className="size-3" strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </footer>
  );
}
