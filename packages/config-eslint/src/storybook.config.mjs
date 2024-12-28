//@ts-check

import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export const storybookConfig = tseslint.config(
  storybook.configs['flat/recommended'],
  {
    ignores: ['.storybook'],
  },
);
