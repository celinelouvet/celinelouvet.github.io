import { type ChakraTheme } from '@chakra-ui/react';

import { headerContainerComponent } from './headerContainer';
import { pageContainerComponent } from './pageContainer';

export * from './pageContainer';
export * from './headerContainer';

export const layoutComponents = {
  ...headerContainerComponent,
  ...pageContainerComponent,
} satisfies ChakraTheme['components'];
