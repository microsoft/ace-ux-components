// @ts-check
/** @type {import('beachball').BeachballConfig}*/
const config = {
  // Compare against this branch
  branch: 'main',
  // Log this message a PR is missing a change file
  changehint: "Run 'npm run change' to generate a change file",
  // Prevent users from creating these change types
  disallowedChangeTypes: ['major', 'prerelease'],
  // Don't require a change file if these files are modified.
  // This should include files that are tracked by git but never affect the published package,
  // such as lint rules, tests, and documentation. (Files such as tsconfig.json which may affect
  // the published build output should probably not be included here.)
  ignorePatterns: [
    'customLintRules/**',
    'documentation/**',
    'scripts/**',
    '**/*.test.ts',
    '.eslintrc.js',
    '.gitignore',
    'babel.config.js', // this appears to only be used for tests?
    'jest.config.js',
    'junit.xml',
    'package-lock.json'
  ],
};
module.exports = config;