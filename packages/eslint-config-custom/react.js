const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
  ],

  parserOptions: {
    project,
  },

  globals: {
    JSX: true,
  },

  env: {
    browser: true,
  },

  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],

  plugins: ["simple-import-sort", "import", "unused-imports"],
  rules: { "react/react-in-jsx-scope": "off" },
};
