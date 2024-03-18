import { type ChakraTheme } from '@chakra-ui/react';

import { dateTextComponent } from './dateText';
import { durationTextComponent } from './durationText';
import { headingsComponents } from './headings';
import { periodTextComponent } from './periodText';
import { timeTextComponent } from './timeText';

export { DateText } from './dateText';
export { DurationText } from './durationText';
export {
  H1Heading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
} from './headings';
export { PeriodText } from './periodText';
export { TimeText } from './timeText';

export const typographyComponents = {
  ...dateTextComponent,
  ...durationTextComponent,
  ...headingsComponents,
  ...periodTextComponent,
  ...timeTextComponent,
} satisfies ChakraTheme['components'];
