import { defineSlotRecipe } from '@chakra-ui/react';

export const cardSlotRecipe = defineSlotRecipe({
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],

  variants: {
    variant: {
      subtle: {
        root: {
          backgroundColor: { base: 'brand.900', _dark: 'brand.200' },
        },
      },
      outline: {
        header: {
          backgroundColor: { base: 'brand.900', _dark: 'brand.200' },
        },
        body: {
          backgroundColor: { base: 'white', _dark: 'brand.100' },
        },
      },
    },
  },
});
