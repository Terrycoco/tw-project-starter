//theme.js
const twColors = require("tailwindcss/colors");
const _default = {
  colors: {
    brand: "#0f766e",
    secondary: "#0e7490",
    accent: "#06b6d4",
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
      "text-4xl sm:text-5xl font-display leading-none mb-5 text-blackish font-normal",
    subhead:
      "text-2xl sm:text-3xl font-display leading-snug mb-8 -mt-1 font-light text-blackish text-opacity-90",
    h3: "font-base font-semibold leading-none text-secondary mb-3 pt-6 ",
    p: "mb-3 max-w-md text-base leading-loose md:leading-normal",
    label: "text-xs font-normal text-opacity-80 pt-2",
    kicker:
      "italic tracking-wide leading-tight font-normal uppercase text-brand dark:text-white text-sm pb-2",
    subtext: "text-xs text-medium -mt-3",
    link: "text-secondary underline",
    navlink: "text-whitish hover:text-accent",
  },
  layout: {
    page: "w-screen min-h-screen mx-auto",
    header: "bg-brand text-whitish hover:text-accent h-12 md:h-22",
    section: "container m-6 p-6 mx-auto max-w-5xl",
    footer: "bg-gray-300 text-blackish",
  },
  buttons: {
    sm: "inline-block px-6 h-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
