import { defineRecipe } from '@chakra-ui/react';

export const h1HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    textTransform: 'uppercase',
    fontWeight: '400',
    paddingBottom: '3',

    fontSize: {
      base: 'brand.225',
      sm: 'brand.250',
      md: 'brand.275',
      _print: 'brand.225',
    },
  },
  variants: {
    variant: {
      slide: {
        textTransform: 'none',
        fontWeight: '700',
        paddingBottom: '4',
        lineHeight: '1.2',
        fontSize: 'brand.225',
      },
    },
    size: {
      sm: {
        fontSize: { base: 'brand.225', _print: 'brand.225' },
      },
      md: {
        fontSize: { base: 'brand.275', _print: 'brand.225' },
      },
      lg: {
        fontSize: { base: 'brand.300', _print: 'brand.225' },
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});
