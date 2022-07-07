/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  framework: { name: "shopify_local" },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("next.config.js", JSON.stringify(module.exports, null, 2));

// Original / default config
// module.exports = nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["unsplash.com", "next.config.js"],
//   },
// };
