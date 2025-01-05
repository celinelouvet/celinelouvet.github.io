import { type ThemingConfig } from '@chakra-ui/react';

import { questionSlotRecipe } from './Question.slot-recipe';

export { Question } from './Question';

export const slotRecipe = {
  question: questionSlotRecipe,
} as ThemingConfig['slotRecipes'];
