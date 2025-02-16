import { type ThemingConfig } from '@chakra-ui/react';

import { alertSlotRecipe } from './Alert.slot-recipe';

export const slotRecipe = {
  alert: alertSlotRecipe,
} as ThemingConfig['slotRecipes'];
