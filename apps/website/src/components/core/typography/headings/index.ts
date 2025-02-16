import { type ThemingConfig } from '@chakra-ui/react';

import { recipe as h1HeadingRecipe } from './h1Heading';
import { recipe as h2HeadingRecipe } from './h2Heading';
import { recipe as h3HeadingRecipe } from './h3Heading';
import { recipe as h4HeadingRecipe } from './h4Heading';
import { recipe as h5HeadingRecipe } from './h5Heading';

export { H1Heading } from './h1Heading';
export { H2Heading } from './h2Heading';
export { H3Heading } from './h3Heading';
export { H4Heading } from './h4Heading';
export { H5Heading } from './h5Heading';

export const recipes = {
  ...h1HeadingRecipe,
  ...h2HeadingRecipe,
  ...h3HeadingRecipe,
  ...h4HeadingRecipe,
  ...h5HeadingRecipe,
} as ThemingConfig['recipes'];
