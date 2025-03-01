import {
  type RecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';

import { dateTextRecipe } from './DateText.recipe';

type DateTextVariantProps = RecipeVariantProps<typeof dateTextRecipe> & {
  when: string;
  dateFormat: string;
};

export interface DateTextProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<DateTextVariantProps> {}

export const DateText = React.forwardRef<HTMLSpanElement, DateTextProps>(
  function DateText(props, ref) {
    const { dateFormat, when, ...restProps } = props;

    const recipe = useRecipe({ recipe: dateTextRecipe });
    const styles = recipe(restProps);

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        {dayjs(when).format(dateFormat)}
      </chakra.span>
    );
  },
);
