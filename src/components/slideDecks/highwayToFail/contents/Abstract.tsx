import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

export const content = (
  <SlideContent
    type={SlideContentTypes.abstract}
    topic={talk.abstract.title}
    descriptions={talk.abstract.descriptions}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
