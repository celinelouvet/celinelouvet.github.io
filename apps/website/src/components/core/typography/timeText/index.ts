import { type ThemingConfig } from '@chakra-ui/react';

import { timeTextRecipe } from './TimeText.recipe';

export const recipe = { timeText: timeTextRecipe } as ThemingConfig['recipes'];

export { TimeText } from './TimeText';
