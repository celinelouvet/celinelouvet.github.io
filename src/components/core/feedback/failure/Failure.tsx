import { alertAnatomy } from '@chakra-ui/anatomy';
import {
  Box,
  Alert as ChakraAlert,
  AlertDescription as ChakraAlertDescription,
  AlertIcon as ChakraAlertIcon,
  type AlertProps as ChakraAlertProps,
  AlertTitle as ChakraAlertTitle,
  createMultiStyleConfigHelpers,
  createStylesContext,
  forwardRef,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FaBomb } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Failure');

export type FailureProps = ChakraAlertProps & {
  title?: string;
};

export const Failure = forwardRef<FailureProps, 'div'>(
  ({ title, children, variant, ...props }, ref) => {
    const styles = useMultiStyleConfig('Failure', {
      ...alertAnatomy.keys,
      variant,
    });

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="error"
          variant={variant}
          sx={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon sx={styles.icon} as={FaBomb} />
          <Box width="100%" height="100%">
            {title ? (
              <ChakraAlertTitle sx={styles.title}>{title}</ChakraAlertTitle>
            ) : null}
            <ChakraAlertDescription sx={styles.description}>
              {children}
            </ChakraAlertDescription>
          </Box>
        </ChakraAlert>
      </StylesProvider>
    );
  }
);

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 'md',
  },
  icon: {},
});

const slideStyle = definePartsStyle({
  container: {
    borderRadius: '0.25em',
    backgroundColor: '#e3b4b7',
    borderLeftColor: '#cc5152',
    borderLeftWidth: '0.2em',
    borderLeftStyle: 'solid',
    fontSize: '1em',
    color: '#3d3b46',

    _dark: {
      backgroundColor: '#e3b4b7',
      borderLeftColor: '#cc5152',
      color: '#3d3b46',
    },
  },
  description: {
    lineHeight: '1.5em',
  },
  icon: {
    color: '#cc5152',
    boxSize: '1em',
    marginRight: '1em',

    _dark: {
      color: '#cc5152',
    },
  },
  title: {
    lineHeight: '1.5em',
    marginBottom: '0.5em',
  },
});

export const failureStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
    slide: slideStyle,
  },
  defaultProps: {
    variant: 'subtle',
  },
});
