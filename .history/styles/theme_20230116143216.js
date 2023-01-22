const twColors = require("tailwindcss/colors");

/* a Theme is just a list of Tailwind combos (string) that you use often
make any changes here */

const _default = {
  colors: {
    //use these in your tailwind.config to name colors
    //can also set a tw default color here
    primary: twColors.teal[500],
    primaryText: twColors.slate[700],
    primaryLight: twColors.teal[50],
    primaryDark: twColors.teal[700],
    secondary: "#f1f1f1",
  },

  h1: "font-medium leading-none text-5xl mt-0 mb-10 text-normal",
  h2: "font-medium leading-none text-3xl mt-0 mb-4 text-normal",
  h3: "font-medium leading-none text-lg mb-2 text-primary",
  base: "text-base text-text-normal leading-normal",
  p: "mb-7 max-w-[500px]",
  kicker: "mb-1 text-sm leading-6 font-semibold text-teal-600 dark:text-white",
  link: "text-primary underline",

  buttons: {
    primary:
      "inline-block px-6 h-full bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

module.exports = _default;
