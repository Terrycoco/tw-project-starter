/** @type {import('next').NextConfig} */

module.exports = {
  ...defaultConfig,
  reactStrictMode: true,
  pageExtensions: ["page.ts", "page.tsx", "page.js", "page.jsx"],
};
