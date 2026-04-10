import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 48px rgba(24, 52, 92, 0.12)",
        card: "0 10px 30px rgba(24, 52, 92, 0.10)"
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at top right, rgba(142,191,214,0.28), transparent 42%), radial-gradient(circle at bottom left, rgba(216,177,30,0.12), transparent 24%)",
        "soft-wave":
          "linear-gradient(135deg, rgba(24,52,92,0.08), rgba(35,76,122,0.02) 45%, rgba(216,177,30,0.08) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
