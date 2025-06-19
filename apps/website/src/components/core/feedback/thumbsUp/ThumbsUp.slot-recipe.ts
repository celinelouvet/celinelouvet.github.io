import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const thumbsUpSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  variants: {
    variant: {
      subtle: {},
      surface: {},
      solid: {},
      outline: {},

      slide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: '#cbeedc', _dark: '#cbeedc' },
          borderColor: { base: '#517c71', _dark: '#517c71' },
          color: '#304a4f',
        },
        indicator: {
          fontSize: 'brand.100',
          color: { base: '#517c71', _dark: '#517c71' },
        },
      },
      rightSlide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: '#cbeedc', _dark: '#cbeedc' },
          borderColor: { base: '#517c71', _dark: '#517c71' },
          color: '#304a4f',
        },
        indicator: {
          fontSize: 'brand.100',
          color: { base: '#517c71', _dark: '#517c71' },
        },
      },
    },
  },
});
