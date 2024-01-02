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
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Period } from '@/data';

export type DurationTextProps = Omit<ChakraTextProps, 'children'> & {
  period: Period;
};

export const DurationText = forwardRef<DurationTextProps, 'span'>(
  ({ period, ...props }, ref) => {
    const styles = useStyleConfig('DurationText');

    const from = dayjs(period.from);
    const to = period.to ? dayjs(period.to) : dayjs();

    const years = to.diff(from, 'year');

    const months = to.diff(from, 'month', true) - years * 12;
    const roundedMonths = Math.round(months);

    return (
      <ChakraText as="span" sx={styles} {...props} ref={ref}>
        (<DurationContent years={years} months={roundedMonths} />)
      </ChakraText>
    );
  }
);

export const durationTextStyles = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('gray.500', 'gray.400')(props),
    fontFamily: 'Nunito',
    fontSize: 'xs',
  }),
} satisfies StyleConfig;

type DurationContentProps = {
  years: number;
  months: number;
};

const DurationContent: FC<DurationContentProps> = ({ years, months }) => {
  const { t } = useTranslation('common', { keyPrefix: 'dates' });

  const yearsText = t('years', { count: years });
  const monthsText = t('months', { count: months });

  if (years > 0 && months === 0) {
    return <>{yearsText}</>;
  }
  if (years === 0 && months > 0) {
    return <>{monthsText}</>;
  }

  return <>{`${yearsText}, ${monthsText}`}</>;
};
