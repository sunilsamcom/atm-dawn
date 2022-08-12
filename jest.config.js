const nextJest = require('next/jest')
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleNameMapper: {
        // "@app/(.*)": '<rootDir>/$1'
        "^@app/pages/(.*)$": '<rootDir>/pages/$1',
        "^@app/components/(.*)$": '<rootDir>/components/$1',
        "^@app/styles/(.*)$": '<rootDir>/styles/$1'
    },
    testEnvironment: 'jest-environment-jsdom',
    // Enable jest-dom custom jest matchers for asserting on DOM nodes
    "setupFilesAfterEnv": [
        "<rootDir>/setupTests.js"
    ],
    testMatch: [
        "**/__tests__/**/*.(tsx|js)"
    ]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
