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
        fontSize: 'brand.150',
        _print: {
          fontSize: 'brand.125',
        },
      },
      lg: {
        fontSize: 'brand.170',
        _print: {
          fontSize: 'brand.150',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
