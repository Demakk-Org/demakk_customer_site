/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en", "am", "om"],
    defaultLocale: "en",
    localePath:
      typeof window === "undefined"
        ? require("path").resolve("./public/locales")
        : "/locales",
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
