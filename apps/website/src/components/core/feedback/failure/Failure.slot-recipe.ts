import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const failureSlotRecipe = defineSlotRecipe({
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
          backgroundColor: { base: '#e3b4b7', _dark: '#e3b4b7' },
          borderLeftColor: { base: '#cc5152', _dark: '#cc5152' },
          color: { base: '#3d3b46', _dark: '#3d3b46' },
        },
        indicator: {
          fontSize: '1em',
          color: { base: '#cc5152', _dark: '#cc5152' },
        },
      },

      rightSlide: {
        root: {
          fontSize: '1em',
          backgroundColor: { base: '#e3b4b7', _dark: '#e3b4b7' },
          borderRightColor: { base: '#cc5152', _dark: '#cc5152' },
          color: { base: '#3d3b46', _dark: '#3d3b46' },
        },
        indicator: {
          fontSize: '1em',
          color: { base: '#cc5152', _dark: '#cc5152' },
        },
      },
    },
  },
});
