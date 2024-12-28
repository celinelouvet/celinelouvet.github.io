import { defineRecipe } from '@chakra-ui/react';

export const h5HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  variants: {
    size: {
      md: {
        fontSize: '1.15em',
      },
      lg: {
        fontSize: '1.3em',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
