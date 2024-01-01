import {
  Button,
  Link,
  type LinkProps,
  type StyleConfig,
  type StyleFunctionProps,
  useStyleConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import NextLink from 'next/link';
import { type FC } from 'react';

export type InternalLinkProps = LinkProps;

export const InternalLink: FC<InternalLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const styles = useStyleConfig('InternalLink');

  return (
    <Link as={NextLink} href={href} {...props}>
      <Button variant="link" sx={styles}>
        {children}
      </Button>
    </Link>
  );
};

export const internalLinkStyles = {
  baseStyle: (props: StyleFunctionProps) => ({
    textDecoration: 'underline',
    color: 'brand.500',
    fontWeight: '600',
    fontFamily: 'Nunito',
    fontSize: 'sm',

    _hover: {
      color: mode('brand.400', 'brand.600')(props),
    },
  }),
} satisfies StyleConfig;
