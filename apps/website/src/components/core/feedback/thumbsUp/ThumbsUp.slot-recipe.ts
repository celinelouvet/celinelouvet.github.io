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
          backgroundColor: '#cbeedc',
          borderColor: '#517c71',
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: '#304a4f',
          lineHeight: '1.5em',

          _dark: {
            backgroundColor: '#cbeedc',
            borderColor: '#517c71',
          },
        },
        indicator: {
          color: '#517c71',
          boxSize: '1em',
          marginRight: '1em',

          _dark: {
            color: '#517c71',
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
