import { type ChakraTheme } from '@chakra-ui/react';

import { buttonStyle } from './Button.theme';
import { cardStyle } from './Card.theme';
import { switchStyle } from './Switch.theme';

export const overrideComponents = {
  Button: buttonStyle,
  Card: cardStyle,
  Switch: switchStyle,
} satisfies ChakraTheme['components'];
