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
import { IRuleMetadata, RuleFailure, Rules, Utils as LintUtils, WalkContext } from "tslint";
import { isBlock, isIfStatement } from "tsutils";
import { Block, forEachChild, IfStatement, Node, SourceFile, Statement, SyntaxKind } from "typescript";

const OPTION_ALLOW_ELSE_IF = "allow-else-if";

export class Rule extends Rules.AbstractRule {
  public static metadata: IRuleMetadata = {
    description: LintUtils.dedent`
         Disallows \`else\` blocks following \`if\` blocks ending with a \`break\`, \`continue\`, \`return\`, or \`throw\` statement.`,
    descriptionDetails: "",
    optionExamples: [true, [true, { [OPTION_ALLOW_ELSE_IF]: true }]],
    options: {
      type: "object",
      properties: {
        [OPTION_ALLOW_ELSE_IF]: { type: "boolean" },
      },
    },
    optionsDescription: LintUtils.dedent`
             You can optionally specify the option \`"${OPTION_ALLOW_ELSE_IF}"\` to allow "else if" statements.
         `,
    rationale: LintUtils.dedent`
         When an \`if\` block is guaranteed to exit control flow when entered,
         it is unnecessary to add an \`else\` statement.
         The contents that would be in the \`else\` block can be placed after the end of the \`if\` block.`,
    ruleName: "unnecessary-else",
    type: "style",
    typescriptOnly: false,
  };

  public static FAILURE_STRING(name: string): string {
    return `The preceding \`if\` block ends with a \`${name}\` statement. This \`else\` is unnecessary.`;
  }

  public apply(sourceFile: SourceFile): RuleFailure[] {
    return this.applyWithFunction(
      sourceFile,
      walk,
      parseOptions(this.ruleArguments[0] as Partial<IOptions> | undefined)
    );
  }
}

interface IJumpAndIfStatement {
  jumpStatement: string | undefined;
  node: IfStatement;
}

interface IOptions {
  [OPTION_ALLOW_ELSE_IF]: boolean;
}

function parseOptions(option: Partial<IOptions> | undefined): IOptions {
  return {
    [OPTION_ALLOW_ELSE_IF]: false,
    ...option,
  };
}

function walk(ctx: WalkContext<IOptions>): void {
  const ifStatementStack: IJumpAndIfStatement[] = [];

  function visitIfStatement(node: IfStatement) {
    const jumpStatement = isBlock(node.thenStatement)
      ? getJumpStatement(getLastStatement(node.thenStatement))
      : getJumpStatement(node.thenStatement);

    ifStatementStack.push({ node, jumpStatement });

    if (
      jumpStatement !== undefined &&
      node.elseStatement !== undefined &&
      !recentStackParentMissingJumpStatement() &&
      (!isIfStatement(node.elseStatement) || !ctx.options[OPTION_ALLOW_ELSE_IF])
    ) {
      const elseKeyword = getPositionOfElseKeyword(node, SyntaxKind.ElseKeyword);
      ctx.addFailureAtNode(elseKeyword, Rule.FAILURE_STRING(jumpStatement));
    }

    forEachChild(node, visitNode);
    ifStatementStack.pop();
  }

  function recentStackParentMissingJumpStatement() {
    if (ifStatementStack.length <= 1) {
      return false;
    }

    for (let i = ifStatementStack.length - 2; i >= 0; i -= 1) {
      const { jumpStatement, node } = ifStatementStack[i];

      if (node.elseStatement !== ifStatementStack[i + 1].node) {
        return false;
      }

      if (jumpStatement === undefined) {
        return true;
      }
    }

    return false;
  }

  function visitNode(node: Node): void {
    if (isIfStatement(node)) {
      visitIfStatement(node);
    } else {
      forEachChild(node, visitNode);
    }
  }

  forEachChild(ctx.sourceFile, visitNode);
}

function getPositionOfElseKeyword(node: Node, kind: SyntaxKind) {
  return node.getChildren().filter((child) => child.kind === kind)[0];
}

function getJumpStatement(node: Statement | undefined): string | undefined {
  if (node === undefined) {
    return undefined;
  }

  switch (node.kind) {
    case SyntaxKind.BreakStatement:
      return "break";
    case SyntaxKind.ContinueStatement:
      return "continue";
    case SyntaxKind.ThrowStatement:
      return "throw";
    case SyntaxKind.ReturnStatement:
      return "return";
    default:
      return undefined;
  }
}

function getLastStatement(clause: Block): Statement {
  const block = clause.statements[0];
  const statements = clause.statements.length === 1 && isBlock(block) ? block.statements : clause.statements;

  return last(statements);
}

function last<T>(arr: ReadonlyArray<T>): T {
  return arr[arr.length - 1];
}
