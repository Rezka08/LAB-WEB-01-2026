/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#123B2A",
        leaf: "#2E6B4F",
        mint: "#E7F0E8",
        cream: "#F7F5EF",
        latte: "#E8DDC8",
        ink: "#202820"
      },
      boxShadow: {
        soft: "0 12px 32px rgba(18, 59, 42, 0.08)"
      }
    }
  },
  plugins: []
}