import {
  Text as ChakraText,
  type TextProps as ChakraTextProps,
  type StyleConfig,
  type StyleFunctionProps,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import dayjs from 'dayjs';

export type DateTextProps = Omit<ChakraTextProps, 'children'> & {
  when: string;
  dateFormat: string;
};

export const DateText = forwardRef<DateTextProps, 'span'>(
  ({ dateFormat, when, ...props }, ref) => {
    const styles = useStyleConfig('DateText');

    return (
      <ChakraText as="span" sx={styles} {...props} ref={ref}>
        {dayjs(when).format(dateFormat)}
      </ChakraText>
    );
  }
);

export const dateTextStyles = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('gray.500', 'gray.400')(props),
    fontFamily: 'Nunito',
    fontSize: 'xs',
  }),
} satisfies StyleConfig;
