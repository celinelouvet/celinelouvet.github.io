import { type ChakraTheme } from '@chakra-ui/react';

import { thumbsDownStyles } from './ThumbsDown';

export const thumbsDownComponent = {
  ThumbsDown: thumbsDownStyles,
} satisfies ChakraTheme['components'];

export { ThumbsDown } from './ThumbsDown';
