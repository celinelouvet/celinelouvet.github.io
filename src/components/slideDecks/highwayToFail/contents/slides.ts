'use client';

import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import PromotionLyonCraft from './PromotionLyonCraft';

export const getSlides = () => {
  const slides = [MainTitle, Introduction, EndTitle, PromotionLyonCraft];

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
