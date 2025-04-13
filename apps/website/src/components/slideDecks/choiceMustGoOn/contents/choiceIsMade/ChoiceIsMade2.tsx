import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Décision prise"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
