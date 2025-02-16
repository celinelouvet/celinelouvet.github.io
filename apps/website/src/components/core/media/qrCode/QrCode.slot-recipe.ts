import { defineSlotRecipe } from '@chakra-ui/react';
import { qrCodeAnatomy } from '@chakra-ui/react/anatomy';

export const qrCodeSlotRecipe = defineSlotRecipe({
  slots: qrCodeAnatomy.keys(),

  variants: {
    variant: {
      dark: { frame: { fill: 'brand.300' } },
      light: { frame: { fill: 'brand.900' } },
    },
    size: { full: {} },
  },
  defaultVariants: { variant: 'dark', size: 'full' },
});
