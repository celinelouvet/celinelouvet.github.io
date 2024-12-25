//@ts-check

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint, { configs as tsConfigs } from 'typescript-eslint';

const compat = new FlatCompat();

export default tseslint.config(
  { files: ['**/*.{js,mjs,mts,ts,tsx}'] },

  js.configs.recommended,
  ...storybook.configs['flat/recommended'],

  ...tsConfigs.recommended.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,mts}'],
  })),

  // import
  ...compat.extends(
    'plugin:import-x/recommended',
    'plugin:import-x/typescript',
  ),
  {
    rules: {
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],

      'import-x/order': [
        'error',
        {
          groups: [
            'builtin', // Built-in imports (come from NodeJS native) go first
            'external', // <- External imports
            'internal', // <- Absolute imports
            ['parent', 'sibling'], // <- Relative imports, the sibling and parent types they can be mingled together
            'index', // <- index imports
            'unknown', // <- unknown
          ],
          'newlines-between': 'always',
          alphabetize: {
            /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
            order: 'asc',
            /* ignore case. Options: [true, false] */
            caseInsensitive: true,
          },
        },
      ],
    },
  },

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
    files: ['**/*.{ts,tsx,mts}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // custom rules
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    rules: {
      'no-irregular-whitespace': 'off',
      // semi: ["error", "never"],
    },
  },
  {
    files: ['**/*.{ts,tsx,mts}'],
    rules: {
      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  },
  { ignores: ['dist', '.storybook'] },
);
