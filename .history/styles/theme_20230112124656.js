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
  p: "mb-7 max-w-[4000px]",
};

export default myTheme;
