import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

const convention = talk.conventions['lyonCraft2024'];

export const content = (
  <SlideContent
    type={SlideContentTypes.promotion}
    author={talk.author}
    title={talk.title}
    convention={convention.name}
    time={convention.time}
    room={convention.room}
  />
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
