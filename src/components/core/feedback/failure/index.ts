import { type ChakraTheme } from '@chakra-ui/react';

import { failureStyles } from './Failure';

export const failureComponent = {
  Failure: failureStyles,
} satisfies ChakraTheme['components'];

export { Failure } from './Failure';
