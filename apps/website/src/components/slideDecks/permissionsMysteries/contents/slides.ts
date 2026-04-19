'use client';

import type { Slide } from 'src/components/slide';

import Example from './example';
import Introduction from './introduction';
import MainTitle from './mainTitle';

export const getSlides = () => {
  return [...MainTitle, ...Introduction, ...Example] satisfies Slide[];
};
