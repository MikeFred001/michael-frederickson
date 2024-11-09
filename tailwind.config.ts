import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mred: '#FF5050',
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)', 'sans-serif'],
      },
      fontWeight: {
        bebas: '500',
      },
      textShadow: {
        black1: '3px 2px 1px black',
        black2: '6px 5px 1px black',
        red1: '3px 2px 1px #FF5050',
        red2: '6px 5px 1px #FF5050',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
export default config;
