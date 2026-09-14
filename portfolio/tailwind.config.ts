import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--color-ink-950) / <alpha-value>)",
          900: "rgb(var(--color-ink-900) / <alpha-value>)",
          800: "rgb(var(--color-ink-800) / <alpha-value>)",
          700: "rgb(var(--color-ink-700) / <alpha-value>)",
          600: "rgb(var(--color-ink-600) / <alpha-value>)",
          border: "rgb(var(--color-ink-border) / <alpha-value>)",
        },
        paper: {
          100: "rgb(var(--color-paper-100) / <alpha-value>)",
          300: "rgb(var(--color-paper-300) / <alpha-value>)",
          500: "rgb(var(--color-paper-500) / <alpha-value>)",
        },
        signal: {
          DEFAULT: "rgb(var(--color-signal) / <alpha-value>)",
          dim: "rgb(var(--color-signal-dim) / <alpha-value>)",
          soft: "rgb(var(--color-signal) / 0.12)",
          foreground: "rgb(var(--color-signal-foreground) / <alpha-value>)",
        },
        overlay: {
          DEFAULT: "rgb(var(--color-overlay) / <alpha-value>)",
        },
        model: {
          viewport: "rgb(var(--color-model-viewport) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgb(var(--color-grid) / var(--grid-opacity)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-grid) / var(--grid-opacity)) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
