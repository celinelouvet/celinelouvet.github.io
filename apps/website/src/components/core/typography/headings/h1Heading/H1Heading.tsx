import {
  type HeadingProps as ChakraHeadingProps,
  type RecipeVariantProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { h1HeadingRecipe } from './H1Heading.recipe';

type H1HeadingVariantProps = RecipeVariantProps<typeof h1HeadingRecipe>;

export interface H1HeadingProps
  extends Omit<ChakraHeadingProps, 'size'>,
    React.PropsWithChildren<H1HeadingVariantProps> {}

export const H1Heading = React.forwardRef<HTMLHeadingElement, H1HeadingProps>(
  function H1Heading(props, ref) {
    const { children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h1HeadingRecipe });
    const styles = recipe(restProps);

    return (
      <chakra.h1 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h1>
    );
  },
);
