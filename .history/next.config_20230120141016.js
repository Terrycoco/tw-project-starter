/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx"]
    .map((extension) => {
      const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
      const prodExtension = `(?<!dev\.)${extension}`;
      const devExtension = `dev\.${extension}`;
      return isDevServer ? [devExtension, extension] : prodExtension;
    })
    .flat(),
});
