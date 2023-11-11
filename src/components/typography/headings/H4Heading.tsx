import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type H4HeadingProps = Omit<ChakraHeadingProps, 'size'> & {
  size?: 'md' | 'lg';
};

export const H4Heading = forwardRef<H4HeadingProps, 'h4'>(
  ({ children, size, ...props }, ref) => {
    const styles = useStyleConfig('H4Heading', { size });

    return (
      <ChakraHeading as="h4" sx={styles} {...props} ref={ref}>
        {children}
      </ChakraHeading>
    );
  }
);

export const h4HeadingStyles = {
  baseStyle: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: '400',
  },
  sizes: {
    md: {
      fontSize: '1.25em',
    },
    lg: {
      fontSize: '1.5em',
    },
  },
  defaultProps: {
    size: 'md',
  },
} satisfies StyleConfig;
