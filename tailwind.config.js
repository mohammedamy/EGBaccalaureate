/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        egypt: {
          gold: '#C5A059',
          red: '#CE1126',
          black: '#000000',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81',
        }
      },
      fontFamily: {
        ar: ['Cairo', 'Tajawal', 'sans-serif'],
        en: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
