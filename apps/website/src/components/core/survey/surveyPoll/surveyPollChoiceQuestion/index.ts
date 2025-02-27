import { type ThemingConfig } from '@chakra-ui/react';

import { surveyPollChoiceQuestionSlotRecipe } from './SurveyPollChoiceQuestion.slot-recipe';

export { SurveyPollChoiceQuestion } from './SurveyPollChoiceQuestion';

export const slotRecipe = {
  surveyPollChoiceQuestion: surveyPollChoiceQuestionSlotRecipe,
} as ThemingConfig['slotRecipes'];
