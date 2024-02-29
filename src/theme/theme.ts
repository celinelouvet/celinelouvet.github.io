import { extendTheme } from '@chakra-ui/react';

import { coreComponents } from '@/components/core';

import { colors } from './color';
import { config } from './config';
import { global } from './global';
import { overrideComponents } from './override';

export const theme = extendTheme({
  config,
  colors: { ...colors },
  styles: { global },
  components: {
    ...coreComponents,
    ...overrideComponents,
  },
});
