import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H5HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: 'md' | 'lg';
};

export const H5Heading = forwardRef<H5HeadingProps, 'h5'>(
  ({ children, size, ...props }, ref) => {
    const styles = useStyleConfig('H5Heading', { size });

    return (
      <ChakraHeading as="h5" sx={styles} {...props} ref={ref}>
        {children}
      </ChakraHeading>
    );
  }
);

export const h5HeadingStyles = {
  baseStyle: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  sizes: {
    md: {
      fontSize: '1.15em',
    },
    lg: {
      fontSize: '1.3em',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
