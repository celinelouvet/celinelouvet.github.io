import type { Slide } from '@/components/slide';

import After from './after';
import AfterEnd from './afterEnd';
import AfterSectionTitle from './AfterSectionTitle';

export const slides = [
  AfterSectionTitle,
  ...AfterEnd,
  ...After,
] satisfies Slide[];
