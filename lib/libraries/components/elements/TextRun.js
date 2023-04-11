/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ElementType, FontColor, FontSize, FontType, FontWeight } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/TextRun.html
var TextRun = /** @class */ (function () {
    function TextRun(text) {
        this.type = ElementType.TextRun;
        this.color = FontColor.Default;
        this.fontType = FontType.Default;
        this.isHighlighted = false;
        this.italic = false;
        this.strikedThrough = false;
        this.isSubtle = false;
        this.size = FontSize.Default;
        this.weight = FontWeight.Default;
        this.text = text;
    }
    TextRun.prototype.enableHighlight = function () {
        this.isHighlighted = true;
        return this;
    };
    TextRun.prototype.enableItalic = function () {
        this.italic = true;
        return this;
    };
    TextRun.prototype.enableStrikedThrough = function () {
        this.strikedThrough = true;
        return this;
    };
    TextRun.prototype.enableSubtle = function () {
        this.isSubtle = true;
        return this;
    };
    TextRun.prototype.enableUnderlined = function () {
        this.underline = true;
        return this;
    };
    TextRun.prototype.setAction = function (action) {
        this.selectAction = action;
        return this;
    };
    TextRun.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    TextRun.prototype.setFontTypeToMonospace = function () {
        this.fontType = FontType.Monospace;
        return this;
    };
    TextRun.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    TextRun.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    return TextRun;
}());
export { TextRun };
//# sourceMappingURL=TextRun.js.map