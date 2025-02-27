import { type ThemingConfig } from '@chakra-ui/react';

import { slotRecipe as surveyQuestionResultsSlotRecipe } from './surveyQuestionResults';
import { recipe as surveyResultsBreakdownRecipe } from './surveyResultsBreakdown';
import { recipe as surveyResultsPieRecipe } from './surveyResultsPie';

export { SurveyQuestionResults } from './surveyQuestionResults';
export { SurveyResultsBreakdown } from './surveyResultsBreakdown';
export { SurveyResultsPie } from './surveyResultsPie';

export const surveyResultsSlotRecipes = {
  ...surveyQuestionResultsSlotRecipe,
} as ThemingConfig['slotRecipes'];

export const surveyResultsRecipes = {
  ...surveyResultsBreakdownRecipe,
  ...surveyResultsPieRecipe,
} as ThemingConfig['recipes'];
