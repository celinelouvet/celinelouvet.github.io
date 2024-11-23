import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

const importPlugin = compat.extends(
  "plugin:import/recommended",
  "plugin:import/typescript"
);

const storybookPlugin = compat.extends("plugin:storybook/recommended");

const nextCoreWebVitals = compat.extends("next/core-web-vitals");
const nextTypescript = compat.extends("next/typescript");

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  js.configs.recommended,
  // eslint-disable-next-line import/no-named-as-default-member
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...importPlugin,
  ...storybookPlugin
);
