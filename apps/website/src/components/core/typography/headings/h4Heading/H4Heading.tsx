import {
  type HeadingProps as ChakraHeadingProps,
  type RecipeVariantProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { h4HeadingRecipe } from './H4Heading.recipe';

type H4HeadingVariantProps = RecipeVariantProps<typeof h4HeadingRecipe>;

export interface H4HeadingProps
  extends Omit<ChakraHeadingProps, 'size'>,
    React.PropsWithChildren<H4HeadingVariantProps> {}

export const H4Heading = React.forwardRef<HTMLHeadingElement, H4HeadingProps>(
  function H4Heading(props, ref) {
    const { children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h4HeadingRecipe });
    const styles = recipe(restProps);

    return (
      <chakra.h4 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h4>
    );
  },
);
