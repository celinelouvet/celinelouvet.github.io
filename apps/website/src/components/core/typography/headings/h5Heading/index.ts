import { type ThemingConfig } from '@chakra-ui/react';

import { h5HeadingRecipe } from './H5Heading.recipe';

export { H5Heading } from './H5Heading';
export { h5HeadingRecipe } from './H5Heading.recipe';

export const recipe = {
  h5Heading: h5HeadingRecipe,
} as ThemingConfig['recipes'];
