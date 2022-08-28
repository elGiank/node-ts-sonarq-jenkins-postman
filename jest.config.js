module.exports = {
  testEnvironment: 'node',
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
     "!**/node_modules/**",
  ],
  testResultsProcessor: "jest-sonar-reporter",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
}
