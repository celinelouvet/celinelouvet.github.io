import { type ThemingConfig } from '@chakra-ui/react';

import { dateFormatterRecipe } from './DateFormatter.recipe';

export const recipe = {
  dateFormatter: dateFormatterRecipe,
} as ThemingConfig['recipes'];
export { DateFormatter } from './DateFormatter';
