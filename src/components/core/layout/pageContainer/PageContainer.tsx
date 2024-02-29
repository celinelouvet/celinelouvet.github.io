import {
  Container as ChakraContainer,
  type ContainerProps as ChakraContainerProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type PageContainerProps = Omit<ChakraContainerProps, 'size'>;

export const PageContainer = forwardRef<PageContainerProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useStyleConfig('PageContainer');

    return (
      <ChakraContainer sx={styles} ref={ref} {...props}>
        {children}
      </ChakraContainer>
    );
  }
);

export const pageContainerStyles = {
  baseStyle: {
    marginTop: '8',
    marginBottom: '8',
    width: {
      base: '100%',
      md: '720px',
      lg: '960px',
      xl: '1320px',
    },
    maxWidth: {
      base: '100%',
      md: '720px',
      lg: '960px',
      xl: '1320px',
    },
    paddingLeft: {
      base: '12px',
      md: '0',
      lg: '0',
      xl: '0',
    },
    paddingRight: {
      base: '12px',
      md: '0',
      lg: '0',
      xl: '0',
    },
  },
} satisfies StyleConfig;
