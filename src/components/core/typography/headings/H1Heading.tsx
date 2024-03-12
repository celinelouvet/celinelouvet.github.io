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
  },
  sizes: {
    md: {
      fontSize: '2.5em',
    },
    lg: {
      fontSize: '2.75em',
    },
  },
  variants: {
    basic: {
      textTransform: 'uppercase',
      fontWeight: '400',
      paddingBottom: '3',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'basic',
  },
} satisfies StyleConfig;
