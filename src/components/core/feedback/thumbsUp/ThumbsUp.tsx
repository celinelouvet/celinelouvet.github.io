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

export const thumbsUpStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
  },
  defaultProps: {
    variant: 'subtle',
  },
});
