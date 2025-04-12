import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const data = [
  { text: 'Besoin défini' },
  { text: 'Priorités définies' },
  { text: 'Objectifs à atteindre', highlighted: true, shown: false },
  { text: 'Faire des choix' },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Réponse au besoin"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
