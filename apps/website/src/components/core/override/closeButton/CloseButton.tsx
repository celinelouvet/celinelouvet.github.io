import type { IconButtonProps, RecipeVariantProps } from '@chakra-ui/react';
import { IconButton, useRecipe } from '@chakra-ui/react';
import * as React from 'react';
import { BsXLg } from 'react-icons/bs';

import { closeButtonRecipe } from './CloseButton.recipe';

type CloseButtonVariantProps = RecipeVariantProps<typeof closeButtonRecipe>;

export interface CloseButtonProps
  extends Omit<IconButtonProps, 'children'>,
    React.PropsWithChildren<CloseButtonVariantProps> {}

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  const recipe = useRecipe({ recipe: closeButtonRecipe });
  const styles = recipe(props);

  return (
    <IconButton
      variant="ghost"
      aria-label="Close"
      ref={ref}
      css={styles}
      {...props}
    >
      <BsXLg />
    </IconButton>
  );
});
