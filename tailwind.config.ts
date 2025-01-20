import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-montreal)"],
        secondary: ["var(--font-editorial)"],
      },
      colors: {
        primary: "#0156cf",
        secondary: "#005db4",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
