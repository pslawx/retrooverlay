import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   scroll: 'scroll 10s linear infinite',
      // },
      // keyframes: {
      //   scroll: {
      //     '0%': { backgroundPosition: '0 0'},
      //     '100%': { backgroundPosition: '-100% 0'},
      //   }
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
