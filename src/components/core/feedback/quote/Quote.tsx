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
import { FaQuoteRight } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Quote');

export type QuoteProps = ChakraAlertProps & {
  title?: string;
};

export const Quote = forwardRef<QuoteProps, 'div'>(
  ({ title, children, variant, ...props }, ref) => {
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
    backgroundColor: 'brand.700',
    borderLeftColor: 'brand.400',
    borderLeftWidth: '0.2em',
    borderLeftStyle: 'solid',
    fontSize: '1em',
    color: 'brand.200',

    _dark: {
      borderLeftColor: 'brand.400',
      backgroundColor: 'brand.700',
      color: 'brand.200',
    },
  },
  description: {
    lineHeight: '1.5em',
  },
  icon: {
    color: 'brand.300',
    boxSize: '1em',
    marginRight: '1em',

    _dark: {
      color: 'brand.300',
    },
  },
  title: {
    lineHeight: '1.5em',
    marginBottom: '0.5em',
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
