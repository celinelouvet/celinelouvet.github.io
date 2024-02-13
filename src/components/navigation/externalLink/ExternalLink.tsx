import {
  Button,
  Link,
  type LinkProps,
  type StyleConfig,
  type StyleFunctionProps,
  useStyleConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { type FC } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export type ExternalLinkProps = LinkProps;

export const ExternalLink: FC<ExternalLinkProps> = ({
  children,
  size,
  href,
  ...props
}) => {
  const styles = useStyleConfig('ExternalLink', { size });

  return (
    <Link href={href} {...props}>
      <Button rightIcon={<BsBoxArrowUpRight />} variant="link" sx={styles}>
        {children}
      </Button>
    </Link>
  );
};

export const externalLinkStyles = {
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
  sizes: {
    md: {
      fontSize: 'md',
    },
    sm: {
      fontSize: 'sm',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
