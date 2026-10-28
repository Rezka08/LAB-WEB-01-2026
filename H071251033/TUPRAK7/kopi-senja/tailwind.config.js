/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        starbucks: {
          primary: '#006241',    // Starbucks House Green
          hover: '#004f34',
          accent: '#00754A',
          soft: '#E8F5E9',
          gold: '#CBA258',
        }
      }
    },
  },
  plugins: [],
}