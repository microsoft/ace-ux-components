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
// For more info: https://adaptivecards.io/explorer/ActionSet.html
var ActionSet = /** @class */ (function (_super) {
    __extends(ActionSet, _super);
    function ActionSet(actions) {
        var _this = _super.call(this, ElementType.ActionSet) || this;
        _this.actions = actions;
        return _this;
    }
    return ActionSet;
}(BaseElement));
export { ActionSet };
//# sourceMappingURL=ActionSet.js.map