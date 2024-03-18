import { alertAnatomy } from '@chakra-ui/anatomy';
import {
  Alert as ChakraAlert,
  AlertDescription as ChakraAlertDescription,
  AlertIcon as ChakraAlertIcon,
  type AlertProps as ChakraAlertProps,
  createMultiStyleConfigHelpers,
  createStylesContext,
  forwardRef,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FaThumbsUp } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('ThumbsUp');

export type ThumbsUpProps = ChakraAlertProps;

export const ThumbsUp = forwardRef<ThumbsUpProps, 'div'>(
  ({ children, variant, ...props }, ref) => {
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
          <ChakraAlertDescription sx={styles.description}>
            {children}
          </ChakraAlertDescription>
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
