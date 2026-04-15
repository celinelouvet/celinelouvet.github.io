'use client';

import type { Slide } from 'src/components/slide';

import MainTitle from './mainTitle';

export const getSlides = () => {
  return [...MainTitle] satisfies Slide[];
};
