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
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        current: "currentColor",
        brand: myTheme.colors.brand,
        secondary: myTheme.colors.secondary,
        accent: myTheme.colors.accent,
        blackish: myTheme.colors.blackish, //for text or bg
        whitish: myTheme.colors.whitish, //for text or background
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
