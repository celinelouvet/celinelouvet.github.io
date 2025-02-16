import {
  type RecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type Period } from '@/data';

import { periodTextRecipe } from './PeriodText.recipe';
import { DateText } from '../dateText';

type PeriodTextVariantProps = RecipeVariantProps<typeof periodTextRecipe> & {
  period: Period;
};

export interface PeriodTextProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<PeriodTextVariantProps> {}

export const PeriodText = React.forwardRef<HTMLSpanElement, PeriodTextProps>(
  function PeriodText(props, ref) {
    const { period, ...restProps } = props;

    const recipe = useRecipe({ recipe: periodTextRecipe });
    const styles = recipe(props);

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <DateText when={period.from} dateFormat="MMM YYYY" marginRight="1" />
        <chakra.span marginRight="1">-</chakra.span>
        <ToComponent period={period} />
      </chakra.span>
    );
  },
);

const ToComponent: FC<PeriodTextProps> = ({ period }) => {
  const { t } = useTranslation('common', { keyPrefix: 'dates' });

  if (!period.to) {
    return <chakra.span>{t('today')}</chakra.span>;
  }

  return <DateText when={period.to} dateFormat="MMM YYYY" as="span" />;
};
