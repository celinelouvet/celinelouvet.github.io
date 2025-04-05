import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const thumbsDownSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  variants: {
    variant: {
      subtle: {},
      surface: {},
      solid: {},
      outline: {},

      slide: {
        root: {
          fontSize: '1em',
          backgroundColor: { base: '#eadcbf', _dark: '#eadcbf' },
          borderLeftColor: { base: '#cf8b5e', _dark: '#cf8b5e' },
          color: { base: '#443c37', _dark: '#443c37' },
        },
        indicator: {
          fontSize: '1em',
          color: { base: '#cf8b5e', _dark: '#cf8b5e' },
        },
      },

      rightSlide: {
        root: {
          fontSize: '1em',
          backgroundColor: { base: '#eadcbf', _dark: '#eadcbf' },
          borderRightColor: { base: '#cf8b5e', _dark: '#cf8b5e' },
          color: { base: '#443c37', _dark: '#443c37' },
        },
        indicator: {
          fontSize: '1em',
          color: { base: '#cf8b5e', _dark: '#cf8b5e' },
        },
      },
    },
  },
});
