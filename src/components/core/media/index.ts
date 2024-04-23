import { type ChakraTheme } from '@chakra-ui/react';

import { pictureComponent } from './picture';
import { qrCodeComponent } from './qrCode';

export * from './picture';
export * from './qrCode';

export const mediaComponents = {
  ...pictureComponent,
  ...qrCodeComponent,
} satisfies ChakraTheme['components'];
