/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const myTheme = require("./themes/theme");
const {
  HSLToHex,
  hexToHSL,
  ColorObj,
  getTextColorFromHex,
  isValidHexCode,
} = require("./devUtils/colorLib");

//brought in from twColorUtils
const updateVariants = (base, category, passedtheme) => {
  //teal, brand, theme
  //just reset theme variants for one base
  let hex = passedtheme.colors[category];
  let variants = {};
  let keys = [75, 50, 25, 10, 5];
  keys.forEach((key) => {
    let val = getPctOfHex(hex, key);
    let obj = new ColorObj(category, key, val);
    variants[key] = obj;
  });

  if (!passedtheme.hasOwnProperty("variants")) {
    passedtheme.variants = {};
  }
  if (!passedtheme.variants.hasOwnProperty(category)) {
    passedtheme.variants[category] = {};
  }
  passedtheme.variants[category] = variants;
  console.log("variants updated: ", variants);
  return passedtheme;
};

//brought in from twColorUtils
const initVariants = (passedtheme) => {
  // let newtheme = Object.assign({}, passedtheme);

  const myColors = Object.keys(passedtheme.colors);

  for (const idx in myColors) {
    let category = myColors[idx];

    updateVariants(category, category, passedtheme);
  } //end for

  console.log("variants initialized", passedtheme);
  return passedtheme;
};

const getPctOfHex = (hex, pct) => {
  //incoming pct is pct opacity of orig color
  let inverted = 100 - pct;
  //convert incoming to hsl
  let hsl = hexToHSL(hex);

  //current lightness is 0%;
  let currentLightPct = hsl.l;
  let remainingLightPct = 100 - currentLightPct;
  let onepct = remainingLightPct / 100;
  let desiredPct = onepct * inverted + currentLightPct;
  let result = HSLToHex(hsl.h, hsl.s, desiredPct);
  return result;
};

let initializedTheme = initVariants(myTheme);
const getConfigColors = (theme) => {
  let res = {};
  for (const colorname in myTheme.colors) {
    res[colorname] = {};
    res[colorname]["DEFAULT"] = myTheme.colors[colorname];
    let vars = Object.keys(myTheme.variants[colorname]);
    for (const key in myTheme.variants[colorname]) {
      res[key] = myTheme.variats[colorname][key].hex;
    }
  }
  console.log("result:", res);
};

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
        // primary: { ...myShades.primary },
        // secondary: { ...myShades.secondary },
        // blackish: { ...myShades.blackish }, //not quite black
        // whitish: { ...myShades.whitish }, //not quite white
      },
    }, //end extend
  }, //end theme

  plugins: [require("tw-elements/dist/plugin")],
};
