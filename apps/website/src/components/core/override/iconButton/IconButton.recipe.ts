import { defineRecipe } from '@chakra-ui/react';

export const iconButtonRecipe = defineRecipe({
  variants: {
    sizes: {
      xl: {
        fontSize: 'xl',
        paddingX: '6',
        height: '16',
        borderRadius: 'md',
      },
      '2xl': {
        fontSize: '2xl',
        paddingX: '8',
        height: '16',
        borderRadius: 'lg',
      },
    },
  },
});
