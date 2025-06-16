import { defineRecipe } from '@chakra-ui/react';

export const remoteTextRecipe = defineRecipe({
  base: {
    fontFamily: 'Nunito',
  },
  variants: {
    size: {
      lg: {
        fontSize: 'lg',
      },
      md: {
        fontSize: 'md',
      },
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
