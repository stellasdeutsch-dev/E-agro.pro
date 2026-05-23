import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        agro: {
          green: "#55B947",
          dark: "#2F6B2F",
          bg: "#F3F5F6",
          text: "#1D1D1F",
          border: "#E5E7EB"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(29, 29, 31, 0.08)",
        panel: "0 12px 34px rgba(47, 107, 47, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
