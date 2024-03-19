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
import { FaQuestion } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Question');

export type QuestionProps = ChakraAlertProps;

export const Question = forwardRef<QuestionProps, 'div'>(
  ({ children, variant, ...props }, ref) => {
    const styles = useMultiStyleConfig('Question', {
      ...alertAnatomy.keys,
      variant,
    });

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="warning"
          variant={variant}
          sx={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon sx={styles.icon} as={FaQuestion} />
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
    backgroundColor: '#eadcbf',
    borderLeftColor: '#cf8b5e',
    borderLeftWidth: '0.2em',
    borderLeftStyle: 'solid',
    fontSize: '1em',
    color: '#443c37',

    _dark: {
      backgroundColor: '#eadcbf',
      borderLeftColor: '#cf8b5e',
      color: '#443c37',
    },
  },
  description: {
    lineHeight: '1.5em',
  },
  icon: {
    color: '#cf8b5e',
    boxSize: '1em',
    marginRight: '1em',

    _dark: {
      color: '#cf8b5e',
    },
  },
});

export const questionStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
    slide: slideStyle,
  },
  defaultProps: {
    variant: 'subtle',
  },
});
