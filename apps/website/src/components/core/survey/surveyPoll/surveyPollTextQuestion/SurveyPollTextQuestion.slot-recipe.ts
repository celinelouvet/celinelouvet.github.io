import { defineSlotRecipe } from '@chakra-ui/react';

export const surveyPollTextQuestionSlotRecipe = defineSlotRecipe({
  slots: ['root', 'header', 'body', 'textarea'],

  base: {
    textarea: {
      borderColor: 'brand.700',
      backgroundColor: 'brand.900',

      _dark: {
        borderColor: 'brand.400',
        backgroundColor: 'brand.200',
      },

      _focus: {
        outlineColor: 'brand.500',
        borderColor: 'brand.700',
      },
    },
  },
});
