import { defineRecipe } from '@chakra-ui/react';

export const h4HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  variants: {
    size: {
      md: {
        fontSize: 'brand.120',
        _print: {
          fontSize: 'brand.110',
        },
      },
      lg: {
        fontSize: 'brand.140',
        _print: {
          fontSize: 'brand.120',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
