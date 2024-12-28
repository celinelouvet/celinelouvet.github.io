//@ts-check

import { reactConfig, storybookConfig, tsConfig } from '@repo/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  tsConfig,
  reactConfig,
  storybookConfig,
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
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
);
