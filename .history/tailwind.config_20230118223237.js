/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./styles/**/*.{html,js}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "!./node_modules",
  ],
  theme: {
    screens: {
      //mobile is default
      xs: "640px", //large mobile
      sm: "768px", //tablet
      md: "1024px", //laptop
      lg: "1280px", //desktop
      xl: "1536px", //tv
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
        clr: {
          light: colors.slate["200"],
          normal: colors.slate["700"],
          dark: colors.slate["900"],
        },
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};