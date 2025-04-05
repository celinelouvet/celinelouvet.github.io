'use client';

import EndTitle from './endTitle';
import Introduction from './introduction';
import MainTitle from './mainTitle';
import Preface from './preface';

export const getSlides = () => {
  return [MainTitle, Preface, Introduction, EndTitle];
};
