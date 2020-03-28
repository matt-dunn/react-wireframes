module.exports = {
  testEnvironment: "node",
  verbose: true,
  setupFiles: ["../test/setupTests.js"],
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "./reports",
      outputName: "junit-e2e.xml",
    }],
  ],
  testPathIgnorePatterns: [
  ],
};
