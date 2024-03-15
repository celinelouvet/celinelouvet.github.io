import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const getSlides = () => {
  const maxSlides = 25;
  const contents = [];
  const notes = [];

  for (let i = 0; i < maxSlides; i++) {
    contents.push(
      <SlideContent
        key={i}
        type={SlideContentTypes.title}
        title={`Content ${i + 1}`}
        author="Author"
      />
    );
    notes.push(
      <SlideNote key={i} minutes={i + 1}>
        Note {i + 1}
      </SlideNote>
    );
  }
  return { contents, notes };
};
