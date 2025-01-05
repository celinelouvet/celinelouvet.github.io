import { type ThemingConfig } from '@chakra-ui/react';

import { failureSlotRecipe } from './Failure.slot-recipe';

export { Failure } from './Failure';

export const slotRecipe = {
  failure: failureSlotRecipe,
} as ThemingConfig['slotRecipes'];
