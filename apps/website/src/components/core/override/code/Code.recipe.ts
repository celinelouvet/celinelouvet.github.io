import { defineRecipe } from '@chakra-ui/react';

export const codeRecipe = defineRecipe({
  variants: {
    variant: {
      slide: {
        color: { base: 'brand.100', _dark: 'brand.900' },
        backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        padding: 'brand.100',
        fontSize: 'brand.100',
      },
      inlineSlide: {
        color: { base: 'brand.100', _dark: 'brand.900' },
        backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        textStyle: '4xl',
        fontSize: 'brand.100',
        padding: 'brand.50',
      },
    },
  },
});
