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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { BaseActionElement } from "./BaseActionElement";
import { ActionType, AssociatedInputs } from "./Schema.types";
// For more info: https://adaptivecards.io/explorer/Action.Submit.html
var ActionSubmit = /** @class */ (function (_super) {
    __extends(ActionSubmit, _super);
    function ActionSubmit(id, title, data, toolTip) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, ActionType.Submit, id, title, toolTip) || this;
        _this.associatedInputs = AssociatedInputs.Auto;
        var extraData = data ? data : {};
        _this.data = __assign({ id: id }, extraData);
        return _this;
    }
    ActionSubmit.prototype.setAssociatedInputs = function (associatedInputs) {
        this.associatedInputs = associatedInputs;
        return this;
    };
    return ActionSubmit;
}(BaseActionElement));
export { ActionSubmit };
//# sourceMappingURL=ActionSubmit.js.map