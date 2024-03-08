import { type ChakraTheme } from '@chakra-ui/react';

import { quoteStyles } from './Quote';

export const quoteComponent = {
  Quote: quoteStyles,
} satisfies ChakraTheme['components'];

export { Quote } from './Quote';
