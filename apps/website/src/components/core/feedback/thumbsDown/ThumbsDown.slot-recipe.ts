import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const thumbsDownSlotRecipe = defineSlotRecipe({
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
          backgroundColor: '#eadcbf',
          borderLeftColor: '#cf8b5e',
          borderLeftWidth: '0.2em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: '#443c37',

          _dark: {
            backgroundColor: '#eadcbf',
            borderLeftColor: '#cf8b5e',
            color: '#443c37',
          },
        },
        indicator: {
          color: '#cf8b5e',
          boxSize: '1em',
          marginRight: '1em',

          _dark: {
            color: '#cf8b5e',
          },
        },
        title: {
          lineHeight: '1.5em',
          marginBottom: '0.5em',
        },
      },
    },
  },
});
