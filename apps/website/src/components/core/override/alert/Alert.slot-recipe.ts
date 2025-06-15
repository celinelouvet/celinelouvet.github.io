import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const alertSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  base: {
    root: {
      borderRadius: 'md',
    },
    description: {
      lineHeight: 'brand.150',
    },
    title: {
      lineHeight: 'brand.150',
      marginBottom: 'brand.50',
      fontWeight: 'bold',
    },
  },

  variants: {
    variant: {
      slide: {
        root: {
          borderRadius: 'brand.25',
          borderLeftWidth: 'brand.25',
          borderLeftStyle: 'solid',
          fontSize: 'brand.100',
          alignItems: 'center',
        },
        indicator: {
          marginRight: 'brand.100',
          fontSize: 'brand.100',
        },
        title: {
          lineHeight: 'brand.150',
          marginBottom: 'brand.50',
        },
        description: {
          lineHeight: 'brand.150',
        },
      },

      rightSlide: {
        root: {
          flexDirection: 'row-reverse',
          borderRadius: 'brand.25',
          borderRightWidth: 'brand.25',
          borderRightStyle: 'solid',
          fontSize: 'brand.100',
          alignItems: 'center',
        },
        indicator: {
          marginLeft: 'brand.100',
          fontSize: 'brand.100',
        },
        title: {
          textAlign: 'right',
          lineHeight: 'brand.150',
          marginBottom: 'brand.50',
        },
        description: {
          float: 'right',
          lineHeight: 'brand.150',
          textAlign: 'right',
        },
      },
    },
  },
});
