'use client';

import Abstract from './Abstract';
import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import PromotionLyonCraft from './PromotionLyonCraft';
import SurveySectionTitle from './SurveySectionTitle';

export const getSlides = () => {
  return [
    MainTitle,
    SurveySectionTitle,
    Introduction,

    EndTitle,

    PromotionLyonCraft,
    Abstract,
  ];
};
