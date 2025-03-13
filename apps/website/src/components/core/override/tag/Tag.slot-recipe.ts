import { defineSlotRecipe } from '@chakra-ui/react';
import { tagAnatomy } from '@chakra-ui/react/anatomy';

export const tagSlotRecipe = defineSlotRecipe({
  slots: tagAnatomy.keys(),

  variants: {
    variant: {
      subtle: {
        root: {
          color: { base: 'brand.300', _dark: 'brand.800' },
          backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        },
      },
      solid: {
        root: {
          color: 'brand.900',
          backgroundColor: 'brand.500',
        },
      },
      outline: {
        root: {
          color: { base: 'brand.300', _dark: 'brand.800' },
          shadowColor: { base: 'brand.700', _dark: 'brand.400' },
        },
      },
      surface: {
        root: {
          color: { base: 'brand.300', _dark: 'brand.800' },
          backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
          shadowColor: { base: 'brand.700', _dark: 'brand.400' },
        },
      },
    },
  },
});
