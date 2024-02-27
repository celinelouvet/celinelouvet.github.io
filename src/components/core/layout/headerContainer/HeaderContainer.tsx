import {
  Container as ChakraContainer,
  type ContainerProps as ChakraContainerProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type HeaderContainerProps = Omit<ChakraContainerProps, 'size'>;

export const HeaderContainer = forwardRef<HeaderContainerProps, 'div'>(
  ({ children }, ref) => {
    const styles = useStyleConfig('HeaderContainer');

    return (
      <ChakraContainer sx={styles} ref={ref}>
        {children}
      </ChakraContainer>
    );
  }
);

export const headerContainerStyles = {
  baseStyle: {
    width: {
      base: '100%',
      md: '480px',
      lg: '640px',
      xl: '880px',
    },
    maxWidth: {
      base: '100%',
      md: '480px',
      lg: '640px',
      xl: '880px',
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
