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

export const questionStyles = defineMultiStyleConfig({
  baseStyle,
  variants: {
    subtle: {},
  },
  defaultProps: {
    variant: 'subtle',
  },
});
