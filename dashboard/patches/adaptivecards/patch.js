#!/usr/bin/env node

const fs = require("fs-extra");

fs.copySync("patches/adaptivecards/schema.d.ts", "node_modules/adaptivecards/lib/schema.d.ts");
fs.copySync(
  "patches/adaptivecards/schema.d.ts",
  "node_modules/@microsoft/sp-adaptive-card-extension-base/node_modules/adaptivecards/lib/schema.d.ts"
);
fs.copySync(
  "patches/adaptivecards/schema.d.ts",
  "../ace-ux-components/node_modules/@microsoft/sp-adaptive-card-extension-base/node_modules/adaptivecards/lib/schema.d.ts"
);

console.log("patch[adaptivecards]: schema.d.ts successfully patched");
