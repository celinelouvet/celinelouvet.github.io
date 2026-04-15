import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { type Tile, Tiles } from '../../../components/tiles';

const data = [
  { text: 'Budget disponible', style: { width: '25%' } },
  { text: 'Temps disponible', style: { width: '25%' } },
  { text: 'Réglementation', style: { width: '25%' }, shown: false },
  { text: 'etc.', style: { width: '10%' }, shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Contraintes impossibles à ignorer"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
