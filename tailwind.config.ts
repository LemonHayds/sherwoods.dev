import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white)",
        black: "var(--black)",
        heading: "var(--heading)",
        subheading: "var(--subheading)",
        body: "var(--body)",
        "body-muted": "var(--body-muted)",
      },
    },
  },
  plugins: [],
} satisfies Config;
