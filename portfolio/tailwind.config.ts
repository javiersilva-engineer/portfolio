import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0D0F",
          900: "#12151A",
          800: "#1A1E24",
          700: "#242931",
          600: "#2E343D",
          border: "#2A2F36",
        },
        paper: {
          100: "#EDEFF2",
          300: "#C7CCD2",
          500: "#9AA3AD",
        },
        signal: {
          DEFAULT: "#E08A3E",
          dim: "#B96E2E",
          soft: "rgba(224, 138, 62, 0.12)",
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
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
