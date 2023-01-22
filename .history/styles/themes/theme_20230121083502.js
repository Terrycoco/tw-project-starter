//theme.js
const twColors = require("tailwindcss/colors");
const _default = {
  colors: {
    brand: "#0f766e",
    secondary: "#0A4C82",
    accent: "#facc15",
    blackish: "#334155",
    whitish: "#fafaf9",
  },
  fonts: {
    base: "var(--font-raleway)",
    display: "var(--font-playfair-display)",
    mono: "var(--font-space-mono)",
  },
  text: {
    h1: "font-display font-medium leading-none text-5xl mt-6 text-blackish",
    h2: "leading-none text-3xl mt-8 font-bold",
    h3: "font-medium leading-none text-lg text-secondary font-bold mt-7",
    base: "font-base text-base text-text-normal leading-normal",
    p: "mt-3 max-w-[500px]",
    kicker:
      "mb-0 text-sm leading-tight font-semibold text-secondary dark:text-white",
    link: "text-secondary underline",
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
