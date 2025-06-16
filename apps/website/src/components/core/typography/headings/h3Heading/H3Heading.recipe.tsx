import { defineRecipe } from '@chakra-ui/react';

export const h3HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
    marginBottom: '2',

    fontSize: {
      base: 'brand.125',
      sm: 'brand.150',
      md: 'brand.175',
      lg: 'brand.200',
      _print: 'brand.150',
    },
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
        fontSize: { base: 'brand.150', _print: 'brand.150' },
      },
      lg: {
        fontSize: { base: 'brand.170', _print: 'brand.150' },
      },
    },
  },
});
