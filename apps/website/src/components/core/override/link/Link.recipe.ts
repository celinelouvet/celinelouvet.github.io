import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  base: {
    colorPalette: 'brand',
    color: 'brand.500',

    fontWeight: '600',
    fontFamily: 'Nunito',
    textWrap: 'wrap',
    paddingX: '1',
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
    _print: {
      textDecoration: 'underline',
    },
  },
  variants: {
    variant: {
      plain: {
        color: 'brand.500',

        _hover: {
          textUnderlineOffset: '2px',
          textDecorationColor: 'currentColor',
        },
      },
      underline: {
        color: 'brand.500',

        textUnderlineOffset: '2px',
        textDecorationColor: 'currentColor',
      },
      solid: {
        color: 'white',
        backgroundColor: 'brand.500',
        _hover: { color: 'white', backgroundColor: 'brand.400' },
        _active: { backgroundColor: 'brand.600' },
        _expanded: { backgroundColor: 'brand.600' },
      },
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
    variant: 'plain',
  },
});
