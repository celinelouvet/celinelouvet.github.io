import { type ThemingConfig } from '@chakra-ui/react';

import { qrCodeSlotRecipe } from './QrCode.slot-recipe';

export { QrCode } from './QrCode';

export const slotRecipe = {
  qrCode: qrCodeSlotRecipe,
} as ThemingConfig['slotRecipes'];
