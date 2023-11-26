import { type ChakraTheme } from '@chakra-ui/react';

import { pageContainerComponent } from './pageContainer';

export * from './pageContainer';

export const layoutComponents = {
  ...pageContainerComponent,
} satisfies ChakraTheme['components'];
