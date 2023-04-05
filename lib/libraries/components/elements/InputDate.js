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
import { BaseInputElement } from "./BaseInputElement";
import { ElementType } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Input.Date.html
var InputDate = /** @class */ (function (_super) {
    __extends(InputDate, _super);
    function InputDate(id, initialValue) {
        var _this = _super.call(this, ElementType.InputDate) || this;
        _this.id = id;
        _this.value = _this.formatDate(initialValue);
        return _this;
    }
    InputDate.prototype.setMax = function (maxValue) {
        this.max = this.formatDate(maxValue);
        return this;
    };
    InputDate.prototype.setMin = function (minValue) {
        this.min = this.formatDate(minValue);
        return this;
    };
    InputDate.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        return this;
    };
    InputDate.prototype.formatDate = function (date) {
        return date.toISOString().slice(0, 10);
    };
    return InputDate;
}(BaseInputElement));
export { InputDate };
//# sourceMappingURL=InputDate.js.map