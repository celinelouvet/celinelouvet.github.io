import { type ChakraTheme } from '@chakra-ui/react';

import { buttonStyle } from './Button.theme';

export const overrideComponents = {
  Button: buttonStyle,
} satisfies ChakraTheme['components'];
