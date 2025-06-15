import { defineRecipe } from '@chakra-ui/react';

export const h2HeadingRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
    marginBottom: '2',
    textTransform: 'uppercase',
  },
  variants: {
    variant: {
      slide: {
        textTransform: 'none',
        fontWeight: '400',
        lineHeight: '1.2',
      },
    },
    size: {
      md: {
        fontSize: 'brand.225',
        base: {
          fontSize: 'brand.150',
        },
        sm: {
          fontSize: 'brand.175',
        },
        md: {
          fontSize: 'brand.225',
        },
        _print: {
          fontSize: 'brand.175',
        },
      },
      lg: {
        fontSize: 'brand.250',
        base: {
          fontSize: 'brand.200',
        },
        md: {
          fontSize: 'brand.250',
        },
        _print: {
          fontSize: 'brand.200',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
