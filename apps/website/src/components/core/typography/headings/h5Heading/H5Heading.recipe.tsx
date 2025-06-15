import { defineRecipe } from '@chakra-ui/react';

export const h5HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  variants: {
    size: {
      md: {
        fontSize: 'brand.115',
        _print: {
          fontSize: 'brand.100',
        },
      },
      lg: {
        fontSize: 'brand.130',
        _print: {
          fontSize: 'brand.115',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
