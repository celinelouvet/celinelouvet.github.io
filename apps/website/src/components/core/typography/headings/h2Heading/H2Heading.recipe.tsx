import { defineRecipe } from '@chakra-ui/react';

export const h2HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
    marginBottom: '2',
    textTransform: 'uppercase',
    fontSize: {
      base: 'brand.150',
      sm: 'brand.175',
      md: 'brand.225',
      _print: 'brand.175',
    },
  },
  variants: {
    variant: {
      slide: {
        textTransform: 'none',
        fontWeight: '400',
        lineHeight: '1.2',
        fontSize: 'brand.200',
      },
    },
    size: {
      md: {
        fontSize: { base: 'brand.200', _print: 'brand.175' },
      },
      lg: {
        fontSize: { base: 'brand.225', _print: 'brand.175' },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});
