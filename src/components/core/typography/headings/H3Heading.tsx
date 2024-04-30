import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H3HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: keyof typeof h3HeadingStyles.sizes;
  variant?: keyof typeof h3HeadingStyles.variants;
};

export const H3Heading = forwardRef<H3HeadingProps, 'h3'>(
  ({ children, size, variant, ...props }, ref) => {
    const styles = useStyleConfig('H3Heading', { size, variant });

    return (
      <ChakraHeading as="h3" sx={styles} {...props} ref={ref}>
        {children}
      </ChakraHeading>
    );
  }
);

export const h3HeadingStyles = {
  baseStyle: {
    fontFamily: 'PT Sans Narrow',
  },
  sizes: {
    md: {
      fontSize: '1.5em',
    },
    lg: {
      fontSize: '1.7em',
    },
  },
  variants: {
    basic: {
      fontWeight: '400',
      marginBottom: '2',
    },
    slide: {
      fontWeight: '700',
      marginBottom: '2',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'basic',
  },
} satisfies StyleConfig;
