import type { Config } from "tailwindcss";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1114",
        aqua: "#10C7C3",
        "aqua-dark": "#067F7D",
        mist: "#E9F9F8",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "Arial", "sans-serif"],
        display: ["var(--font-archivo-black)", "Arial Black", "sans-serif"],
      },
      boxShadow: { soft: "0 24px 70px rgba(11,17,20,.09)" },
    },
  },
  plugins: [],
} satisfies Config;
