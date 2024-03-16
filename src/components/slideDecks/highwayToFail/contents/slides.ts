'use client';

import Abstract from './Abstract';
import EndTitle from './EndTitle';
import Fairvioo1 from './Fairvioo1';
import Fairvioo2 from './Fairvioo2';
import Fairvioo3 from './Fairvioo3';
import Fairvioo4 from './Fairvioo4';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import PromotionLyonCraft from './PromotionLyonCraft';
import SurveySectionTitle from './SurveySectionTitle';

export const getSlides = () => {
  return [
    MainTitle,
    SurveySectionTitle,
    Introduction,

    Fairvioo1,
    Fairvioo2,
    Fairvioo3,
    Fairvioo4,

    EndTitle,

    PromotionLyonCraft,
    Abstract,
  ];
};
