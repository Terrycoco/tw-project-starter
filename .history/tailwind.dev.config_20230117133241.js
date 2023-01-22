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
      //mobile is default
      xs: "640px", //large mobile
      sm: "768px", //tablet
      md: "1024px", //laptop
      lg: "1280px", //desktop
      xl: "1536px", //tv
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          myTheme.colors.bgMain,
          
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
