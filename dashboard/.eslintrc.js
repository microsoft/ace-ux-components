module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "eslint-plugin-import",
        "@typescript-eslint",
        "unused-imports",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "root": true,
    "rules": {
        "semi": "error",
        "eol-last": "error",
        "no-console": "off",
        "prefer-const": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 0
            }
        ],
        "no-restricted-exports": [
            "error",
            {
                "restrictedNamedExports": [
                    "then"
                ]
            }
        ],
        "unused-imports/no-unused-imports": "error",
        "no-empty": "off",
        "no-var": "off",
        "no-else-return": "error",
        "no-sparse-arrays": "off",
        "no-unsafe-finally": "off",
        "no-duplicate-case": "off",
        "no-useless-escape": "off",
        "no-case-declarations": "off",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-namespace": "off"
    },
    "ignorePatterns": [
        ".eslintrc.js"
    ],
};
