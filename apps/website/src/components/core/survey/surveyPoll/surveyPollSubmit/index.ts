import { type ThemingConfig } from '@chakra-ui/react';

import { surveyPollSubmitRecipe } from './SurveyPollSubmit.recipe';

export { SurveyPollSubmit } from './SurveyPollSubmit';

export const recipe = {
  surveyPollSubmit: surveyPollSubmitRecipe,
} as ThemingConfig['recipes'];
