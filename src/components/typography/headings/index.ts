import { type ChakraTheme } from '@chakra-ui/react';

import { h1HeadingStyles } from './H1Heading';
import { h2HeadingStyles } from './H2Heading';
import { h3HeadingStyles } from './H3Heading';
import { h4HeadingStyles } from './H4Heading';
import { h5HeadingStyles } from './H5Heading';

export const headingsComponents = {
  H1Heading: h1HeadingStyles,
  H2Heading: h2HeadingStyles,
  H3Heading: h3HeadingStyles,
  H4Heading: h4HeadingStyles,
  H5Heading: h5HeadingStyles,
} satisfies ChakraTheme['components'];

export { H1Heading } from './H1Heading';
export { H2Heading } from './H2Heading';
export { H3Heading } from './H3Heading';
export { H4Heading } from './H4Heading';
export { H5Heading } from './H5Heading';
