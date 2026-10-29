"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the persisted theme on mount
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* storage can be blocked; the class still applies */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Switch to dark theme" : "Switch to light theme"}
      className="grid size-9 place-items-center rounded-full border border-line text-dim transition-colors hover:border-line-2 hover:text-chalk"
    >
      {light ? (
        <Sun className="size-[15px]" strokeWidth={1.6} />
      ) : (
        <Moon className="size-[15px]" strokeWidth={1.6} />
      )}
    </button>
  );
}
