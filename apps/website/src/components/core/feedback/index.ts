import { type ThemingConfig } from '@chakra-ui/react';

import { slotRecipe as failureSlotRecipe } from './failure';
import { slotRecipe as questionSlotRecipe } from './question';
import { slotRecipe as quoteSlotRecipe } from './quote';
import { slotRecipe as thumbsDownSlotRecipe } from './thumbsDown';
import { slotRecipe as thumbsUpSlotRecipe } from './thumbsUp';

export { Failure } from './failure';
export { Question } from './question';
export { Quote } from './quote';
export { ThumbsDown } from './thumbsDown';
export { ThumbsUp } from './thumbsUp';
export { Toaster, useToaster } from './toaster';

export const feedbackSlotRecipes = {
  ...failureSlotRecipe,
  ...questionSlotRecipe,
  ...quoteSlotRecipe,
  ...thumbsDownSlotRecipe,
  ...thumbsUpSlotRecipe,
} as ThemingConfig['slotRecipes'];
