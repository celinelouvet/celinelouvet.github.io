import {
  Container as ChakraContainer,
  type ContainerProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';

import { headerContainerRecipe } from './HeaderContainer.recipe';

type HeaderContainerVariantProps = RecipeVariantProps<
  typeof headerContainerRecipe
>;

export interface HeaderContainerProps
  extends ContainerProps,
    React.PropsWithChildren<HeaderContainerVariantProps> {}

export const HeaderContainer = React.forwardRef<
  HTMLDivElement,
  HeaderContainerProps
>(function (props, ref) {
  const { children, ...restProps } = props;

  const recipe = useRecipe({ recipe: headerContainerRecipe });
  const styles = recipe(restProps);

  return (
    <ChakraContainer css={styles} ref={ref} {...restProps}>
      {children}
    </ChakraContainer>
  );
});
