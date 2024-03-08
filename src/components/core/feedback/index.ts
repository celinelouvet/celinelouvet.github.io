import { type ChakraTheme } from '@chakra-ui/react';

import { questionComponent } from './question';
import { quoteComponent } from './quote';

export * from './question';
export * from './quote';

export const feedbackComponents = {
  ...questionComponent,
  ...quoteComponent,
} satisfies ChakraTheme['components'];
