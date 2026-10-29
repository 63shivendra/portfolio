"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { navItems, site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        const ids = Array.from(visible);
        if (!ids.length) {
          setActive("");
          return;
        }

        const focus = window.innerHeight * 0.46;
        const nearest = ids.reduce((best, id) => {
          const el = document.getElementById(id);
          if (!el) return best;
          const distance = Math.abs(el.getBoundingClientRect().top - focus);
          if (!best) return { id, distance };
          return distance < best.distance ? { id, distance } : best;
        }, null as { id: string; distance: number } | null);

        setActive(nearest ? `#${nearest.id}` : "");
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-line-2 bg-panel font-mono text-[11px] font-medium tracking-[0.12em] text-lime">
            {site.initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[13px] font-medium tracking-tight text-chalk">
              {site.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
              {site.role} · AI systems
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[13px] transition-colors ${
                  isActive ? "text-chalk" : "text-dim hover:text-chalk"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <span className="absolute -top-2.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-lime" />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href={site.resume}
            className="hidden h-9 items-center gap-1.5 rounded-full border border-line-2 bg-panel/60 px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-chalk transition-colors hover:border-faint hover:bg-panel sm:inline-flex"
          >
            <FileText className="size-3.5 text-lime" strokeWidth={1.7} />
            Résumé
            <ArrowUpRight className="size-3 text-faint" strokeWidth={1.7} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-line text-dim transition-colors hover:text-chalk md:hidden"
          >
            {open ? (
              <X className="size-4" strokeWidth={1.7} />
            ) : (
              <Menu className="size-4" strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/70 py-3.5 text-sm text-dim last:border-0 hover:text-chalk"
            >
              <span>
                <span className="mr-3 font-mono text-[10px] text-faint">
                  0{index + 1}
                </span>
                {item.label}
              </span>
              <ArrowUpRight className="size-3.5 text-faint" strokeWidth={1.6} />
            </a>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <Link
              href={site.resume}
              onClick={() => setOpen(false)}
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-lime px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-on-accent"
            >
              <FileText className="size-3.5" strokeWidth={1.8} />
              Résumé
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full border border-line text-dim"
            >
              <GithubIcon className="size-4" strokeWidth={1.6} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full border border-line text-dim"
            >
              <LinkedinIcon className="size-4" strokeWidth={1.6} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
