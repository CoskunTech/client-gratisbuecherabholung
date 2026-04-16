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
        // Core brand
        primary: "#0f5238",
        "primary-container": "#2d6a4f",
        "on-primary": "#ffffff",
        "on-primary-container": "#a8e7c5",
        "primary-fixed": "#b1f0ce",
        "primary-fixed-dim": "#95d4b3",
        "on-primary-fixed": "#002114",
        "on-primary-fixed-variant": "#0e5138",
        "inverse-primary": "#95d4b3",

        // Secondary (mint/leaf — WhatsApp, eco badges)
        secondary: "#0e6c4a",
        "secondary-container": "#a0f4c8",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#19724f",
        "secondary-fixed": "#a0f4c8",
        "secondary-fixed-dim": "#85d7ad",
        "on-secondary-fixed": "#002113",
        "on-secondary-fixed-variant": "#005236",

        // Tertiary
        tertiary: "#005236",
        "tertiary-container": "#116c4a",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#98eabf",
        "tertiary-fixed": "#a1f4c8",
        "tertiary-fixed-dim": "#86d7ad",
        "on-tertiary-fixed": "#002113",
        "on-tertiary-fixed-variant": "#005236",

        // Surface hierarchy (light layers of paper)
        background: "#f9f9f7",
        "on-background": "#1a1c1b",
        surface: "#f9f9f7",
        "surface-bright": "#f9f9f7",
        "surface-dim": "#dadad8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f4f2",
        "surface-container": "#eeeeec",
        "surface-container-high": "#e8e8e6",
        "surface-container-highest": "#e2e3e1",
        "surface-variant": "#e2e3e1",
        "surface-tint": "#2c694e",
        "on-surface": "#1a1c1b",
        "on-surface-variant": "#404943",
        "inverse-surface": "#2f3130",
        "inverse-on-surface": "#f1f1ef",

        // Outline
        outline: "#707973",
        "outline-variant": "#bfc9c1",

        // Error
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        heading: ["Lora", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1.5rem",
        full: "9999px",
      },
      fontSize: {
        // Min 16px body for accessibility (60+ audience)
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.05" }],
      },
    },
  },
  plugins: [],
};

export default config;
