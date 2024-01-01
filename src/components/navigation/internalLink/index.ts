import { type ChakraTheme } from '@chakra-ui/react';

import { internalLinkStyles } from './InternalLink';

export const internalLinkComponent = {
  InternalLink: internalLinkStyles,
} satisfies ChakraTheme['components'];

export { InternalLink } from './InternalLink';
