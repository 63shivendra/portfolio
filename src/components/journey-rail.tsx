"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  Compass,
  Fingerprint,
  Home,
  Layers,
  Mail,
  Route,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type JourneyItem = {
  id: string;
  label: string;
  short: string;
  icon: LucideIcon;
  color: string;
};

const journey: JourneyItem[] = [
  { id: "top", label: "Home", short: "Home", icon: Home, color: "#ff6b4a" },
  { id: "why", label: "Why hire", short: "Why", icon: Compass, color: "#c8f751" },
  { id: "work", label: "Selected work", short: "Work", icon: Layers, color: "#5eead4" },
  { id: "experience", label: "The path here", short: "Path", icon: Route, color: "#a78bfa" },
  { id: "skills", label: "Capabilities", short: "Skills", icon: Wrench, color: "#fbbf24" },
  { id: "about", label: "About", short: "About", icon: Fingerprint, color: "#60a5fa" },
  { id: "contact", label: "Contact", short: "Contact", icon: Mail, color: "#ff6b4a" },
];

function useActiveSection() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = journey
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        if (!visible.size) return;
        const focus = window.innerHeight * 0.42;
        const nearest = Array.from(visible).reduce(
          (best, id) => {
            const element = document.getElementById(id);
            if (!element) return best;
            const distance = Math.abs(element.getBoundingClientRect().top - focus);
            if (!best || distance < best.distance) return { id, distance };
            return best;
          },
          null as { id: string; distance: number } | null,
        );

        if (nearest) setActive(nearest.id);
      },
      { rootMargin: "-38% 0px -52% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function JourneyRail() {
  const active = useActiveSection();

  return (
    <>
      <nav aria-label="Section journey" className="journey-rail">
        <span aria-hidden className="journey-line" />
        {journey.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={`journey-node ${isActive ? "is-active" : ""}`}
              style={{ "--node": item.color } as CSSProperties}
            >
              <span className="journey-icon">
                <Icon strokeWidth={1.5} />
              </span>
              <span className="journey-label">{item.label}</span>
              <span className="journey-label-short">{item.short}</span>
              <span className="sr-only">{String(index + 1).padStart(2, "0")}</span>
            </a>
          );
        })}
      </nav>

      <nav aria-label="Mobile section navigation" className="mobile-dock">
        {journey.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={`mobile-dock-item ${isActive ? "is-active" : ""}`}
              style={{ "--node": item.color } as CSSProperties}
            >
              <Icon strokeWidth={1.5} />
              <span>{item.short}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
