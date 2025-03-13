import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import {
  ExternalLink,
  type ExternalLinkProps,
  InternalLink,
  type InternalLinkProps,
} from './components';

export type LinkParts = typeof ChakraLink & {
  External: typeof ExternalLink;
  Internal: typeof InternalLink;
};

export type LinkProps = ChakraLinkProps & ExternalLinkProps & InternalLinkProps;

export const Link = { ...ChakraLink } as LinkParts;

Link.External = ExternalLink;
Link.Internal = InternalLink;
