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
      mobile: "640px", //xs
      tablet: "768px", //sm
      laptop: "1024px", //md
      desktop: "1280px", //lg
      xl: "1536px", //xl
    },
    extend: {
      colors: {
        primary: {
          50: "#fff0f3",
          100: "#ffe3e9",
          200: "#ffcbd9",
          300: "#ffa0bb",
          400: "#ff6b98",
          500: "#fc3a79",
          600: "#ea1464",
          700: "#c60a55",
          800: "#a50c4d",
          900: "#8d0e48",
          DEFAULT: "#FC3A79",
        },
        secondary: {
          50: "#fff2ed",
          100: "#ffe2d4",
          200: "#ffc1a9",
          300: "#ff9672",
          400: "#fe572e",
          500: "#fd3712",
          600: "#ee1d08",
          700: "#c51009",
          800: "#9c1010",
          900: "#7e1010",
          DEFAULT: "#FE572E",
        },
        text: {
          light: colors.slate["200"],
          DEFAULT: colors.slate["700"],
          dark: colors.slate["900"],
        },
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
