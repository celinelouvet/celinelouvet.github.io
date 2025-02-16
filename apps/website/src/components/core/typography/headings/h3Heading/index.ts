import { type ThemingConfig } from '@chakra-ui/react';

import { h3HeadingRecipe } from './H3Heading.recipe';

export { H3Heading } from './H3Heading';
export { h3HeadingRecipe } from './H3Heading.recipe';

export const recipe = {
  h3Heading: h3HeadingRecipe,
} as ThemingConfig['recipes'];
