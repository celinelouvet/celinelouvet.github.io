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
          backgroundColor: '#e3b4b7',
          borderLeftColor: '#cc5152',
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: '#3d3b46',

          _dark: {
            backgroundColor: '#e3b4b7',
            borderLeftColor: '#cc5152',
            color: '#3d3b46',
          },
        },
        description: {
          lineHeight: '1.5em',
        },
        indicator: {
          color: '#cc5152',
          boxSize: '1em',
          marginRight: '1em',

          _dark: {
            color: '#cc5152',
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
