module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: { config: "./tailwind.dev.config.js" },
    autoprefixer: {},
  },
};
