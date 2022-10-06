/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      display: ["MonumentExtended", "normal"],
      cursive: ["Chonburi", "cursive"],
    },
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.purple,
      },
    },
  },
  plugins: [],
};
