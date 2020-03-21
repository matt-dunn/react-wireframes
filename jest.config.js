module.exports = {
  testEnvironment: "node",
  verbose: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/*.stories.*",
    "!**/dist/**",
    "!**/test/**",
    "!**/*.d.ts",
  ],
  coverageDirectory: "./reports/coverage",
  setupFiles: ["./test/setupTests.js"],
  // setupFilesAfterEnv: ["./test/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer", "jest-emotion"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "./reports" }],
  ],
  testPathIgnorePatterns: [
    "/e2e/",
    "/cypress/",
    "/dist/",
    "/node_modules",
  ],
};
