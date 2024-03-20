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
import { FaQuestion } from 'react-icons/fa';

const [StylesProvider] = createStylesContext('Question');

export type QuestionProps = ChakraAlertProps & {
  title?: string;
};

export const Question = forwardRef<QuestionProps, 'div'>(
  ({ title, children, variant, ...props }, ref) => {
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
    title: {
      lineHeight: '1.5em',
      marginBottom: '0.5em',
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
