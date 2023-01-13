const colors = require("tailwindcss/colors");

const myTheme = {
  colors: {
    primary: colors.red[500],
    secondary: colors.green[500],
    accent: colors.yellow[50],
    white: colors.white,
    black: colors.slate[500],
  },
  h1: "font-medium leading-none text-5xl mt-0 mb-10 text-text-normal",
  h2: "font-medium leading-none text-3xl mt-0 mb-8 text-text-normal",
  h3: "font-medium leading-none text-lg mb-7 text-primary",
  base: "text-base text-text-normal leading-normal",
  p: "mb-7 max-w-[500px]",
  buttons: {
    primary:
      "inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out",
  },
};

export default myTheme;
