import {
  Heading as ChakraHeading,
  type HeadingProps as ChakraHeadingProps,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';

export type TimeTextProps = ChakraHeadingProps & {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export const TimeText = forwardRef<TimeTextProps, 'h2'>(
  ({ hours, minutes = 0, seconds = 0, ...props }, ref) => {
    const styles = useStyleConfig('TimeText');

    const pad = (value?: number) =>
      value !== undefined ? value.toString().padStart(2, '0') : '';

    const text = [hours, minutes, seconds]
      .filter((value) => value !== undefined)
      .map((value) => pad(value))
      .join(':');

    return (
      <ChakraHeading sx={styles} {...props} ref={ref}>
        {text}
      </ChakraHeading>
    );
  }
);

export const timeTextStyles = {
  baseStyle: {
    fontFamily: 'Noto Mono',
    fontWeight: '400',
    textAlign: 'center',
  },
} satisfies StyleConfig;
