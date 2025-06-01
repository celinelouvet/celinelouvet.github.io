import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const data = [
  { text: 'Tech radar' },
  { text: 'Golden path', shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Utilisation de l’existant"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
