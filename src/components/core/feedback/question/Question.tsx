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
  ({ children, ...props }, ref) => {
    const styles = useMultiStyleConfig('Question', {
      ...alertAnatomy.keys,
    });

    return (
      <StylesProvider value={styles}>
        <ChakraAlert
          status="warning"
          variant="subtle"
          marginBottom="6"
          __css={styles.container}
          ref={ref}
          {...props}
        >
          <ChakraAlertIcon __css={styles.icon} as={FaQuestion} />
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

export const questionStyles = defineMultiStyleConfig({
  baseStyle,
});
