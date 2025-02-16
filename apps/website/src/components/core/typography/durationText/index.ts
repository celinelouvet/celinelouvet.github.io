import { type ThemingConfig } from '@chakra-ui/react';

import { durationTextRecipe } from './DurationText.recipe';

export { DurationText } from './DurationText';
export const recipe = {
  durationText: durationTextRecipe,
} as ThemingConfig['recipes'];
