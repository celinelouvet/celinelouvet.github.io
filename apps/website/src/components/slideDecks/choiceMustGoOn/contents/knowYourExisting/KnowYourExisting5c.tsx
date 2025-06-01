import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const data = [
  { title: 'Adopt', text: 'Recommandée et maîtrisée' },
  { title: 'Trial', text: 'Recommandée et non maîtrisée' },
  { title: 'Assess', text: 'À tester', shown: false },
  { title: 'Hold', text: 'À ne plus utiliser', shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Tech radar"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
