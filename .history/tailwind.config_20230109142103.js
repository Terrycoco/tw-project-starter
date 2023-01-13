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
    extend: {
      colors: {
        ...colors,
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
        textColor: {
          50: colors.blue / 50,
          100: colors.blue / 100,
          200: colors.blue / 200,
          300: colors.blue / 300,
          400: colors.blue / 400,
          500: colors.blue / 500,
          600: colors.blue / 600,
          700: colors.blue / 700,
          800: colors.blue / 800,
          900: colors.blue / 900,
          DEFAULT: colors.blue,
        },
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
