/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
import { BaseElement } from "./BaseElement";
import { Alignment, ElementType, Height, ImageSize, ImageStyle } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Image.html
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(url, altText) {
        var _this = _super.call(this, ElementType.Image) || this;
        _this.height = Height.Auto;
        _this.horizontalAlignment = Alignment.Left;
        _this.size = ImageSize.Auto;
        _this.style = ImageStyle.Default;
        _this.url = url;
        _this.altText = altText;
        return _this;
    }
    Image.prototype.setAction = function (action) {
        this.selectAction = action;
        return this;
    };
    Image.prototype.setBackgroundColor = function (hexColor) {
        this.backgroundColor = hexColor;
        return this;
    };
    Image.prototype.setHeight = function (height) {
        this.height = height;
        return this;
    };
    Image.prototype.setHorizontalAlignment = function (alignment) {
        this.horizontalAlignment = alignment;
        return this;
    };
    Image.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    Image.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    Image.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };
    return Image;
}(BaseElement));
export { Image };
//# sourceMappingURL=Image.js.map