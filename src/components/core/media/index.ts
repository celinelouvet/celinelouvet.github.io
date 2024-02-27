import { type ChakraTheme } from '@chakra-ui/react';

import { pictureComponent } from './picture';

export * from './picture';

export const mediaComponents = {
  ...pictureComponent,
} satisfies ChakraTheme['components'];
