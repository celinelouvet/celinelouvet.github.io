import { defineSlotRecipe } from '@chakra-ui/react';

export const surveyPollChoiceQuestionSlotRecipe = defineSlotRecipe({
  slots: ['root', 'header', 'body', 'item', 'indicator'],

  base: {
    item: {
      fontSize: 'md',
      flex: 1,
      cursor: 'pointer',
      padding: 2,

      _hover: {
        fontWeight: '700',
      },
    },

    indicator: {
      _checked: {
        color: 'brand.900',
        backgroundColor: 'brand.500',
        borderColor: 'brand.500',
      },
    },
  },
});
