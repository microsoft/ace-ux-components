#!/usr/bin/env node

const fs = require("fs-extra");

fs.copySync("src/components/assets", "lib/components/assets", /.*(.png|.gif)$/, (err) => {
  console.log("An error occurred while copying assets");
});

console.log("src/components/assets successfully copied to lib/components/assets folder");
