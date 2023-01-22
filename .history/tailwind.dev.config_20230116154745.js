/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const myTheme = require("./styles/theme");

console.log("myTheme: ", myTheme);

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
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: {
            DEFAULT: myTheme.colors.primaryLight,
            text: myTheme.colors.primaryLightText,
          },
          DEFAULT: {
            DEFAULT: myTheme.colors.primary,
            text: myTheme.colors.primaryText,
          },
          dark: myTheme.colors.primaryDark,
        },
        secondary: {
          light: "#ffe2d4",
          DEFAULT: myTheme.colors.secondary,
          dark: "#7e1010",
        },
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
