const globals = require("globals")
// 'import' is ambiguous & prettier has trouble
// const imprt = require("eslint-plugin-import")
const react = require("eslint-plugin-react")
const reactHooks = require("eslint-plugin-react-hooks")
const typescript = require("@typescript-eslint/eslint-plugin")
const typescriptParser = require("@typescript-eslint/parser")

module.exports = [
  {
    files: ["app/**/*.{js,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": typescript,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // when spreading rules, the order matters, e.g. jsx-runtime overrides
      // some of the recommended rules
      ...react.configs["recommended"].rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs["recommended"].rules,
      ...typescript.configs["eslint-recommended"].rules,
      ...typescript.configs["recommended"].rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
