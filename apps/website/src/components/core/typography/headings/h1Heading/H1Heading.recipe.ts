import { defineRecipe } from '@chakra-ui/react';

export const h1HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    textTransform: 'uppercase',
    fontWeight: '400',
    paddingBottom: '3',
  },
  variants: {
    variant: {
      slide: {
        textTransform: 'none',
        fontWeight: '700',
        paddingBottom: '4',
        lineHeight: '1.2',
      },
    },
    size: {
      sm: {
        fontSize: '2.25em',
      },
      md: {
        fontSize: '2.5em',
      },
      lg: {
        fontSize: '2.75em',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
