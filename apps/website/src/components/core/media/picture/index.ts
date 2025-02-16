import { type ThemingConfig } from '@chakra-ui/react';

import { pictureSlotRecipe } from './Picture.slot-recipe';

export { Picture } from './Picture';

export const slotRecipe = {
  picture: pictureSlotRecipe,
} as ThemingConfig['slotRecipes'];
