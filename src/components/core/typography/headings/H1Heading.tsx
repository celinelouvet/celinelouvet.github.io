import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H1HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: keyof typeof h1HeadingStyles.sizes;
};

export const H1Heading = forwardRef<H1HeadingProps, 'h1'>(
  ({ children, size, variant, ...props }, ref) => {
    const styles = useStyleConfig('H1Heading', { size, variant });

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
    sm: {
      fontSize: '2.25em',
    },
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
    slide: {
      fontWeight: '700',
      paddingBottom: '4',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'basic',
  },
} satisfies StyleConfig;
