//theme.js
const twColors = require("tailwindcss/colors");
const _default = {
  colors: {
    brand: "#0f766e",
    secondary: "#0e7490",
    accent: "#14b8a6",
    blackish: "#404040",
    whitish: "#fafaf9",
  },
  fonts: {
    base: "Roboto Flex",
    display: "Roboto Flex",
    special: "Oleo Script",
    mono: "Space Mono",
  },
  text: {
    base: "text-base leading-loose font-base text-blackish md:leading-normal",
    heading:
      "text-4xl sm:text-6xl font-display leading-none mt-6 text-blackish font-normal shrink-4",
    subhead:
      "text-xl sm:text-xl font-display leading-none mt-8 font-light text-blackish text-opacity-90",
    h3: "font-base font-semibold leading-none text-secondary mt-7 shrink-0",
    p: "mt-3 max-w-[500px] text-base leading-loose md:leading-normal",
    label: "text-sm font-normal text-opacity-80",
    kicker:
      "text-kicker mb-0 tracking-widest leading-tight text-bold uppercase text-secondary dark:text-white",
    link: "text-secondary underline",
  },
  layout: {
    page: "w-full min-h-screen bg-whitish",
    section: "[object Object]",
    header: "h-20 md:h-24",
    nav: {
      bg: "bg-brand",
      link: "text-gray-100 hover:text-white focus:text-accent",
    },
  },
  buttons: {
    sm: "inline-block px-6 h-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
