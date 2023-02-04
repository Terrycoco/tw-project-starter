/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const myTheme = require("./themes/theme");
const initVariants = require("./devUtils/twColorUtils").initVariants;

const myShades = {};
const myColors = Object.keys(myTheme.colors);
const keys = Object.keys(shadeVals);

const loadShades = () => {
  myColors.forEach((color) => {
    let hex = myTheme.colors[color];
    myShades[color] = {};
    // myShades[color][500] = myTheme.colors[color];
    myShades[color].DEFAULT = myTheme.colors[color];
    keys.forEach((key, idx) => {
      // console.log(`${color} ${key} ${shadeVals[key]}`);
      myShades[color][key] = lightenDarkenColor(hex, shadeVals[key]);
    });
  });
  //console.log("brand?", myShades.brand);
};

loadShades();
//console.log(myShades);

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
    "italic",
    "uppercase",
    "lowercase",
    "text-xs",
    "text-sm",
    "text-md",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",
    "text-8xl",
    "text-9xl",
    "max-w-96",
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
      xs: "640px", //horiz mobile
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
        primary: { ...myShades.brand },
        secondary: { ...myShades.secondary },
        blackish: { ...myShades.blackish }, //not quite black
        whitish: { ...myShades.whitish }, //not quite white
      },
    }, //end extend
  }, //end theme

  plugins: [require("tw-elements/dist/plugin")],
};
