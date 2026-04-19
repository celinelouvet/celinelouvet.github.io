import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';
import { type Tile, Tiles } from 'src/components/slideDecks/components';

const data = [
  { text: 'Besoin fonctionnel', shown: false },
  { text: 'Règles', shown: false },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Pourquoi ?"
    alignContent="flex-start"
  >
    <Tiles data={data} />
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
