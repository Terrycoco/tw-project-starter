/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./styles/**/*.{html,js}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
    "./devComponents/**/*.{js, ts, jsx, tsx}", //use only for development
    "./node_modules/tw-elements/dist/js/**/*.js",
    "!./node_modules",
  ],
  theme: {
    screens: {
      mobile: "640px", //xs
      tablet: "768px", //sm
      laptop: "1024px", //md
      desktop: "1280px", //lg
      xl: "1536px", //xl
    },
    fontFamily: {},
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
          DEFAULT: "#FC3A79", //same as 500
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
        clr: {
          light: "#cbd5e1",
          normal: "#64748b",
          dark: "#1e293b",
        },
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
