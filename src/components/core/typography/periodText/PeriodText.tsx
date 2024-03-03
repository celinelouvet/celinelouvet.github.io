import {
  Text as ChakraText,
  type TextProps as ChakraTextProps,
  type StyleConfig,
  type StyleFunctionProps,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateText } from '@/components/core';
import { type Period } from '@/data';

export type PeriodTextProps = Omit<ChakraTextProps, 'children'> & {
  period: Period;
};

export const PeriodText = forwardRef<PeriodTextProps, 'span'>(
  ({ period, size, ...props }, ref) => {
    const styles = useStyleConfig('PeriodText', { size });

    return (
      <ChakraText as="span" sx={styles} {...props} ref={ref}>
        <DateText
          when={period.from}
          dateFormat="MMM YYYY"
          as="span"
          marginRight="1"
        />
        <ChakraText as="span" marginRight="1">
          -
        </ChakraText>
        <ToComponent period={period} />
      </ChakraText>
    );
  }
);

export const periodTextStyles = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('gray.500', 'gray.400')(props),
    fontFamily: 'Nunito',
  }),
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  defaultProps: {
    size: 'sm',
  },
} satisfies StyleConfig;

const ToComponent: FC<PeriodTextProps> = ({ period }) => {
  const { t } = useTranslation('common', { keyPrefix: 'dates' });

  if (!period.to) {
    return <ChakraText as="span">{t('today')}</ChakraText>;
  }

  return <DateText when={period.to} dateFormat="MMM YYYY" as="span" />;
};
