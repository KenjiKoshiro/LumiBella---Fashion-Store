import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9f6",
        surface: "#faf9f6",
        "surface-low": "#f4f4f0",
        "surface-card": "#ffffff",
        primary: "#80525a",
        secondary: "#eaddff",
        tertiary: "#f5f5dc",
        ink: "#303330",
        muted: "#5d605c",
        outline: "#b1b2af",
        blush: "#fec2cb",
        success: "#487055",
        warning: "#a76a1b"
      },
      fontFamily: {
        headline: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 12px 40px rgba(48,51,48,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
