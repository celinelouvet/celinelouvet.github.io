import { defineRecipe } from '@chakra-ui/react';

export const closeButtonRecipe = defineRecipe({
  variants: {
    sizes: {
      xl: {
        fontSize: 'xl',
        px: '6',
        h: '16',
        borderRadius: 'md',
      },
      '2xl': {
        fontSize: '2xl',
        px: '8',
        h: '16',
        borderRadius: 'lg',
      },
    },
  },
});
