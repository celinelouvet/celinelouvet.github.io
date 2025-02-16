import { defineRecipe } from '@chakra-ui/react';

export const h3HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
    marginBottom: '2',
  },
  variants: {
    variant: {
      slide: {
        fontWeight: '400',
        marginBottom: '2',
      },
    },
    size: {
      md: {
        fontSize: '1.5em',
      },
      lg: {
        fontSize: '1.7em',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
