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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
