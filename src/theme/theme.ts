import { extendTheme } from '@chakra-ui/react';

import { config } from './config';

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'PT Sans Narrow', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
});
