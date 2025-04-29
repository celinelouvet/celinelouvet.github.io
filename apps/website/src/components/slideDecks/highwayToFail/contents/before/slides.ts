import type { Slide } from '@/components/slide';

import BeforeCC from './beforeCC';
import BeforeMe from './beforeMe';
import BeforeSectionTitle from './BeforeSectionTitle';

export const slides = [
  BeforeSectionTitle,
  ...BeforeCC,
  ...BeforeMe,
] satisfies Slide[];
