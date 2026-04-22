import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Cadrer le besoin"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
