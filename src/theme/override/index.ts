import { type ChakraTheme } from '@chakra-ui/react';

import { buttonStyle } from './Button.theme';
import { cardStyle } from './Card.theme';
import { closeButtonStyle } from './CloseButton.theme';
import { drawerStyle } from './Drawer.theme';
import { switchStyle } from './Switch.theme';

export const overrideComponents = {
  Button: buttonStyle,
  Card: cardStyle,
  CloseButton: closeButtonStyle,
  Drawer: drawerStyle,
  Switch: switchStyle,
} satisfies ChakraTheme['components'];
