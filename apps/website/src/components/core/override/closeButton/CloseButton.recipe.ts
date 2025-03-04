import { defineRecipe } from '@chakra-ui/react';

export const closeButtonRecipe = defineRecipe({
  base: {
    _hover: {
      backgroundColor: { base: 'brand.800', _dark: 'brand.400' },
    },
  },
  variants: {
    sizes: {
      xl: {
        fontSize: '2xl',
        borderRadius: 'md',
      },
      '2xl': {
        fontSize: '2xl',
        borderRadius: 'lg',
      },
    },
  },
});
