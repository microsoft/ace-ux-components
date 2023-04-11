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
// For more info: https://adaptivecards.io/explorer/Input.Number.html
var InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber(id, initialValue) {
        var _this = _super.call(this, ElementType.InputNumber) || this;
        _this.id = id;
        _this.value = initialValue;
        return _this;
    }
    InputNumber.prototype.setMax = function (maxValue) {
        this.max = maxValue;
        return this;
    };
    InputNumber.prototype.setMin = function (minValue) {
        this.min = minValue;
        return this;
    };
    InputNumber.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        return this;
    };
    return InputNumber;
}(BaseInputElement));
export { InputNumber };
//# sourceMappingURL=InputNumber.js.map