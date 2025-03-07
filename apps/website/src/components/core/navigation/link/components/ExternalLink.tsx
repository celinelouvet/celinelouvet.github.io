import { Link, type LinkProps } from '@chakra-ui/react';
import * as React from 'react';
import { LuExternalLink } from 'react-icons/lu';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ExternalLinkProps extends LinkProps {}

export const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps
>(function ExternalLink(props, ref) {
  const { children, href, ...restProps } = props;

  return (
    <Link
      href={href}
      variant="plain"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      {...restProps}
    >
      {children} <LuExternalLink />
    </Link>
  );
});
