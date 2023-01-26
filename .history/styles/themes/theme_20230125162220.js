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
    base: "text-16px font-base text-blackish leading-normal",
    h1: "font-display leading-none text-h1 mt-6 text-blackish font-light shrink-4",
    h2: "font-display leading-none text-60px mt-8 font-light text-blackish shrink-2",
    h3: "font-base font-medium leading-none text-48px text-secondary font-bold mt-7 shrink-0",
    h4: "text-34px",
    h5: "text-24px",
    h6: "text-20px",
    p: "mt-3 max-w-[500px] text-16px",
    label: "text-14px font-normal",
    kicker:
      "font-base mb-0 text-14px tracking-widest leading-tight text-bold uppercase text-secondary dark:text-white",
    link: "text-secondary underline",
  },
  page: { basic: "w-full min-h-screen bg-whitish" },
  section: { full: "w-full", padded: "p-12" },
  nav: {
    bg: "bg-brand",
    link: "text-gray-100 hover:text-white focus:text-accent",
  },
  buttons: {
    accent:
      "inline-block px-6 h-full bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
