import { defineRecipe } from '@chakra-ui/react';

export const h4HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  variants: {
    size: {
      md: {
        fontSize: '1.25em',
      },
      lg: {
        fontSize: '1.5em',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
