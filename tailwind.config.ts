import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Norteia - identidade visual
        brand: {
          dark: "#1A1A1A",
          cream: "#FAF7F2",
          warmgray: "#E8E4DF",
          purple: "#cba8af",
          blue: "#c0d8d9",
          orange: "#edab76",
          pink: "#fa888e",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        gliker: ['Gliker', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
