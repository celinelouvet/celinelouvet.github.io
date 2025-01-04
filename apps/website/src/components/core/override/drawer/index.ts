import { type ThemingConfig } from '@chakra-ui/react';

import { drawerSlotRecipe } from './Drawer.slot-recipe';

export const slotRecipe = {
  drawer: drawerSlotRecipe,
} as ThemingConfig['slotRecipes'];

export * as Drawer from './Drawer.override';
