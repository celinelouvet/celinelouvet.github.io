import { defineSlotRecipe } from '@chakra-ui/react';

export const drawerSlotRecipe = defineSlotRecipe({
  slots: [
    'trigger',
    'backdrop',
    'positioner',
    'content',
    'title',
    'description',
    'closeTrigger',
    'header',
    'body',
    'footer',
  ],

  base: {
    content: {
      backgroundColor: 'white',
      color: 'brand.100',

      _dark: {
        backgroundColor: 'brand.100',
        color: 'brand.900',
      },
    },
    header: {
      color: 'brand.100',
      fontFamily: 'PT Sans Narrow',
      fontWeight: 400,
      textTransform: 'uppercase',

      _dark: {
        color: 'brand.900',
      },
    },
    closeTrigger: {
      color: 'brand.100',
      fontWeight: 400,

      _dark: {
        color: 'brand.900',
      },
    },
  },
});
