import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H3HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: 'md' | 'lg';
};

export const H3Heading = forwardRef<H3HeadingProps, 'h3'>(
  ({ children, size, ...props }, ref) => {
    const styles = useStyleConfig('H3Heading', { size });

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
    fontWeight: '400',
    marginBottom: '2',
  },
  sizes: {
    md: {
      fontSize: '1.5em',
    },
    lg: {
      fontSize: '1.7em',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
