import { defineSlotRecipe } from '@chakra-ui/react';
import { cardAnatomy } from '@chakra-ui/react/anatomy';

export const cardSlotRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),

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
