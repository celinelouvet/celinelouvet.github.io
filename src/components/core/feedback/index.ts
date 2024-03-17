import { type ChakraTheme } from '@chakra-ui/react';

import { questionComponent } from './question';
import { quoteComponent } from './quote';
import { thumbsUpComponent } from './thumbsUp';

export * from './question';
export * from './quote';
export * from './thumbsUp';

export const feedbackComponents = {
  ...questionComponent,
  ...quoteComponent,
  ...thumbsUpComponent,
} satisfies ChakraTheme['components'];
