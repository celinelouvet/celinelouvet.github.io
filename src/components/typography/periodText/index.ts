import { type ChakraTheme } from '@chakra-ui/react';

import { periodTextStyles } from './PeriodText';

export const periodTextComponent = {
  PeriodText: periodTextStyles,
} satisfies ChakraTheme['components'];

export { PeriodText } from './PeriodText';
