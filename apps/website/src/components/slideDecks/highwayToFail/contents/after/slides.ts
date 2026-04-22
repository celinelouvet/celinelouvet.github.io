import type { Slide } from 'src/components/slide';

import After from './after';
import AfterEnd from './afterEnd';
import AfterSectionTitle from './AfterSectionTitle';

export const slides = [
  AfterSectionTitle,
  ...AfterEnd,
  ...After,
] satisfies Slide[];
