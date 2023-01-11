/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8200",
        neutral: "#081819",
        secondary: "#2B383B",
        surface: "#FBFCF8",
      },
      fontFamily: {
        roboto: "'Roboto Condensed', sans-serif;",
        inter: "'Inter', sans-serif",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0px 0px 44px rgba(22, 36, 39, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};