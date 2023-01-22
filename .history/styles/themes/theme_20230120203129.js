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
  text: {
    h1: "font-display font-medium leading-none text-5xl mt-0 mb-10 text-normal",
    h2: "leading-none text-3xl mt-0 mb-4 font-bold",
    h3: "font-medium leading-none text-lg mb-2 text-primary",
    base: "font-base text-base text-text-normal leading-normal",
    p: "mb-7 max-w-[500px]",
    kicker:
      "mb-1 text-sm leading-6 font-semibold text-secondary dark:text-white",
    link: "text-primary underline",
  },
  page: { basic: "w-full min-h-screen bg-whitish text-blackish" },
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
