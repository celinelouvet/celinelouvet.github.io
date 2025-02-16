//@ts-check

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export const reactConfig = tseslint.config(
  // react-hooks
  fixupConfigRules(
    compat.config({
      extends: ['plugin:react-hooks/recommended'],
      rules: {
        'react-hooks/exhaustive-deps': 'error',
      },
    }),
  ),

  // react-refresh
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // ts parser
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
    },
  },

  {
    files: ['**/*.tsx'],
    rules: {
      'import-x/no-named-as-default-member': 'off',
    },
  },
);
