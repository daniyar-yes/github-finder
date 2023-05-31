module.exports = {
    testEnvironment: 'jest-environment-jsdom-sixteen',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.history/']
  };