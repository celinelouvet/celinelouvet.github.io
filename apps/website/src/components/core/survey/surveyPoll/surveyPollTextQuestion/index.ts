import { type ThemingConfig } from '@chakra-ui/react';

import { surveyPollTextQuestionSlotRecipe } from './SurveyPollTextQuestion.slot-recipe';

export { SurveyPollTextQuestion } from './SurveyPollTextQuestion';

export const slotRecipe = {
  surveyPollTextQuestion: surveyPollTextQuestionSlotRecipe,
} as ThemingConfig['slotRecipes'];
