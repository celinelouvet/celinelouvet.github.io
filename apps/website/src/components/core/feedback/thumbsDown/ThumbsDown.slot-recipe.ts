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
          backgroundColor: { base: '#eadcbf', _dark: '#eadcbf' },
          borderLeftColor: { base: '#cf8b5e', _dark: '#cf8b5e' },
          borderLeftWidth: '0.2em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: { base: '#443c37', _dark: '#443c37' },
          alignItems: 'center',
        },
        indicator: {
          color: { base: '#cf8b5e', _dark: '#cf8b5e' },
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
