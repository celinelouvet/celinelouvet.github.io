import { type ThemingConfig } from '@chakra-ui/react';

import { surveyResultsPieRecipe } from './SurveyResultsPie.recipe';

export { SurveyResultsPie } from './SurveyResultsPie';

export const recipe = {
  surveyResultsPie: surveyResultsPieRecipe,
} as ThemingConfig['recipes'];
