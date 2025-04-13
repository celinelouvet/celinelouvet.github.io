import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title="Conclusion"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
