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
    fontSize: {
      content: {
        xs: "7px",
        mobile: "11px",
        tablet: "13px",
        laptop: "15px",
        desktop: "19px",
      },
      h3: {
        sm: "11px",
        mobile: "17px",
        tablet: "20px",
        laptop: "22px",
        desktop: "28px",
      },
    },
  },

  extend: {},

  plugins: [require("tw-elements/dist/plugin")],
};
