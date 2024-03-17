import { type ChakraTheme } from '@chakra-ui/react';

import { thumbsUpStyles } from './ThumbsUp';

export const thumbsUpComponent = {
  ThumbsUp: thumbsUpStyles,
} satisfies ChakraTheme['components'];

export { ThumbsUp } from './ThumbsUp';
