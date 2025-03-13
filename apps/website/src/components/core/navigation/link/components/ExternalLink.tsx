import { Link, type LinkProps, type RecipeProps } from '@chakra-ui/react';
import * as React from 'react';
import { LuExternalLink } from 'react-icons/lu';

type ExternalLinkVariantProps = RecipeProps<'link'> & {
  href: string;
};

export interface ExternalLinkProps
  extends Omit<LinkProps, 'href'>,
    React.PropsWithChildren<ExternalLinkVariantProps> {}

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
