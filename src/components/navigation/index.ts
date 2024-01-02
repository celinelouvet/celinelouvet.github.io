import { type ChakraTheme } from '@chakra-ui/react';

import { blogBreadcrumbComponent } from './blogBreadcrumb';
import { externalLinkComponent } from './externalLink';
import { internalLinkComponent } from './internalLink';

export { BlogBreadcrumb } from './blogBreadcrumb';
export { ExternalLink } from './externalLink';
export { InternalLink } from './internalLink';

export const navigationComponents = {
  ...blogBreadcrumbComponent,
  ...externalLinkComponent,
  ...internalLinkComponent,
} satisfies ChakraTheme['components'];
