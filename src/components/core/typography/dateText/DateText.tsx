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
  ({ dateFormat, size, variant, when, ...props }, ref) => {
    const styles = useStyleConfig('DateText', { size, variant });

    return (
      <ChakraText as="span" sx={styles} {...props} ref={ref}>
        {dayjs(when).format(dateFormat)}
      </ChakraText>
    );
  }
);

export const dateTextStyles = {
  baseStyle: {
    fontFamily: 'Nunito',
  },
  sizes: {
    lg: {
      fontSize: 'lg',
    },
    md: {
      fontSize: 'md',
    },
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    basic: (props: StyleFunctionProps) => ({
      color: mode('gray.500', 'gray.400')(props),
    }),
    slide: {
      fontSize: '1em',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'basic',
  },
} satisfies StyleConfig;
