import { defineRecipe } from '@chakra-ui/react';

export const durationTextRecipe = defineRecipe({
  base: {
    fontFamily: 'Nunito',
    color: { base: 'brand.300', _dark: 'brand.700' },
  },
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
      },
      xs: {
        fontSize: 'xs',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
