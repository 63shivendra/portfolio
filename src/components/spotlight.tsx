"use client";

import { useRef, type ComponentProps } from "react";

/** Cursor-following lime glow for the hero project card. */
export function Spotlight({
  className = "",
  ...props
}: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={ref}
      onPointerMove={(event) => {
        props.onPointerMove?.(event);
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
      className={`group relative ${className}`}
    >
      <div className="spotlight pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      {props.children}
    </div>
  );
}
