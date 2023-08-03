/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  collectCoverageFrom: [
    "./src/**/**.ts",
    "!./src/*(assets|documentation|elements|loadingIndicator|qrCode|baseQuickView|fileAttachment)/**.ts",
    "!./src/createTemplate.ts",
    "!./src/**/index.ts",
    "!./src/getIcon.ts",
    "!./src/index.ts",
    "!./src/picker/PickerListView.ts",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "<rootDir>/jest",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["json", "text", "lcov", "cobertura"],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts"],

  moduleNameMapper: {
    ".+/[a-zA-Z-]+.{1}(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
  },

  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        output: "test-results/junit.xml",
        classNameTemplate: "{classname} - {title}",
        titleTemplate: "{classname} - {title}",
        ancestorSeparator: " > ",
        usePathForSuiteName: "true",
      },
    ],
  ],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/src/**/**.test.ts"],

  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/patches/",
    "<rootDir>/src/weekCalendar/",
    "<rootDir>/src/baseQuickView/",
    "<rootDir>/src/picker/PickerListView.test.ts",
    "<rootDir>/src/fileAttachment/",
    "<rootDir>/lib/",
  ],

  // This option allows the use of a custom results processor
  testResultsProcessor: "jest-junit",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(ts)$": "ts-jest",
  },

  transformIgnorePatterns: ["node_modules/(?!jest|lodash-es)"],
};
