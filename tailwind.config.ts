import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        border: "var(--bg-border)",
        "aon-red": "var(--aon-red)",
        orange: "var(--orange)",
        "orange-deep": "var(--orange-deep)",
        "orange-dim": "var(--orange-dim)",
        "orange-mid": "var(--orange-mid)",
        "white-70": "var(--white-70)",
        "white-50": "var(--white-50)",
        "white-30": "var(--white-30)",
        "white-10": "var(--white-10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      fontSize: {
        "hero-xl": ["5rem", { lineHeight: "1.1" }],
        "hero-lg": ["3rem", { lineHeight: "1.1" }],
        "section-h2": ["2.625rem", { lineHeight: "1.15" }],
        stat: ["2.5rem", { lineHeight: "1" }],
      },
      spacing: {
        nav: "60px",
      },
    },
  },
  plugins: [],
};

export default config;
