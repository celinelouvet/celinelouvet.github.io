import { type ThemingConfig } from '@chakra-ui/react';

import { surveyPollRecipes, surveyPollSlotRecipes } from './surveyPoll';
import {
  surveyResultsRecipes,
  surveyResultsSlotRecipes,
} from './surveyResults';

export {
  SurveyPollChoiceQuestion,
  SurveyPollSubmit,
  SurveyPollTextQuestion,
} from './surveyPoll';
export {
  SurveyQuestionResults,
  SurveyResultsBreakdown,
  SurveyResultsPie,
} from './surveyResults';

export const surveySlotRecipes = {
  ...surveyPollSlotRecipes,
  ...surveyResultsSlotRecipes,
} as ThemingConfig['slotRecipes'];

export const surveyRecipes = {
  ...surveyPollRecipes,
  ...surveyResultsRecipes,
} as ThemingConfig['recipes'];
