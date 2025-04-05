import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Chaos report"
    alignContent="flex-start"
  ></SlideContent>
);

const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
