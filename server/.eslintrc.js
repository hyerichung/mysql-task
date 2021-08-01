module.exports = {
  env: {
    commonjs: true,
    browser: false,
    node: true,
  },
  "parser": "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:security/recommended",
    "plugin:mocha/recommended"
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "script",
    ecmaFeatures: {
      "jsx": false,
    },
  },
  rules: {
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "no-unused-vars": "warn",
    "no-var": "error",
    "no-console": "warn",
    "no-debugger": "error",
    "no-plusplus": "off",
    "no-shadow": "off",
    "vars-on-top": "off",
    "no-underscore-dangle": "off",
    "func-names": "off",
    "prefer-template": "off",
    "no-nested-ternary": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "prefer-arrow-callback": "off",
    "require-await": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
        allowShortCircuit: true,
        allowTaggedTemplates: true,
      }
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    semi: ["error", "always"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        functions: "never",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
      }
    ],
    "eol-last": ["error", "always"],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      }
    ],
    "object-curly-spacing": [2, "always"],
    "keyword-spacing": "error",
    "no-multiple-empty-lines": "warn",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      }
    ],
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error",
  },
};
