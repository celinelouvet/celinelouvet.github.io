'use client';

import { Link, type LinkProps, type RecipeProps } from '@chakra-ui/react';
import * as React from 'react';
import { NavLink } from 'react-router';

type InternalLinkVariantProps = RecipeProps<'link'> & {
  to: string;
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
    <Link asChild variant="plain" ref={ref} {...restProps}>
      <NavLink to={to}>{children}</NavLink>
    </Link>
  );
});
