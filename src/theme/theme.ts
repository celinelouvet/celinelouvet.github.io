import { extendTheme } from '@chakra-ui/react';

import { mediaComponents } from '@/components/media';
import { typographyComponents } from '@/components/typography';

import { colors } from './color';
import { config } from './config';
import { global } from './global';
import { overrideComponents } from './override';

export const theme = extendTheme({
  config,
  colors: { ...colors },
  styles: { global },
  components: {
    ...mediaComponents,
    ...overrideComponents,
    ...typographyComponents,
  },
});
