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
import { FaQuoteRight } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Quote');

export type QuoteProps = ChakraAlertProps;

export const Quote = forwardRef<QuoteProps, 'div'>(
  ({ children, variant, ...props }, ref) => {
    const styles = useMultiStyleConfig('Quote', {
      ...alertAnatomy.keys,
      variant,
    });

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="info"
          variant={variant}
          sx={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon sx={styles.icon} as={FaQuoteRight} />
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
    borderColor: 'brand.400',
    backgroundColor: 'brand.700',
    color: 'brand.200',

    _dark: {
      backgroundColor: 'brand.300',
      color: 'brand.700',
      borderColor: 'brand.600',
    },
  },
  icon: {
    color: 'brand.400',

    _dark: {
      color: 'brand.600',
    },
  },
});

const solidStyle = definePartsStyle({
  container: {
    backgroundColor: 'brand.400',
    color: 'brand.900',

    _dark: {
      backgroundColor: 'brand.600',
      color: 'brand.200',
    },
  },
  icon: {
    color: 'brand.700',

    _dark: {
      color: 'brand.300',
    },
  },
});

const slideStyle = definePartsStyle({
  container: {
    borderRadius: '0.25em',
    borderColor: 'brand.600',
    borderWidth: '1px',
    borderStyle: 'solid',
    fontSize: '1em',

    _dark: {
      borderColor: 'brand.400',
    },
  },
  description: {
    lineHeight: '1.5em',
  },
  icon: {
    color: 'brand.300',
  },
});

export const quoteStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
    solid: solidStyle,
    slide: slideStyle,
  },
  defaultProps: {
    variant: 'subtle',
  },
});
