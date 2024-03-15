'use client';

import EndTitle from './EndTitle';
import Introduction from './Introduction';
import MainTitle from './MainTitle';

export const getSlides = () => {
  const slides = [MainTitle, Introduction, EndTitle];

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
