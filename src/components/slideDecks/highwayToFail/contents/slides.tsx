'use client';

import {
  type Slide,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

export const getSlides = (): Slide[] => {
  const maxSlides = 25;

  const slides: Slide[] = [];

  for (let i = 0; i < maxSlides; i++) {
    slides.push({
      content: (
        <SlideContent
          type={SlideContentTypes.title}
          title={`Content ${i + 1}`}
          author="Author"
        >
          Content {i + 1}
        </SlideContent>
      ),
      note: <SlideNote minutes={i + 1}>Note {i + 1}</SlideNote>,
    });
  }
  return slides;
};
