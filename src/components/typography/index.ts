import { type ChakraTheme } from '@chakra-ui/react';

import { headingsComponents } from './headings';

export {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from './headings';

export const typographyComponents = {
  ...headingsComponents,
} satisfies ChakraTheme['components'];
