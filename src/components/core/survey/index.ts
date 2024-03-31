import { type ChakraTheme } from '@chakra-ui/react';

import { surveyPollComponents } from './surveyPoll';
import { surveyResultsComponents } from './surveyResults';

export * from './surveyPoll';
export * from './surveyResults';

export const surveyComponents = {
  ...surveyPollComponents,
  ...surveyResultsComponents,
} satisfies ChakraTheme['components'];
