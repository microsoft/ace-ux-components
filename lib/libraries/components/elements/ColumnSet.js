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
import { ElementType } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/ColumnSet.html
var ColumnSet = /** @class */ (function (_super) {
    __extends(ColumnSet, _super);
    function ColumnSet(columns) {
        var _this = _super.call(this, ElementType.ColumnSet) || this;
        _this.bleed = false;
        _this.columns = columns;
        return _this;
    }
    ColumnSet.prototype.setAction = function (action) {
        this.selectAction = action;
        return this;
    };
    ColumnSet.prototype.setMinHeight = function (minHeight) {
        this.minHeight = minHeight;
        return this;
    };
    ColumnSet.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    ColumnSet.prototype.setHorizontalAlignment = function (alignment) {
        this.horizontalAlignment = alignment;
        return this;
    };
    ColumnSet.prototype.setData = function (data) {
        this.$data = data;
        return this;
    };
    ColumnSet.prototype.enableBleed = function () {
        this.bleed = true;
        return this;
    };
    return ColumnSet;
}(BaseElement));
export { ColumnSet };
//# sourceMappingURL=ColumnSet.js.map