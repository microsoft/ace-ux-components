/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ActionMode, ActionStyle } from "./Schema.types";
var BaseActionElement = /** @class */ (function () {
    function BaseActionElement(type, id, title, tooltip) {
        this.style = ActionStyle.Default;
        this.mode = ActionMode.Primary;
        this.isEnabled = true;
        this.id = id;
        this.title = title;
        this.tooltip = tooltip ? tooltip : title;
        this.type = type;
    }
    BaseActionElement.prototype.setIconUrl = function (url) {
        this.iconUrl = url;
        return this;
    };
    BaseActionElement.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    BaseActionElement.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    BaseActionElement.prototype.setIsEnabled = function (isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    };
    return BaseActionElement;
}());
export { BaseActionElement };
//# sourceMappingURL=BaseActionElement.js.map