var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BaseElement } from "./BaseElement";
import { ElementType, FontType, TextBlockStyle } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/TextBlock.html
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock(text) {
        var _this = _super.call(this, ElementType.TextBlock) || this;
        _this.style = TextBlockStyle.Default;
        _this.wrap = false;
        _this.text = text;
        return _this;
    }
    TextBlock.prototype.enableSubtle = function () {
        this.isSubtle = true;
        return this;
    };
    TextBlock.prototype.enableWrap = function () {
        this.wrap = true;
        return this;
    };
    TextBlock.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    TextBlock.prototype.setFontTypeToMonospace = function () {
        this.fontType = FontType.Monospace;
        return this;
    };
    TextBlock.prototype.setHorizontalAlignment = function (alignment) {
        this.horizontalAlignment = alignment;
        return this;
    };
    TextBlock.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    TextBlock.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    TextBlock.prototype.useBinding = function (binding) {
        this.text = "${" + binding + "}";
        return this;
    };
    TextBlock.prototype.useMultiline = function (maxLines) {
        this.maxLines = maxLines;
        return this;
    };
    TextBlock.prototype.setStyle = function (textBlockStyle) {
        this.style = textBlockStyle;
        return this;
    };
    return TextBlock;
}(BaseElement));
export { TextBlock };
//# sourceMappingURL=TextBlock.js.map