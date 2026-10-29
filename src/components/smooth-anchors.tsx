"use client";

import { useEffect } from "react";

/**
 * Fast in-page navigation. Native smooth scrolling takes seconds on a page
 * this long; this lands in ~300ms and keeps the hash correct.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();

      const start = window.scrollY;
      const isTop = hash === "#top" || hash === "#main";
      const offset = isTop ? 0 : 64;
      const end = Math.max(
        0,
        target.getBoundingClientRect().top + start - offset,
      );

      history.replaceState(null, "", hash);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo(0, end);
        return;
      }

      const distance = end - start;
      const duration = Math.min(
        460,
        Math.max(220, Math.abs(distance) * 0.1),
      );
      const t0 = performance.now();

      const step = (now: number) => {
        const t = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        window.scrollTo(0, start + distance * eased);
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      anchor.blur();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
