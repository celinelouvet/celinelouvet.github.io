import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';


const items = [
  { text: 'template de démarrage d’un projet,' },
  { text: 'doc pour ajouter un logger,', shown: false },
  { text: 'template de pipelines de CI/CD,', shown: false },
  { text: 'etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Golden path"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em">
      <Text>Boîte à outils pour répondre aux besoins les plus communs.</Text>

      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Golden path, utilisé par Spotify</Text>
    <Text>Paved Road, chez Netflix</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
