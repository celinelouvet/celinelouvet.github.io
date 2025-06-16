import { type ThemingConfig } from '@chakra-ui/react';

import { remoteTextRecipe } from './RemoteText.recipe';

export const recipe = {
  remoteText: remoteTextRecipe,
} as ThemingConfig['recipes'];
export { RemoteText } from './RemoteText';
