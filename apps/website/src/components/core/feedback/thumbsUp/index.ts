import { type ThemingConfig } from '@chakra-ui/react';

import { thumbsUpSlotRecipe } from './ThumbsUp.slot-recipe';

export { ThumbsUp } from './ThumbsUp';

export const slotRecipe = {
  thumbsUp: thumbsUpSlotRecipe,
} as ThemingConfig['slotRecipes'];
