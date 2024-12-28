import {
  type HeadingProps as ChakraHeadingProps,
  type RecipeVariantProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { h3HeadingRecipe } from './H3Heading.recipe';

type H3HeadingVariantProps = RecipeVariantProps<typeof h3HeadingRecipe>;

export interface H3HeadingProps
  extends Omit<ChakraHeadingProps, 'size'>,
    React.PropsWithChildren<H3HeadingVariantProps> {}

export const H3Heading = React.forwardRef<HTMLHeadingElement, H3HeadingProps>(
  function H3Heading(props, ref) {
    const { visual, size, children, ...restProps } = props;
    const recipe = useRecipe({ recipe: h3HeadingRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.h3 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h3>
    );
  },
);
