import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Include these files
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: parser, // Use the imported parser directly
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"], // Ignore these folders
  },
];

export default eslintConfig;