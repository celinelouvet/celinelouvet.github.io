import { type ThemingConfig } from '@chakra-ui/react';

import { h4HeadingRecipe } from './H4Heading.recipe';

export { H4Heading } from './H4Heading';
export { h4HeadingRecipe } from './H4Heading.recipe';

export const recipe = {
  h4Heading: h4HeadingRecipe,
} as ThemingConfig['recipes'];
