import {
  type HeadingProps as ChakraHeadingProps,
  type RecipeVariantProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { h5HeadingRecipe } from './H5Heading.recipe';

type H5HeadingVariantProps = RecipeVariantProps<typeof h5HeadingRecipe>;

export interface H5HeadingProps
  extends Omit<ChakraHeadingProps, 'size'>,
    React.PropsWithChildren<H5HeadingVariantProps> {}

export const H5Heading = React.forwardRef<HTMLHeadingElement, H5HeadingProps>(
  function H5Heading(props, ref) {
    const { children, ...restProps } = props;

    const recipe = useRecipe({ recipe: h5HeadingRecipe });
    const styles = recipe(props);

    return (
      <chakra.h5 css={styles} {...restProps} ref={ref}>
        {children}
      </chakra.h5>
    );
  },
);
