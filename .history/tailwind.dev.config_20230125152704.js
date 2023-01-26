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
        "10px": ".625rem",
        "12px": ".75rem",
        "14px": ".875rem",
        "16px": "1rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "28px": "1.75rem",
        "34px": "2.125rem",
        "48px": "3rem",
        "60px": "3.75rem",
        "72px": "4.5rem",
        "96px": "6rem",
        h1: [
          "4.5rem",
          {
            lineHeight: "1rem",
            fontStretch: "190%",
            fontWeight: "300",
          },
        ],
      }, //end fontsize
      // '3xl': ['1.875rem', {
      //   lineHeight: '2.25rem',
      //   letterSpacing: '-0.02em',
      //   fontWeight: '700',
      // }],
    }, //end extend
  }, //end theme

  plugins: [require("tw-elements/dist/plugin")],
};
