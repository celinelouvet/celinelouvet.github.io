import { Stack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { type Tile, Tiles } from '../../components/tiles';

const items = [
  { title: 'Essentielle', text: 'Problème à résoudre' },
  { title: 'Obligatoire', text: 'Contraintes techniques' },
  {
    title: 'Accidentelle',
    text: 'Mauvaise décision ou exécution',
  },
] satisfies Tile[];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Complexités"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Tiles data={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
