// const tailwindConfig = require("./styles/tailwind.config");

// module.exports = tailwindConfig;


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
      mobile: "640px", //xs
      tablet: "768px",  //sm
      laptop: "1024px",  //md
      desktop: "1280px", //lg
      xl: "1536px",    //xl
    },
    extend: {
      colors: {
        pri