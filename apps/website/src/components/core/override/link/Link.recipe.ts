import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  base: {
    colorPalette: 'brand',
    color: 'brand.500',

    fontWeight: '600',
    fontFamily: 'Nunito',
    textWrap: 'wrap',
    paddingX: '1',
    textDecoration: 'underline',
    cursor: 'pointer',

    _dark: {
      color: 'brand.600',
    },

    _hover: {
      color: 'brand.400',
      backgroundColor: 'brand.800',

      _dark: {
        color: 'brand.600',
        backgroundColor: 'brand.200',
      },
    },
  },
  variants: {
    variant: {
      basic: {},
      slideDark: {
        textDecoration: 'underline',
        color: 'brand.900',
        fontSize: '1.25em',
      },
      slideLight: {
        textDecoration: 'underline',
        color: 'brand.300',
        fontSize: '1.25em',
      },
    },

    size: {
      sm: {
        fontSize: 'sm',
      },
      md: {
        fontSize: 'md',
      },
    },
  },
  defaultVariants: {
    variant: 'basic',
  },
});
