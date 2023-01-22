/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: withOnlyDev([
    "page.js",
    "page.jsx",
    "page.ts",
    "page.tsx",
    "page.md",
    "page.mdx",
  ]),
};

module.exports = nextConfig;

const withOnlyDev = (config) => {
  if (process.env.NODE_ENV !== "development") {
    return config;
  }
  if (config instanceof RegExp) {
    return new RegExp(config.source.replace("page", "(page|dev)"));
  }

  let res = [];
  config.forEach((item) => {
    res.push(item);
    res.push(item.replace("page", "dev"));
  });

  return res;
};
