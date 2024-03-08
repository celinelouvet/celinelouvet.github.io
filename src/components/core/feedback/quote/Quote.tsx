import { alertAnatomy } from '@chakra-ui/anatomy';
import {
  Alert as ChakraAlert,
  AlertDescription as ChakraAlertDescription,
  AlertIcon as ChakraAlertIcon,
  type AlertProps as ChakraAlertProps,
  createMultiStyleConfigHelpers,
  createStylesContext,
  forwardRef,
  useColorModeValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FaQuoteRight } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Quote');

export type QuoteProps = ChakraAlertProps;

export const Quote = forwardRef<QuoteProps, 'div'>(
  ({ children, ...props }, ref) => {
    const styles = useMultiStyleConfig('Quote', {
      ...alertAnatomy.keys,
    });

    const containerBgColor = useColorModeValue('brand.700', 'brand.300');

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="info"
          variant="subtle"
          bgColor={containerBgColor}
          borderRadius="md"
          marginBottom="6"
          __css={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon
            color="brand.500"
            __css={styles.icon}
            as={FaQuoteRight}
          />
          <ChakraAlertDescription __css={styles.description}>
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
  container: {},
  icon: {},
});

export const quoteStyles = defineMultiStyleConfig({
  baseStyle,
});
