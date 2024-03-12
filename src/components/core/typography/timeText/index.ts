import { type ChakraTheme } from '@chakra-ui/react';

import { timeTextStyles } from './TimeText';

export const timeTextComponent = {
  TimeText: timeTextStyles,
} satisfies ChakraTheme['components'];

export { TimeText } from './TimeText';
