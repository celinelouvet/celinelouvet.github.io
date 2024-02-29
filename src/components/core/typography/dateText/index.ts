import { type ChakraTheme } from '@chakra-ui/react';

import { dateTextStyles } from './DateText';

export const dateTextComponent = {
  DateText: dateTextStyles,
} satisfies ChakraTheme['components'];

export { DateText } from './DateText';
