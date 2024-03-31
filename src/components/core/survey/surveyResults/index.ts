import { type ChakraTheme } from '@chakra-ui/react';

import { surveyResultsStyles } from './SurveyResults';
import { surveyResultsChoiceStyles } from './SurveyResultsChoice';

export const surveyResultsComponents = {
  SurveyResults: surveyResultsStyles,
  SurveyResultsChoice: surveyResultsChoiceStyles,
} satisfies ChakraTheme['components'];

export { SurveyResults } from './SurveyResults';
export { SurveyResultsChoice } from './SurveyResultsChoice';
