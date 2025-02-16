import {
  Container as ChakraContainer,
  type ContainerProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { pageContainerRecipe } from './PageContainer.recipe';

type PageContainerVariantProps = RecipeVariantProps<typeof pageContainerRecipe>;

export interface PageContainerProps
  extends ContainerProps,
    React.PropsWithChildren<PageContainerVariantProps> {}

export const PageContainer = React.forwardRef<
  HTMLDivElement,
  PageContainerProps
>(function (props, ref) {
  const { children, ...restProps } = props;

  const recipe = useRecipe({ recipe: pageContainerRecipe });
  const styles = recipe(props);

  return (
    <ChakraContainer css={styles} ref={ref} {...restProps}>
      {children}
    </ChakraContainer>
  );
});
