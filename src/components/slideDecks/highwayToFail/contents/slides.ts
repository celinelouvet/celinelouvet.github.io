'use client';

import Abstract from './Abstract';
import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import PromotionLyonCraft from './PromotionLyonCraft';
import SurveySectionTitle from './SurveySectionTitle';

export const getSlides = () => {
  const slides = [
    MainTitle,
    SurveySectionTitle,
    Introduction,

    EndTitle,
    PromotionLyonCraft,
    Abstract,
  ];

  const contents = slides.map((slide, index) => ({
    ...slide.content,
    key: `content-${index}`,
  }));
  const notes = slides.map((slide, index) => ({
    ...slide.note,
    key: `notes-${index}`,
  }));

  return { contents, notes };
};
