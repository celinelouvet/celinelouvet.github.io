import {
  type RecipeVariantProps as ChakraRecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import type { Period } from '@/data';

import { dateFormatterRecipe } from './DateFormatter.recipe';

type RecipeVariantProps = ChakraRecipeVariantProps<typeof dateFormatterRecipe>;

type DateFormatterVariantProps = RecipeVariantProps & {
  type: 'date' | 'period' | 'duration';
  when?: string;
  dateFormat?: string;
  period?: Period;
};

export interface DateFormatterProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<DateFormatterVariantProps> {}

export const DateFormatter = React.forwardRef<
  HTMLSpanElement,
  DateFormatterProps
>(function DateFormatter(props, ref) {
  const { type, ...restProps } = props;

  const recipe = useRecipe({ recipe: dateFormatterRecipe });
  const styles = recipe(restProps);

  if (type === 'date') {
    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <DateText {...restProps} />
      </chakra.span>
    );
  }

  if (type === 'period') {
    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <PeriodText {...restProps} />
      </chakra.span>
    );
  }

  if (type === 'duration') {
    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <DurationText {...restProps} />
      </chakra.span>
    );
  }

  return null;
});

const DateText: React.FC<{ when?: string; dateFormat?: string }> = ({
  when,
  dateFormat,
}) => {
  if (!when || !dateFormat) {
    return null;
  }

  const formattedDate = format(new Date(when), dateFormat);
  return <span>{formattedDate}</span>;
};

const PeriodText: React.FC<{ period?: Period }> = ({ period }) => {
  const { t } = useTranslation('common', { keyPrefix: 'dates' });

  if (!period) {
    return null;
  }

  const from = format(period.from, 'MMM yyyy');
  const to = period.to ? format(period.to, 'MMM yyyy') : t('today');

  return (
    <span>
      {from} - {to}
    </span>
  );
};

const DurationText: React.FC<{ period?: Period }> = ({ period }) => {
  if (!period) {
    return null;
  }

  const duration = intervalToDuration({
    start: period.from,
    end: period.to ?? new Date(),
  });
  return (
    <span>
      {formatDuration(duration, {
        delimiter: ', ',
        format: ['years', 'months'],
      })}
    </span>
  );
};
