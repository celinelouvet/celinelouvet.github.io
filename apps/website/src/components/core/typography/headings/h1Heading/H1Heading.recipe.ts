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
        fontSize: 'brand.225',
        base: {
          fontSize: 'brand.175',
        },
        md: {
          fontSize: 'brand.225',
        },
        _print: {
          fontSize: 'brand.175',
        },
      },
      md: {
        fontSize: 'brand.275',
        base: {
          fontSize: 'brand.225',
        },
        md: {
          fontSize: 'brand.275',
        },
        _print: {
          fontSize: 'brand.225',
        },
      },
      lg: {
        fontSize: 'brand.300',
        base: {
          fontSize: 'brand.250',
        },
        md: {
          fontSize: 'brand.275',
        },
        _print: {
          fontSize: 'brand.250',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
