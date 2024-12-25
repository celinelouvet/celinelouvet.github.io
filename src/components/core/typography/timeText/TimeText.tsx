import {
  type RecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { timeTextRecipe } from './TimeText.recipe';

type TimeTextVariantProps = RecipeVariantProps<typeof timeTextRecipe> & {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export interface TimeTextProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<TimeTextVariantProps> {}

export const TimeText = React.forwardRef<HTMLSpanElement, TimeTextProps>(
  function TimeText(props, ref) {
    const { hours, minutes = 0, seconds = 0, ...restProps } = props;

    const recipe = useRecipe({ recipe: timeTextRecipe });
    const styles = recipe();

    const pad = (value?: number) =>
      value !== undefined ? value.toString().padStart(2, '0') : '';

    const text = [hours, minutes, seconds]
      .filter((value) => value !== undefined)
      .map((value) => pad(value))
      .join(':');

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        {text}
      </chakra.span>
    );
  },
);
