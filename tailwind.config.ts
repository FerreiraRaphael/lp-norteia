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
        // Paleta Norteia - identidade visual V2
        brand: {
          dark: "#242222",
          cream: "#faf3da",
          warmgray: "#E8E4DF",
          purple: "#cba8af",
          blue: "#c0d8d9",
          orange: "#edab76",
          pink: "#fa888e",
          red: "#C24D3D", // vermelho/alaranjado de destaque
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        gliker: ['Gliker', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
        'blob-slow': 'blob 12s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(80px, -100px) scale(1.2)',
          },
          '50%': {
            transform: 'translate(-60px, 80px) scale(0.8)',
          },
          '75%': {
            transform: 'translate(100px, 40px) scale(1.15)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
