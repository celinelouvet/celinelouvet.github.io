import { type ThemingConfig } from '@chakra-ui/react';

import { surveyResultsBreakdownRecipe } from './SurveyResultsBreakdown.recipe';

export { SurveyResultsBreakdown } from './SurveyResultsBreakdown';

export const recipe = {
  surveyResultsBreakdown: surveyResultsBreakdownRecipe,
} as ThemingConfig['recipes'];
