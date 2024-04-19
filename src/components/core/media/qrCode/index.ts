import { type ChakraTheme } from '@chakra-ui/react';

import { qrCodeStyles } from './QrCode';

export const qrCodeComponent = {
  QrCode: qrCodeStyles,
} satisfies ChakraTheme['components'];

export { QrCode } from './QrCode';
