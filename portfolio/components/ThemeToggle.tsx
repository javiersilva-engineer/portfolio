"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const syncTheme = () => {
      const storedTheme = window.localStorage.getItem(storageKey);
      const resolvedTheme =
        storedTheme === "light" || storedTheme === "dark" ? storedTheme : mediaQuery.matches ? "light" : "dark";

      document.documentElement.dataset.theme = resolvedTheme;
      setTheme(resolvedTheme);
    };

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);

    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-ink-border text-paper-500 transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.3 14.3A7.6 7.6 0 0 1 9.7 3.7 8.2 8.2 0 1 0 20.3 14.3Z" />
    </svg>
  );
}
