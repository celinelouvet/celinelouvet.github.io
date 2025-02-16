import { type ThemingConfig } from '@chakra-ui/react';

import { slotRecipe as pictureSlotRecipe } from './picture';
import { slotRecipe as qrCodeSlotRecipe } from './qrCode';

export { Picture } from './picture';
export { QrCode } from './qrCode';

export const mediaSlotRecipes = {
  ...pictureSlotRecipe,
  ...qrCodeSlotRecipe,
} as ThemingConfig['slotRecipes'];
