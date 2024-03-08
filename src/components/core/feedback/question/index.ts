import { type ChakraTheme } from '@chakra-ui/react';

import { questionStyles } from './Question';

export const questionComponent = {
  Question: questionStyles,
} satisfies ChakraTheme['components'];

export { Question } from './Question';
