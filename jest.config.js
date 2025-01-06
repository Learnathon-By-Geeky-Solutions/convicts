import nextJest from "next/jest.js";

const createJestConfig = nextJest();

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);
