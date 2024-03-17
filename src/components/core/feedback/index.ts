import { type ChakraTheme } from '@chakra-ui/react';

import { questionComponent } from './question';
import { quoteComponent } from './quote';
import { thumbsDownComponent } from './thumbsDown';
import { thumbsUpComponent } from './thumbsUp';

export * from './question';
export * from './quote';
export * from './thumbsDown';
export * from './thumbsUp';

export const feedbackComponents = {
  ...questionComponent,
  ...quoteComponent,
  ...thumbsDownComponent,
  ...thumbsUpComponent,
} satisfies ChakraTheme['components'];
