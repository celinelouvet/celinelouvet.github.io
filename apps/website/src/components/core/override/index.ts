import { type ThemingConfig } from '@chakra-ui/react';

import { slotRecipe as alertSlotRecipe } from './alert';
import { recipe as buttonRecipe } from './button';
import { slotRecipe as cardSlotRecipe } from './card';
import { recipe as closeButtonRecipe } from './closeButton';
import { recipe as codeRecipe } from './code';
import { slotRecipe as drawerSlotRecipe } from './drawer';
import { recipe as iconButtonRecipe } from './iconButton';
import { recipe as linkRecipe } from './link';
import { slotRecipe as tagSlotRecipe } from './tag';

export const overrideRecipes = {
  ...buttonRecipe,
  ...closeButtonRecipe,
  ...codeRecipe,
  ...iconButtonRecipe,
  ...linkRecipe,
} as ThemingConfig['recipes'];

export const overrideSlotRecipes = {
  ...alertSlotRecipe,
  ...cardSlotRecipe,
  ...drawerSlotRecipe,
  ...tagSlotRecipe,
} as ThemingConfig['slotRecipes'];

export { CloseButton } from './closeButton';
