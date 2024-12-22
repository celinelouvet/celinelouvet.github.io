import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint, { configs as tseslintConfigs } from "typescript-eslint";
import storybook from "eslint-plugin-storybook";

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

  ...tseslintConfigs.recommended,
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...importPlugin,
  ...storybook.configs["flat/recommended"],

  {
    ignores: ["!.storybook"],
  }
);
