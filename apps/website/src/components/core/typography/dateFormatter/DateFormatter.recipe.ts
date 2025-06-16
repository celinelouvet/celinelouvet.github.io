import { defineRecipe } from '@chakra-ui/react';

export const dateFormatterRecipe = defineRecipe({
  base: {
    fontFamily: 'Nunito',
  },
  variants: {
    variant: {
      slide: {
        color: 'brand.300',
        fontSize: 'brand.100',
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
