"use strict";

var fs = require("fs");
const build = require("@microsoft/sp-build-web");
const gulp = require("gulp");
const coreBuild = require("@microsoft/gulp-core-build");
const path = require("path");
const bundleAnalyzer = require("webpack-bundle-analyzer");

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

const SERVER_IP = "";
const enable_instant_refresh = true;

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);
  result.set("serve", result.get("serve-deprecated"));
  return result;
};

build.rig.addPostBundleTask(
  coreBuild.subTask("custom-gulp-task", function () {
    enable_instant_refresh && SERVER_IP && replaceAddress(SERVER_IP);
    return Promise.resolve();
  })
);

const replaceAddress = (publicAddress) => {
  const files = ["temp/manifests.js", "temp/manifests.json"];
  for (var i = 0; i < files.length; i++) {
    const filename = files[i];
    fs.readFile(filename, "utf8", function (err, data) {
      if (err) {
        return build.log(err);
      }
      var result = data.replace(/https?:\/\/localhost:4321/g, publicAddress);

      fs.writeFile(filename, result, "utf8", function (err) {
        if (err) {
          return build.log(err);
        } else {
          removeSPAdaptiveBaseReference();
        }
      });
    });
  }
};

const removeSPAdaptiveBaseReference = () => {
  const fileName = "temp/manifests.js";

  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) return build.log(err);
    let newData = removeObjectReference(data, "SpAdaptiveCardBase");

    fs.writeFile(fileName, newData, "utf8", function (err) {
      if (err) {
        return build.log(err);
      }
    });
  });
};

function removeObjectReference(code = "", key = "") {
  let codeCopy;
  debugger;
  if (code && key && code.indexOf(key) !== -1) {
    let index = code.indexOf(key);
    let openingBracesIndex;
    let closingBraceIndex;
    let foundBothIndex = false;
    // find the first opening braces
    while (index >= 0) {
      let char = code[index];
      if (char === "{") {
        openingBracesIndex = index;
        // now find the closing brace
        let stack = ["{"];
        index = index + 1;
        while (index < code.length && !foundBothIndex) {
          if (code[index] === "{") {
            stack.push(code[index]);
          }
          if (code[index] === "}") {
            stack.pop();
          }
          if (!stack.length) {
            closingBraceIndex = index;
            foundBothIndex = true;
            break;
          }
          index += 1;
        }
      }
      if (foundBothIndex) {
        codeCopy = code.substr(0, openingBracesIndex) + code.substr(closingBraceIndex + 2);
        break;
      }
      index = index - 1;
    }
  }
  return codeCopy || code;
}
if (process.argv.indexOf("--analyze") !== -1) {
  build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      const lastDirName = path.basename(__dirname);
      const dropPath = path.join(__dirname, "temp", "stats");
      generatedConfiguration.plugins.push(
        new bundleAnalyzer.BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: "static",
          reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
          generateStatsFile: true,
          statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
          logLevel: "error",
        })
      );

      return generatedConfiguration;
    },
  });
}

// Reverting this since it doesn't support SPFx 1.16.
// When adding this back, re-add "spfx-fast-serve-helpers" to our devDependencies

// /* fast-serve */
// const { addFastServe } = require("spfx-fast-serve-helpers");
// addFastServe(build);
// /* end of fast-serve */

build.initialize(gulp);

// ngrok http https://localhost:4321
// SHAREPOINT_QUERY_STRING (To be appended to SharePoint dashboard web): ?debug=true&noredir=true&debugManifestsFile=https://0c99-122-171-34-24.ngrok.io/temp/manifests.js
// BRIDGE_QUERY_STRING (To be appended to the bridge url): &debug=true&noredir=true&debugManifestsFile=NGROK_HTTPS_URL/temp/manifests.js
