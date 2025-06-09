import { defineSlotRecipe } from '@chakra-ui/react';
import { timelineAnatomy } from '@chakra-ui/react/anatomy';

export const timelineSlotRecipe = defineSlotRecipe({
  slots: timelineAnatomy.keys(),

  variants: {
    variant: {
      subtle: {
        indicator: {
          bg: 'brand.500',
        },
        separator: {
          borderColor: 'brand.700',
        },
      },
    },
  },
});
