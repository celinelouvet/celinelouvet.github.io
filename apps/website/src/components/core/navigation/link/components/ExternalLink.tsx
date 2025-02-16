import { Link, type LinkProps, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ExternalLinkProps extends LinkProps {}

export const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  ExternalLinkProps
>(function ExternalLink(props, ref) {
  const { children, href, ...restProps } = props;

  return (
    <Link asChild ref={ref} {...restProps}>
      <chakra.a href={href} target="_blank" rel="noopener noreferrer">
        {children} <BsBoxArrowUpRight />
      </chakra.a>
    </Link>
  );
});
