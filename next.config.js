/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com'],
  },
  reactStrictMode: true,
  eslint: {
    dirs: [
      // Default
      'pages', 'components', 'lib',
      // Extras
      '__tests__', 'cypress', 'types'
    ]
  }
}

module.exports = nextConfig
