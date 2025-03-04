import { type ThemingConfig } from '@chakra-ui/react';

import { closeButtonRecipe } from './CloseButton.recipe';

export { CloseButton } from './CloseButton';

export const recipe = {
  closeButton: closeButtonRecipe,
} as ThemingConfig['recipes'];
