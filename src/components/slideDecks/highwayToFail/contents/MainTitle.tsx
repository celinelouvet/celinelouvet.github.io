import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

export const content = (
  <SlideContent
    type={SlideContentTypes.title}
    title={talk.title}
    author={talk.author}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
