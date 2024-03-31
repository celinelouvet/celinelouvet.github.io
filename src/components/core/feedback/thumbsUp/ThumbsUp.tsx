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
import { FaThumbsUp } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('ThumbsUp');

export type ThumbsUpProps = ChakraAlertProps & {
  title?: string;
};

export const ThumbsUp = forwardRef<ThumbsUpProps, 'div'>(
  ({ title, children, variant, ...props }, ref) => {
    const styles = useMultiStyleConfig('ThumbsUp', {
      ...alertAnatomy.keys,
      variant,
    });

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="success"
          variant={variant}
          sx={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon sx={styles.icon} as={FaThumbsUp} />
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
    backgroundColor: '#cbeedc',
    borderColor: '#517c71',
    borderLeftWidth: '0.2em',
    borderLeftStyle: 'solid',
    fontSize: '1em',
    color: '#304a4f',
    lineHeight: '1.5em',

    _dark: {
      backgroundColor: '#cbeedc',
      borderColor: '#517c71',
    },
  },
  description: {
    lineHeight: '1.5em',
  },
  icon: {
    color: '#517c71',
    boxSize: '1em',
    marginRight: '1em',

    _dark: {
      color: '#517c71',
    },
  },
  title: {
    lineHeight: '1.5em',
    marginBottom: '0.5em',
  },
});

export const thumbsUpStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
    slide: slideStyle,
  },
  defaultProps: {
    variant: 'subtle',
  },
});
