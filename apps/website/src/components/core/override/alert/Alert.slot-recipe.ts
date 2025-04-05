import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const alertSlotRecipe = defineSlotRecipe({
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
      slide: {
        root: {
          borderRadius: '0.25em',
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          alignItems: 'center',
        },
        indicator: {
          marginRight: '1em',
          fontSize: '1em',
        },
        title: {
          lineHeight: '1.5em',
          marginBottom: '0.5em',
        },
        description: {
          lineHeight: '1.5em',
        },
      },

      rightSlide: {
        root: {
          flexDirection: 'row-reverse',
          borderRadius: '0.25em',
          borderRightWidth: '0.25em',
          borderRightStyle: 'solid',
          fontSize: '1em',
          alignItems: 'center',
        },
        indicator: {
          marginLeft: '1em',
          fontSize: '1em',
        },
        title: {
          textAlign: 'right',
          lineHeight: '1.5em',
          marginBottom: '0.5em',
        },
        description: {
          float: 'right',
          lineHeight: '1.5em',
        },
      },
    },
  },
});
