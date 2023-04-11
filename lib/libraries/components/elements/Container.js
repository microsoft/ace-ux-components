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
import { ElementType, VerticalAlignment } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Container.html
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(items) {
        var _this = _super.call(this, ElementType.Container) || this;
        _this.bleed = false;
        _this.items = [];
        _this.verticalContentAlignment = VerticalAlignment.Center;
        _this.rtl = false;
        _this.items = items;
        return _this;
    }
    Container.prototype.enableBleed = function () {
        this.bleed = true;
        return this;
    };
    Container.prototype.setAction = function (action) {
        this.selectAction = action;
        return this;
    };
    Container.prototype.setBackgroundImage = function (uri) {
        this.backgroundImage = uri;
        return this;
    };
    Container.prototype.setHeight = function (height) {
        this.height = height;
        return this;
    };
    Container.prototype.setMinHeight = function (minHeight) {
        this.minHeight = minHeight;
        return this;
    };
    Container.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    Container.prototype.setVerticalAlignment = function (alignment) {
        this.verticalContentAlignment = alignment;
        return this;
    };
    Container.prototype.setRtl = function (rtl) {
        this.rtl = rtl;
        return this;
    };
    Container.prototype.updateItems = function (items) {
        this.items = items;
    };
    return Container;
}(BaseElement));
export { Container };
//# sourceMappingURL=Container.js.map