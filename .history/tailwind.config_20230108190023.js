/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      xl: "1536px",
    },
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      blackish: "rgb(var(--color-primary) / 75)",
      ...colors,
    },
  },

  extend: {},

  plugins: [require("tw-elements/dist/plugin")],
};