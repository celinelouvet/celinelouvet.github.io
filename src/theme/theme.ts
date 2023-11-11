import { extendTheme } from '@chakra-ui/react';

import { typographyComponents } from '@/components/typography';

import { config } from './config';
import { global } from './global';

export const theme = extendTheme({
  config,
  styles: { global },
  components: {
    ...typographyComponents,
  },
});
