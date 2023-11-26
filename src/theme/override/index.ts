import { type ChakraTheme } from '@chakra-ui/react';

import { buttonStyle } from './Button.theme';
import { cardStyle } from './Card.theme';

export const overrideComponents = {
  Button: buttonStyle,
  Card: cardStyle,
} satisfies ChakraTheme['components'];
