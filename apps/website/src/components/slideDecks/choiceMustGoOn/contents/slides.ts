'use client';

import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './mainTitle/MainTitle';
import Yeeso from './Yeeso';

export const getSlides = () => {
  return [MainTitle, Introduction, Yeeso, EndTitle];
};
