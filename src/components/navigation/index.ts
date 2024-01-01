import { type ChakraTheme } from '@chakra-ui/react';

import { externalLinkComponent } from './externalLink';
import { internalLinkComponent } from './internalLink';

export { ExternalLink } from './externalLink';
export { InternalLink } from './internalLink';

export const navigationComponents = {
  ...externalLinkComponent,
  ...internalLinkComponent,
} satisfies ChakraTheme['components'];
