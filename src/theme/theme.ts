import { extendTheme } from '@chakra-ui/react';

import { layoutComponents } from '@/components/layout';
import { mediaComponents } from '@/components/media';
import { navigationComponents } from '@/components/navigation';
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
    ...layoutComponents,
    ...mediaComponents,
    ...navigationComponents,
    ...overrideComponents,
    ...typographyComponents,
  },
});
