"use strict";
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var _a, _b;
exports.__esModule = true;
/**
 * @license
 * Copyright 2019 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tsutils_1 = require("tsutils");
var typescript_1 = require("typescript");
var tslint_1 = require("tslint");
var OPTION_ALLOW_ELSE_IF = "allow-else-if";
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.FAILURE_STRING = function (name) {
        return "The preceding `if` block ends with a `" + name + "` statement. This `else` is unnecessary.";
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, parseOptions(this.ruleArguments[0]));
    };
    Rule.metadata = {
        description: tslint_1.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n         Disallows `else` blocks following `if` blocks ending with a `break`, `continue`, `return`, or `throw` statement."], ["\n         Disallows \\`else\\` blocks following \\`if\\` blocks ending with a \\`break\\`, \\`continue\\`, \\`return\\`, or \\`throw\\` statement."]))),
        descriptionDetails: "",
        optionExamples: [true, [true, (_a = {}, _a[OPTION_ALLOW_ELSE_IF] = true, _a)]],
        options: {
            type: "object",
            properties: (_b = {},
                _b[OPTION_ALLOW_ELSE_IF] = { type: "boolean" },
                _b)
        },
        optionsDescription: tslint_1.Utils.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n             You can optionally specify the option `\"", "\"` to allow \"else if\" statements.\n         "], ["\n             You can optionally specify the option \\`\"", "\"\\` to allow \"else if\" statements.\n         "])), OPTION_ALLOW_ELSE_IF),
        rationale: tslint_1.Utils.dedent(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n         When an `if` block is guaranteed to exit control flow when entered,\n         it is unnecessary to add an `else` statement.\n         The contents that would be in the `else` block can be placed after the end of the `if` block."], ["\n         When an \\`if\\` block is guaranteed to exit control flow when entered,\n         it is unnecessary to add an \\`else\\` statement.\n         The contents that would be in the \\`else\\` block can be placed after the end of the \\`if\\` block."]))),
        ruleName: "unnecessary-else",
        type: "style",
        typescriptOnly: false
    };
    return Rule;
}(tslint_1.Rules.AbstractRule));
exports.Rule = Rule;
function parseOptions(option) {
    var _a;
    return __assign((_a = {}, _a[OPTION_ALLOW_ELSE_IF] = false, _a), option);
}
function walk(ctx) {
    var ifStatementStack = [];
    function visitIfStatement(node) {
        var jumpStatement = tsutils_1.isBlock(node.thenStatement)
            ? getJumpStatement(getLastStatement(node.thenStatement))
            : getJumpStatement(node.thenStatement);
        ifStatementStack.push({ node: node, jumpStatement: jumpStatement });
        if (jumpStatement !== undefined &&
            node.elseStatement !== undefined &&
            !recentStackParentMissingJumpStatement() &&
            (!tsutils_1.isIfStatement(node.elseStatement) || !ctx.options[OPTION_ALLOW_ELSE_IF])) {
            var elseKeyword = getPositionOfElseKeyword(node, typescript_1.SyntaxKind.ElseKeyword);
            ctx.addFailureAtNode(elseKeyword, Rule.FAILURE_STRING(jumpStatement));
        }
        typescript_1.forEachChild(node, visitNode);
        ifStatementStack.pop();
    }
    function recentStackParentMissingJumpStatement() {
        if (ifStatementStack.length <= 1) {
            return false;
        }
        for (var i = ifStatementStack.length - 2; i >= 0; i -= 1) {
            var _a = ifStatementStack[i], jumpStatement = _a.jumpStatement, node = _a.node;
            if (node.elseStatement !== ifStatementStack[i + 1].node) {
                return false;
            }
            if (jumpStatement === undefined) {
                return true;
            }
        }
        return false;
    }
    function visitNode(node) {
        if (tsutils_1.isIfStatement(node)) {
            visitIfStatement(node);
        }
        else {
            typescript_1.forEachChild(node, visitNode);
        }
    }
    typescript_1.forEachChild(ctx.sourceFile, visitNode);
}
function getPositionOfElseKeyword(node, kind) {
    return node.getChildren().filter(function (child) { return child.kind === kind; })[0];
}
function getJumpStatement(node) {
    if (node === undefined) {
        return undefined;
    }
    switch (node.kind) {
        case typescript_1.SyntaxKind.BreakStatement:
            return "break";
        case typescript_1.SyntaxKind.ContinueStatement:
            return "continue";
        case typescript_1.SyntaxKind.ThrowStatement:
            return "throw";
        case typescript_1.SyntaxKind.ReturnStatement:
            return "return";
        default:
            return undefined;
    }
}
function getLastStatement(clause) {
    var block = clause.statements[0];
    var statements = clause.statements.length === 1 && tsutils_1.isBlock(block) ? block.statements : clause.statements;
    return last(statements);
}
function last(arr) {
    return arr[arr.length - 1];
}
var templateObject_1, templateObject_2, templateObject_3;
