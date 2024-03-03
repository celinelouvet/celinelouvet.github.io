import { extendTheme } from '@chakra-ui/react';

import { coreComponents } from '@/components/core';

import { colors } from './color';
import { config } from './config';
import { global } from './global';
import { overrideComponents } from './override';
import { semanticTokens } from './semanticTokens';

export const theme = extendTheme({
  config,
  colors: { ...colors },
  semanticTokens,
  styles: { global },
  components: {
    ...coreComponents,
    ...overrideComponents,
  },
});
