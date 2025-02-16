import { type ThemingConfig } from '@chakra-ui/react';

import { quoteSlotRecipe } from './Quote.slot-recipe';

export { Quote } from './Quote';

export const slotRecipe = {
  quote: quoteSlotRecipe,
} as ThemingConfig['slotRecipes'];
