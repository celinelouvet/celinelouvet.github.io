import { type ThemingConfig } from '@chakra-ui/react';

import { slotRecipe as surveyPollChoiceSlotRecipe } from './surveyPollChoiceQuestion';
import { recipe as surveyPollRecipe } from './surveyPollSubmit';
import { slotRecipe as surveyPollTextSlotRecipe } from './surveyPollTextQuestion';

export { SurveyPollChoiceQuestion } from './surveyPollChoiceQuestion';
export { SurveyPollSubmit } from './surveyPollSubmit';
export { SurveyPollTextQuestion } from './surveyPollTextQuestion';

export const surveyPollSlotRecipes = {
  ...surveyPollChoiceSlotRecipe,
  ...surveyPollTextSlotRecipe,
} as ThemingConfig['slotRecipes'];

export const surveyPollRecipes = {
  ...surveyPollRecipe,
} as ThemingConfig['recipes'];
