import { type Slide, SlideContent, SlideNote } from '@/components/core';

export const getSlides = (): Slide[] => {
  const maxSlides = 25;

  const slides: Slide[] = [];

  for (let i = 0; i < maxSlides; i++) {
    slides.push({
      content: <SlideContent>Content {i + 1}</SlideContent>,
      note: <SlideNote minutes={i + 1}>Note {i + 1}</SlideNote>,
    });
  }
  return slides;
};
