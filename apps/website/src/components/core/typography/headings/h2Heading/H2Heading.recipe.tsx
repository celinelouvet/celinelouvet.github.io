import { defineRecipe } from '@chakra-ui/react';

export const h2HeadingRecipe = defineRecipe({
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
        lineHeight: '1.2',
      },
    },
    size: {
      md: {
        fontSize: '2em',
      },
      lg: {
        fontSize: '2.25em',
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    visual: 'basic',
  },
});
