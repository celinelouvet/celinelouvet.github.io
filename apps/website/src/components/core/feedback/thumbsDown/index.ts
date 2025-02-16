import { type ThemingConfig } from '@chakra-ui/react';

import { thumbsDownSlotRecipe } from './ThumbsDown.slot-recipe';

export { ThumbsDown } from './ThumbsDown';

export const slotRecipe = {
  thumbsDown: thumbsDownSlotRecipe,
} as ThemingConfig['slotRecipes'];
