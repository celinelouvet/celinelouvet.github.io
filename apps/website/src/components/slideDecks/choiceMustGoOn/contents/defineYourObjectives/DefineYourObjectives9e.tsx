import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const data = [
  { text: 'À mettre en place' },
  { text: 'À maintenir' },
  { text: 'En cas de problème' },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Budget / Temps"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
