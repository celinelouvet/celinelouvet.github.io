import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import { fixupConfigRules } from "@eslint/compat";

const compat = new FlatCompat();

const importPlugin = compat.extends(
  "plugin:import/recommended",
  "plugin:import/typescript"
);

const nextCoreWebVitals = compat.extends("next/core-web-vitals");
const nextTypescript = compat.extends("next/typescript");

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...importPlugin
);
