'use client';

import { Link, type LinkProps, type RecipeProps } from '@chakra-ui/react';
import * as React from 'react';
import { type To } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';

type InternalLinkVariantProps = RecipeProps<'link'> & {
  to: To;
};

export interface InternalLinkProps
  extends LinkProps,
    React.PropsWithChildren<InternalLinkVariantProps> {}

export const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  InternalLinkProps
>(function InternalLink(props, ref) {
  const { children, to, ...restProps } = props;

  return (
    <Link asChild ref={ref} {...restProps}>
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
    </Link>
  );
});
