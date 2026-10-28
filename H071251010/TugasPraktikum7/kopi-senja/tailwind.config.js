/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        senja: {
          green: "#00754a",
          dark: "#003b2a",
          ink: "#17231e",
          paper: "#fbfbf7",
          cream: "#f4f3ec",
          muted: "#68746e",
          line: "#e3e7e0",
          lime: "#e7f0e9",
        },
      },
      boxShadow: {
        card: "0 12px 32px rgba(0, 59, 42, 0.08)",
        lift: "0 20px 46px rgba(0, 59, 42, 0.14)",
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "Segoe UI", "Arial", "sans-serif"],
        display: ["DM Sans", "Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
