import { defineSlotRecipe } from '@chakra-ui/react';

export const cardSlotRecipe = defineSlotRecipe({
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],

  variants: {
    variant: {
      // TODO see if should use `subtle` instead of `filled`
      filled: {
        root: {
          backgroundColor: { base: 'brand.900', _dark: 'brand.200' },
        },
        header: {
          paddingBottom: 0,
        },
        body: {
          paddingTop: 0,
        },
      },
      outline: {
        header: {
          backgroundColor: { base: 'brand.900', _dark: 'brand.200' },
        },
      },
    },
  },
});
