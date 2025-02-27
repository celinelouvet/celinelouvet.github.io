import { type ThemingConfig } from '@chakra-ui/react';

import { surveyQuestionResultsSlotRecipe } from './SurveyQuestionResults.slot-recipe';

export { SurveyQuestionResults } from './SurveyQuestionResults';

export const slotRecipe = {
  surveyQuestionResults: surveyQuestionResultsSlotRecipe,
} as ThemingConfig['slotRecipes'];
