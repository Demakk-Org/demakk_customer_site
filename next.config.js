{
  import("next").NextConfig;
}

const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
  i18n,
};
