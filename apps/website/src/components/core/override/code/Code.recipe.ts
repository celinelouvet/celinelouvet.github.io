import { defineRecipe } from '@chakra-ui/react';

export const codeRecipe = defineRecipe({
  variants: {
    variant: {
      slide: {
        color: { base: 'brand.100', _dark: 'brand.900' },
        backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        padding: '1em',
        fontSize: '1em',
      },
      inlineSlide: {
        color: { base: 'brand.100', _dark: 'brand.900' },
        backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        textStyle: '4xl',
        fontSize: '1em',
        padding: '0.5em',
      },
    },
  },
});
