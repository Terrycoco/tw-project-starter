/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const myTheme = require("./styles/themes/theme");

module.exports = {
  mode: "jit",
  content: [
    "./styles/**/*.{html,js}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
    "./devComponents/**/*.{js, ts, jsx, tsx}", //use only for development
    "./utils/**/*.{js, ts, jsx, tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "!./node_modules",
  ],
  safelist: [
    //use only for development
    "text-2xl",
    "text-3xl",
    { pattern: /^\-?m(\w?)-/ },
    { pattern: /^p(\w?)-/ },
    { pattern: /^text-/ },
    { pattern: /^bg-/ },
    { pattern: /^max-/ },
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
      base: [myTheme.fonts.base, ...defaultTheme.fontFamily.sans],
      display: [myTheme.fonts.display, ...defaultTheme.fontFamily.serif],
      mono: [myTheme.fonts.mono],
    },
    extend: {
      colors: {
        current: "currentColor",
        brand: myTheme.colors.brand,
        secondary: myTheme.colors.secondary,
        accent: myTheme.colors.accent,
        blackish: myTheme.colors.blackish, //not quite black
        whitish: myTheme.colors.whitish, //not quite white
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
