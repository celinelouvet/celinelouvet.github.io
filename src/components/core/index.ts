import { type ChakraTheme } from '@chakra-ui/react';

import { layoutComponents } from './layout';
import { mediaComponents } from './media';
import { navigationComponents } from './navigation';
import { typographyComponents } from './typography';

export * from './disclosure';
export * from './layout';
export * from './list';
export * from './media';
export * from './navigation';
export * from './typography';

export const coreComponents = {
  ...layoutComponents,
  ...mediaComponents,
  ...navigationComponents,
  ...typographyComponents,
} satisfies ChakraTheme['components'];
