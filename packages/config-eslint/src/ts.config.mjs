//@ts-check

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint, { configs as tsConfigs } from 'typescript-eslint';

const compat = new FlatCompat();

export const tsConfig = tseslint.config(
  { files: ['**/*.{js,mjs,mts,ts,tsx}'] },

  js.configs.recommended,

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
  { ignores: ['dist'] },
);
