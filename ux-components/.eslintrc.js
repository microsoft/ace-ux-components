/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

require("@rushstack/eslint-config/patch/modern-module-resolution");
module.exports = {
  extends: ["@microsoft/eslint-config-spfx/lib/profiles/default"],
  parserOptions: { tsconfigRootDir: __dirname },
};
