import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { coreRecipes, coreSlotRecipes } from '@/components/core';

import { globalCss } from './global-css.config';
import { semanticTokens } from './semantic-tokens.config';
import { tokens } from './tokens.config';

const config = defineConfig({
  globalCss,
  theme: {
    semanticTokens,
    tokens,

    recipes: {
      ...coreRecipes,
    },
    slotRecipes: {
      ...coreSlotRecipes,
    },
  },
});

export const system = createSystem(defaultConfig, config);
