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
        background: "#FFF5F6",
        surface: "#FFF5F6",
        "surface-low": "#FFE4E1",
        "surface-card": "#ffffff",
        primary: "#E5B5B5",
        secondary: "#FDF7C3",
        tertiary: "#f5f5dc",
        ink: "#4d3d3d",
        muted: "#8c7a7a",
        outline: "#d9c5c5",
        blush: "#fec2cb",
        success: "#487055",
        warning: "#a76a1b"
      },
      fontFamily: {
        headline: ["var(--font-playfair)", "serif"],
        body: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 12px 40px rgba(80,50,50,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
