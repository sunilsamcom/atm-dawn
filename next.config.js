/** @type {import('next').NextConfig} */
const nextConfig = {
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
