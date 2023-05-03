#!/usr/bin/env node

const fs = require("fs-extra");

fs.copySync(
  "patches/@types/jest-diff/diffLines.d.ts",
  "node_modules/@types/jest/node_modules/jest-diff/build/diffLines.d.ts"
);

console.log("patch[@types/jest-diff]: diffLines.d.ts successfully patched");

fs.copySync("patches/@types/jest-diff/index.d.ts", "node_modules/@types/jest/node_modules/jest-diff/build/index.d.ts");

console.log("patch[@types/jest-diff]: index.d.ts successfully patched");

fs.copySync(
  "patches/@types/jest-diff/printDiffs.d.ts",
  "node_modules/@types/jest/node_modules/jest-diff/build/printDiffs.d.ts"
);

console.log("patch[@types/jest-diff]: printDiffs.d.ts successfully patched");
