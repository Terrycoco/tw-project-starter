/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const myTheme = require("./styles/theme");

console.log("mytheme: ", myTheme);

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
          light: "#ffe3e9",
          DEFAULT: myTheme.colors.primary,
          dark: "#8d0e48",
        },
        secondary: {
          light: "#ffe2d4",
          DEFAULT: "#fd3712",
          dark: "#7e1010",
        },
      },
      textColor: {
        light: "#cbd5e1",
        normal: "#64748b",
        dark: "#1e293b",
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};
