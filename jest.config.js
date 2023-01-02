module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: 'ts-jest/presets/js-with-babel',
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/__tests__/**/*.ts'
  ],
  testRegex: ".*.spec\.ts$"
};