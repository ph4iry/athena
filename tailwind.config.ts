import type { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ec3750",
        orange: "#ff8c37"
      }
    },
  },
  plugins: [
    typographyPlugin,
  ],
} satisfies Config;
