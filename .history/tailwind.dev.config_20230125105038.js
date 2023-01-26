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
    "italic",
    "uppercase",
    "lowercase",
    { pattern: /^\-?m(\w?)-/ },
    { pattern: /^p(\w?)-/ },
    { pattern: /^text-/ },
    { pattern: /^bg-/ },
    { pattern: /^max-/ },
    { pattern: /^font-/ },
  ],
  theme: {
    screens: {
      //sm mobile is default
      xs: "640px", //large mobile
      sm: "768px", //tablet
      md: "1024px", //laptop
      lg: "1280px", //desktop
      xl: "1536px", //tv
    },
    fontFamily: {
      base: [myTheme.fonts.base],
      display: [myTheme.fonts.display],
      mono: [myTheme.fonts.mono],
      special: [myTheme.fonts.special],
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
      fontSize: {
        //these are based on material ui
        h1: [
          "6rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-1.5em",
            fontWeight: "300",
          },
        ],
        h2: [
          "3.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.5em",
            fontWeight: "300",
          },
        ],
        body: "1rem",
        body2: ".875rem", //secondary text
        subtitle1: "1rem",
        subtitle2: ".875rem",
        button: "1.25rem",
        label: "0.75rem",
        kicker: "0.625",
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
