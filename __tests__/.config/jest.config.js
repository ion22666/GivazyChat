const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    rootDir: "../",
    testMatch: ["**/*.[jt]s?(x)"],
    setupFilesAfterEnv: ["<rootDir>/.config/jest.setup.js"],
    moduleDirectories: ["node_modules", "<rootDir>/../"],
    testEnvironment: "jest-environment-jsdom",
    testPathIgnorePatterns: [".config/*", ".tools/*", "coverage/*"],
};

module.exports = createJestConfig(customJestConfig);
