import { type ChakraTheme } from '@chakra-ui/react';

import { externalLinkStyles } from './ExternalLink';

export const externalLinkComponent = {
  ExternalLink: externalLinkStyles,
} satisfies ChakraTheme['components'];

export { ExternalLink } from './ExternalLink';
