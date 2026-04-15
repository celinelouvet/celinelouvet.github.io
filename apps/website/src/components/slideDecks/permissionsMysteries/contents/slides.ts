'use client';

import type { Slide } from 'src/components/slide';

import Introduction from './introduction';
import MainTitle from './mainTitle';

export const getSlides = () => {
  return [...MainTitle, ...Introduction] satisfies Slide[];
};
