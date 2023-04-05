/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BlockElementDimension, ElementType, Spacing, VerticalAlignment } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Column.html
var Column = /** @class */ (function () {
    function Column(body) {
        this.type = ElementType.Column;
        this.separator = false;
        this.spacing = Spacing.Default;
        this.verticalContentAlignment = VerticalAlignment.Center;
        this.width = undefined;
        this.isVisible = true;
        this.rtl = false;
        this.items = body;
    }
    Column.prototype.setAction = function (action) {
        this.selectAction = action;
        return this;
    };
    Column.prototype.setSpacing = function (spacing) {
        this.spacing = spacing;
        return this;
    };
    Column.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    Column.prototype.setVerticalAlignment = function (alignment) {
        this.verticalContentAlignment = alignment;
        return this;
    };
    Column.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };
    Column.prototype.shrink = function () {
        this.width = BlockElementDimension.Auto;
        return this;
    };
    Column.prototype.stretch = function () {
        this.width = BlockElementDimension.Stretch;
        return this;
    };
    Column.prototype.useSeparator = function (separator) {
        if (separator === void 0) { separator = true; }
        this.separator = separator;
        return this;
    };
    Column.prototype.setRtl = function (rtl) {
        this.rtl = rtl;
        return this;
    };
    Column.prototype.setIsVisible = function (value) {
        this.isVisible = value;
        return this;
    };
    return Column;
}());
export { Column };
//# sourceMappingURL=Column.js.map