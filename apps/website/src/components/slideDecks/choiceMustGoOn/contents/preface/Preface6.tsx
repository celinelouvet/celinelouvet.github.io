import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Facteurs de mise en difficulté"
    alignContent="flex-start"
    topRightCorner="2015"
  ></SlideContent>
);

export const note = (
  <SlideNote>Ils ont aussi listé des facteurs de mise en difficulté</SlideNote>
);

const slide = { content, note };
export default slide;
