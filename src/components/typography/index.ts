import { type ChakraTheme } from '@chakra-ui/react';

import { dateTextComponent } from './dateText';
import { headingsComponents } from './headings';

export { DateText } from './dateText';
export {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from './headings';

export const typographyComponents = {
  ...dateTextComponent,
  ...headingsComponents,
} satisfies ChakraTheme['components'];
