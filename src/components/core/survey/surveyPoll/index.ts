import { type ChakraTheme } from '@chakra-ui/react';

import { surveyPollStyles } from './SurveyPoll';
import { surveyPollChoiceQuestionStyles } from './SurveyPollChoiceQuestion';
import { surveyPollSubmitStyles } from './SurveyPollSubmit';
import { surveyPollTextQuestionStyles } from './SurveyPollTextQuestion';

export const surveyPollComponents = {
  SurveyPoll: surveyPollStyles,
  SurveyPollChoiceQuestion: surveyPollChoiceQuestionStyles,
  SurveyPollSubmit: surveyPollSubmitStyles,
  SurveyPollTextQuestion: surveyPollTextQuestionStyles,
} satisfies ChakraTheme['components'];

export { SurveyPoll } from './SurveyPoll';
export { SurveyPollChoiceQuestion } from './SurveyPollChoiceQuestion';
export { SurveyPollSubmit } from './SurveyPollSubmit';
export { SurveyPollTextQuestion } from './SurveyPollTextQuestion';
