import { defineRecipe } from '@chakra-ui/react';

export const dateTextRecipe = defineRecipe({
  base: {
    fontFamily: 'Nunito',
    color: { base: 'brand.300', _dark: 'brand.700' },
  },
  variants: {
    variant: {
      slide: {
        fontSize: '1em',
      },
    },
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
