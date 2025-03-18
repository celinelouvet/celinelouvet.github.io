import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const thumbsUpSlotRecipe = defineSlotRecipe({
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
          backgroundColor: { base: '#cbeedc', _dark: '#cbeedc' },
          borderColor: { base: '#517c71', _dark: '#517c71' },
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: '#304a4f',
          lineHeight: '1.5em',
          alignItems: 'center',
        },
        indicator: {
          color: { base: '#517c71', _dark: '#517c71' },
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
