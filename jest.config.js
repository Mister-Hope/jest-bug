const { resolve } = require("path");

module.exports = {
  rootDir: resolve(__dirname),
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "@vuepress/client/.*.js$": "babel-jest",
    "\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(@vuepress/client)/)"],
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
  preset: "ts-jest/presets/js-with-babel",
};
