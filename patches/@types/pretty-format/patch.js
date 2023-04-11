#!/usr/bin/env node

const fs = require("fs-extra");

fs.copySync(
  "patches/@types/pretty-format/index.d.ts",
  "node_modules/@types/jest/node_modules/pretty-format/build/index.d.ts"
);

console.log("patch[@types/pretty-format]: index.d.ts successfully patched");
