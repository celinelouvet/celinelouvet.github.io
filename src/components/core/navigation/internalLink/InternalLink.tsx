import {
  Button,
  Link,
  type LinkProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export type InternalLinkProps = LinkProps;

export const InternalLink = forwardRef<InternalLinkProps, 'a'>(
  ({ children, href, size, variant, ...props }, ref) => {
    const styles = useStyleConfig('InternalLink', { size, variant });

    return (
      <Link as={NextLink} href={href} ref={ref} {...props}>
        <Button variant="link" sx={styles}>
          {children}
        </Button>
      </Link>
    );
  }
);

export const internalLinkStyles = {
  baseStyle: {
    textDecoration: 'underline',
    fontWeight: '600',
    fontFamily: 'Nunito',
    textWrap: 'wrap',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
  },
  variants: {
    basic: {
      color: 'brand.500',

      _hover: {
        color: 'brand.400',

        _dark: {
          color: 'brand.600',
        },
      },
    },
    slideDark: {
      color: 'brand.900',
      fontSize: '1.25em',
    },
    slideLight: {
      color: 'brand.300',
      fontSize: '1.25em',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'basic',
  },
} satisfies StyleConfig;
