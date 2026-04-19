import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0f5238",
        "forest-ink": "#0a3826",
        mint: "#74C69D",
        "mint-soft": "#cfe7da",
        paper: "#F9F9F7",
        "paper-deep": "#f1efe8",
        ink: "#1A1A1A",
        "ink-soft": "#4a4a48",
        "ink-muted": "#77776f",
        line: "rgba(26,26,26,0.08)",
        "line-strong": "rgba(26,26,26,0.16)",
        dark: "#1B1B1B",
        whatsapp: "#25D366",
        "whatsapp-deep": "#128C7E",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
