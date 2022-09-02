import { defineConfig } from 'cypress'

export default defineConfig({
  videoCompression: 32,
  video: true,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: false,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
})
