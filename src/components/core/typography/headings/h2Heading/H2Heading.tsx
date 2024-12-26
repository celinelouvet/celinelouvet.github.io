import {
  type HeadingProps as ChakraHeadingProps,
  type RecipeVariantProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { h2HeadingRecipe } from './H2Heading.recipe';

type H2HeadingVariantProps = RecipeVariantProps<typeof h2HeadingRecipe>;

export interface H2HeadingProps
  extends Omit<ChakraHeadingProps, 'size'>,
    React.PropsWithChildren<H2HeadingVariantProps> {}

export const H2Heading = React.forwardRef<HTMLHeadingElement, H2HeadingProps>(
  function H2Heading(props, ref) {
    const { visual, size, children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h2HeadingRecipe });
    const styles = recipe({ visual, size });

    return (
      <chakra.h2 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h2>
    );
  },
);
