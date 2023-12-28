import { type ChakraTheme } from '@chakra-ui/react';

import { durationTextStyles } from './DurationText';

export const durationTextComponent = {
  DurationText: durationTextStyles,
} satisfies ChakraTheme['components'];

export { DurationText } from './DurationText';
