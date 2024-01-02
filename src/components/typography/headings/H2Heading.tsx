import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H2HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: 'md' | 'lg';
};

export const H2Heading = forwardRef<H2HeadingProps, 'h2'>(
  ({ children, size, ...props }, ref) => {
    const styles = useStyleConfig('H2Heading', { size });

    return (
      <ChakraHeading as="h2" sx={styles} {...props} ref={ref}>
        {children}
      </ChakraHeading>
    );
  }
);

export const h2HeadingStyles = {
  baseStyle: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
    marginBottom: '2',
  },
  sizes: {
    md: {
      fontSize: '2em',
    },
    lg: {
      fontSize: '2.25em',
      textTransform: 'uppercase',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
