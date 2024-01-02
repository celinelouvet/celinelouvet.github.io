import { type ChakraTheme } from '@chakra-ui/react';

import { headerContainerStyles } from './HeaderContainer';

export const headerContainerComponent = {
  HeaderContainer: headerContainerStyles,
} satisfies ChakraTheme['components'];

export { HeaderContainer } from './HeaderContainer';
