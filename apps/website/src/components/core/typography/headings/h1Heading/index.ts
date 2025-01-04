import { type ThemingConfig } from '@chakra-ui/react';

import { h1HeadingRecipe } from './H1Heading.recipe';

export { H1Heading } from './H1Heading';
export { h1HeadingRecipe } from './H1Heading.recipe';

export const recipe = {
  h1Heading: h1HeadingRecipe,
} as ThemingConfig['recipes'];
