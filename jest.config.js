import nextJest from "next/jest.js"

const createJestConfig = nextJest()

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  prettierPath: "<rootDir>/node_modules/prettier",
}

export default createJestConfig(config)
