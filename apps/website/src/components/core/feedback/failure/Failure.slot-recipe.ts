import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const failureSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  base: {
    root: {
      borderRadius: 'md',
    },
    description: {
      lineHeight: '1.5em',
    },
    title: {
      lineHeight: '1.5em',
      marginBottom: '0.5em',
      fontWeight: 'bold',
    },
  },

  variants: {
    variant: {
      subtle: {},
      surface: {},
      solid: {},
      outline: {},

      slide: {
        root: {
          borderRadius: '0.25em',
          backgroundColor: { base: '#e3b4b7', _dark: '#e3b4b7' },
          borderLeftColor: { base: '#cc5152', _dark: '#cc5152' },
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: { base: '#3d3b46', _dark: '#3d3b46' },
          alignItems: 'center',
        },
        description: {
          lineHeight: '1.5em',
        },
        indicator: {
          color: { base: '#cc5152', _dark: '#cc5152' },
          marginRight: '1em',
          fontSize: '1em',
        },
        title: {
          lineHeight: '1.5em',
          marginBottom: '0.5em',
        },
      },
    },
  },
});
