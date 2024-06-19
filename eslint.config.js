import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
import rushstackConfig from "@rushstack/eslint-config/profile/web-app.js";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
  {
    ignores: ["dist", "eslint.config.js"],
  },
  // react
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
      "react-hooks": reactHooksPlugin,
      "eslint-comments": eslintCommentsPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...rushstackConfig.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-var": "error",
      "eslint-comments/no-unused-disable": "error",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // react-refresh
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // jsx-ally
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      // jsx-ally rule 여기에 추가
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
