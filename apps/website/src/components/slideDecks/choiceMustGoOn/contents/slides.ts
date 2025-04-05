'use client';

import type { Slide } from '@/components/core';

import EndTitle from './endTitle';
import Introduction from './introduction';
import MainTitle from './mainTitle';
import Preface from './preface';

export const getSlides = () => {
  return ([] as Slide[]).concat(MainTitle, Preface, Introduction, EndTitle);
};
