import { defineRecipe } from '@chakra-ui/react';

export const h3HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
  },
  variants: {
    visual: {
      basic: {
        fontWeight: '400',
        marginBottom: '2',
      },
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
    visual: 'basic',
  },
});
