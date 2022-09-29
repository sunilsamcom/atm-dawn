const path = require('path');
module.exports = {
    "stories": [
      '../stories/**/*.@(js|jsx|ts|tsx)',
      '../stories/**/*.stories.mdx',
      '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

    '@storybook/addon-controls',
    {

      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@app/components": path.resolve(__dirname, "../components"),
      "@app/pages": path.resolve(__dirname, "../pages"),
      "@app/services": path.resolve(__dirname, "../services"),
      "@app/styles": path.resolve(__dirname, "../styles"),
      "@app/public": path.resolve(__dirname, "../public"),
      "@app/types": path.resolve(__dirname, "../types"),
      "@app/config": path.resolve(__dirname, "../config"),
    }
    return config
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
