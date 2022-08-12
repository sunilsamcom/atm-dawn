import { defineConfig } from 'cypress'

export default defineConfig({
  videoCompression: 32,
  video: true,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: false,
  trashAssetsBeforeRuns: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
