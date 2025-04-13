import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const data = [
  { title: 'Must have', text: 'Obligatoire', shown: false },
  { title: 'Should have', text: 'Présent, si possible', shown: false },
  { title: 'Could have', text: 'Bonus', shown: false },
  { title: 'Won’t have', text: 'Non nécessaire, pour l’instant', shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="MoSCoW"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
