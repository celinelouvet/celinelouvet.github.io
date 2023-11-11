import { extendTheme } from '@chakra-ui/react';

import { typographyComponents } from '@/components/typography';

import { colors } from './color';
import { config } from './config';
import { global } from './global';

export const theme = extendTheme({
  config,
  colors: { ...colors },
  styles: { global },
  components: {
    ...typographyComponents,
  },
});
