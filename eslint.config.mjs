import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Inclure ces fichiers
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "dist/**"], // Ignorer ces dossiers
  },
];

export default eslintConfig;