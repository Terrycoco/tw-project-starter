const configFile =
  process.env.NODE_ENV === "development"
    ? "./tailwind.dev.config.js"
    : "./tailwind.config.js";

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: { config: configFile },
    autoprefixer: {},
  },
};
