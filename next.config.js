/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com','images.unsplash.com'],
  },
  reactStrictMode: true,
  eslint: {
    dirs: [
      // Default
      "pages",
      "components",
      "lib",
      // Extras
      "__tests__",
      "cypress",
      "types",
    ],
  },
  i18n: {
    locales: ["en", "ar", "pt", "pseudo"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
