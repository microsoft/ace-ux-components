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
// For more info: https://adaptivecards.io/explorer/Input.Time.html
var InputTime = /** @class */ (function (_super) {
    __extends(InputTime, _super);
    function InputTime(id, initialValue) {
        var _this = _super.call(this, ElementType.InputTime) || this;
        _this.id = id;
        _this.value = initialValue;
        return _this;
    }
    InputTime.prototype.setMax = function (maxValue) {
        this.max = maxValue;
        return this;
    };
    InputTime.prototype.setMin = function (minValue) {
        this.min = minValue;
        return this;
    };
    InputTime.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        return this;
    };
    return InputTime;
}(BaseInputElement));
export { InputTime };
//# sourceMappingURL=InputTime.js.map