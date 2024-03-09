import { SlideContent, SlideNote } from '@/components/core';

export const getSlides = () => {
  const maxSlides = 25;
  const contents = [];
  const notes = [];

  for (let i = 0; i < maxSlides; i++) {
    contents.push(<SlideContent key={i}>Content {i + 1}</SlideContent>);
    notes.push(<SlideNote key={i}>Note {i + 1}</SlideNote>);
  }
  return { contents, notes };
};
