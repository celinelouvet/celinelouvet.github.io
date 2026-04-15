import { Stack } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const items = [
  { text: 'Technos utilisées,' },
  { text: 'Équipe existante (et ses compétences),', shown: false },
  {
    text: 'Dettes (technique, fonctionnelle, architecturelle etc.),',
    shown: false,
  },
  { text: 'Méthodes en place.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Connaître son existant"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
