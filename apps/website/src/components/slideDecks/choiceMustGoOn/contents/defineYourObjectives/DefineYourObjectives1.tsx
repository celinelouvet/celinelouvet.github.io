import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Réponse au besoin"
    alignContent="flex-start"
  ></SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
