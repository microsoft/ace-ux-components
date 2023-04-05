/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BlockElementDimension, Spacing } from "./Schema.types";
var BaseElement = /** @class */ (function () {
    function BaseElement(type) {
        this.id = "";
        this.isVisible = true;
        this.separator = false;
        this.spacing = Spacing.Default;
        this.width = undefined;
        this.type = type;
    }
    BaseElement.prototype.setID = function (value) {
        this.id = value;
        return this;
    };
    BaseElement.prototype.setIsVisible = function (value) {
        this.isVisible = value;
        return this;
    };
    BaseElement.prototype.setSpacing = function (spacing) {
        this.spacing = spacing;
        return this;
    };
    BaseElement.prototype.shrink = function () {
        this.width = BlockElementDimension.Auto;
        return this;
    };
    BaseElement.prototype.stretch = function () {
        this.width = BlockElementDimension.Stretch;
        return this;
    };
    BaseElement.prototype.useSeparator = function (separator) {
        if (separator === void 0) { separator = true; }
        this.separator = separator;
        return this;
    };
    return BaseElement;
}());
export { BaseElement };
//# sourceMappingURL=BaseElement.js.map