import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const questionSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  variants: {
    variant: {
      subtle: {},
      surface: {},
      solid: {},
      outline: {},

      slide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: '#eadcbf', _dark: '#eadcbf' },
          borderLeftColor: { base: '#cf8b5e', _dark: '#cf8b5e' },
          color: { base: '#443c37', _dark: '#443c37' },
        },
        indicator: {
          fontSize: 'brand.100',
          color: { base: '#cf8b5e', _dark: '#cc5152' },
        },
      },

      rightSlide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: '#eadcbf', _dark: '#eadcbf' },
          borderRightColor: { base: '#cf8b5e', _dark: '#cf8b5e' },
          color: { base: '#443c37', _dark: '#443c37' },
        },

        indicator: {
          fontSize: 'brand.100',
          color: { base: '#cf8b5e', _dark: '#cc5152' },
        },
      },
    },
  },
});
