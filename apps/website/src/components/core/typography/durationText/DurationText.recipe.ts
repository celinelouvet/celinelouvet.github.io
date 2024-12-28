import { defineRecipe } from '@chakra-ui/react';

export const durationTextRecipe = defineRecipe({
  base: {
    fontFamily: 'Nunito',
    color: 'gray.500',

    _dark: {
      color: 'gray.400',
    },
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
