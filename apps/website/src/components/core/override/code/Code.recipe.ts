import { defineRecipe } from '@chakra-ui/react';

export const codeRecipe = defineRecipe({
  variants: {
    variant: {
      slide: {
        color: 'brand.100',
        backgroundColor: 'brand.800',
        fontFamily: 'Noto Mono',
        padding: '1em',
        fontSize: '1em',

        _dark: {
          color: 'brand.900',
          backgroundColor: 'brand.300',
        },
      },
      inlineSlide: {
        color: 'brand.100',
        backgroundColor: 'brand.800',
        fontSize: '1em',

        _dark: {
          color: 'brand.900',
          backgroundColor: 'brand.300',
        },
      },
    },
  },
});
