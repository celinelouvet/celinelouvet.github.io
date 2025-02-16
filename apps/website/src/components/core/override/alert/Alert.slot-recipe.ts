import { defineSlotRecipe } from '@chakra-ui/react';

export const alertSlotRecipe = defineSlotRecipe({
  slots: ['title', 'description', 'root', 'indicator', 'content'],

  variants: {
    variant: {
      slide: {},
    },
  },
});
