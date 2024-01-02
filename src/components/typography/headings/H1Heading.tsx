import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H1HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: 'md' | 'lg';
};

export const H1Heading = forwardRef<H1HeadingProps, 'h1'>(
  ({ children, size, ...props }, ref) => {
    const styles = useStyleConfig('H1Heading', { size });

    return (
      <ChakraHeading as="h1" sx={styles} {...props} ref={ref}>
        {children}
      </ChakraHeading>
    );
  }
);

export const h1HeadingStyles = {
  baseStyle: {
    fontFamily: 'PT Sans Narrow',
    textTransform: 'uppercase',
    fontWeight: '400',
    paddingBottom: '3',
  },
  sizes: {
    md: {
      fontSize: '2.5rem',
    },
    lg: {
      fontSize: '2.75rem',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
