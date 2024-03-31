import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

export const content = (
  <SlideContent
    type={SlideContentTypes.introduction}
    author={talk.author}
    descriptions={talk.descriptions}
    socials={talk.socials}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
