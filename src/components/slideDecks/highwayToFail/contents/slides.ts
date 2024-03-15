'use client';

import Abstract from './Abstract';
import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import PromotionLyonCraft from './PromotionLyonCraft';

export const getSlides = () => {
  return [MainTitle, Introduction, EndTitle, PromotionLyonCraft, Abstract];
};
