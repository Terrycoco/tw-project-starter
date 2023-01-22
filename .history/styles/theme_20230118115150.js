const twColors = require("tailwindcss/colors");

/* a Theme is just a list of Tailwind combos (string) that you use often
make any changes here */

const _default = {
  colors: {
    //use these in your tailwind.config to name colors
    //can use twColors or hexcodes
    brand: twColors.teal[700],
    secondary: "#0A4C82",
    accent: "#0f766e",
    blackish: twColors.slate[800],
    whitish: twColors.stone[50],
  },
  text: {
    h1: "font-medium leading-none text-5xl mt-0 mb-10 text-normal",
    h2: "font-medium leading-none text-3xl mt-0 mb-4 font-bold",
    h3: "font-medium leading-none text-lg mb-2 text-primary",
    base: "text-base text-text-normal leading-normal",
    p: "mb-7 max-w-[500px]",
    kicker:
      "mb-1 text-sm leading-6 font-semibold text-secondary dark:text-white",
    link: "text-primary underline",
  },
  page: {
    basic: "w-full min-h-screen bg-whitish text-blackish",
  },
  section: {
    full: "w-full",
    padded: "p-12",
  },
  nav: {
    bg: "bg-brand",
    link: "text-gray-100 hover:text-white focus:text-secondary",
  },

  buttons: {
    primary:
      "inline-block px-6 h-full bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
