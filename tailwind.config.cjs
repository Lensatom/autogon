/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "aot",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        neutral: "#081819",
        secondary: "#232F3E",
        surface: "#FBFCF8",
        "dark-surface": "#081819",
      },
      backgroundColor: {
        "dark-paper": "#162427",
        "light-dark-surface": "#2B383B",
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
      animationDuration: {
        "2s": "2s",
        "10s": "52.0664s",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
