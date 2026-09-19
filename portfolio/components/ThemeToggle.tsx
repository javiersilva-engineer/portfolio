"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const syncTheme = () => {
      const storedTheme = window.localStorage.getItem(storageKey);
      const resolvedTheme =
        storedTheme === "light" || storedTheme === "dark" ? storedTheme : mediaQuery.matches ? "light" : "dark";

      document.documentElement.dataset.theme = resolvedTheme;
    };

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);

    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <button
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-ink-border text-paper-500 transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
      aria-label="Cambiar tema"
      onClick={toggleTheme}
    >
      <SunIcon />
      <MoonIcon />
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="theme-toggle-sun h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="theme-toggle-moon hidden h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20.3 14.3A7.6 7.6 0 0 1 9.7 3.7 8.2 8.2 0 1 0 20.3 14.3Z" />
    </svg>
  );
}
