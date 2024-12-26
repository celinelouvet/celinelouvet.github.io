import {
  type RecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { type FC } from 'react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { type Period } from '@/data';

import { durationTextRecipe } from './DurationText.recipe';

type DurationTextVariantProps = RecipeVariantProps<
  typeof durationTextRecipe
> & {
  period: Period;
};

export interface DurationTextProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<DurationTextVariantProps> {}

export const DurationText = React.forwardRef<
  HTMLSpanElement,
  DurationTextProps
>(function DurationText(props, ref) {
  const { period, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: durationTextRecipe });
  const styles = recipe({ size });

  const from = dayjs(period.from);
  const to = period.to ? dayjs(period.to) : dayjs();

  const years = to.diff(from, 'year');

  const months = to.diff(from, 'month', true) - years * 12;
  const roundedMonths = Math.round(months);

  return (
    <chakra.span css={styles} {...restProps} ref={ref}>
      (<DurationContent years={years} months={roundedMonths} />)
    </chakra.span>
  );
});

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
