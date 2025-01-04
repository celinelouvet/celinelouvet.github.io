import { type ThemingConfig } from '@chakra-ui/react';

import { h2HeadingRecipe } from './H2Heading.recipe';

export { H2Heading } from './H2Heading';
export { h2HeadingRecipe } from './H2Heading.recipe';

export const recipe = {
  h2Heading: h2HeadingRecipe,
} as ThemingConfig['recipes'];
