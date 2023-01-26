//theme.js
const twColors = require("tailwindcss/colors");
const _default = {
  colors: {
    brand: "#0f766e",
    secondary: "#0A4C82",
    accent: "#facc15",
    blackish: "#1e293b",
    whitish: "#fafaf9",
  },
  fonts: {
    base: "Inter",
    display: "Rubik",
    special: "Oleo Script",
    mono: "Space Mono",
  },
  text: {
    base: "font-base text-blackish leading-normal",
    h1: "font-display font-medium leading-none text-5xl mt-6 text-blackish",
    h2: "font-display leading-none text-3xl mt-8 font-bold text-blackish",
    h3: "font-base font-medium leading-none text-lg text-brand font-bold mt-7",
    p: "mt-3 max-w-[500px]",
    kicker:
      "font-special mb-0 text-xl leading-tight font-semibold text-brand dark:text-white",
    link: "text-secondary underline",
  },
  page: { basic: "w-full min-h-screen bg-whitish" },
  section: { full: "w-full", padded: "p-12" },
  nav: {
    bg: "bg-brand",
    link: "text-gray-100 hover:text-white focus:text-accent",
  },
  buttons: {
    sm: "inline-block px-6 h-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
