import { Box, Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'template de démarrage d’un projet,' },
  { text: 'doc pour ajouter un logger,' },
  { text: 'template de pipelines de CI/CD,' },
  { text: 'etc.' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Golden path"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Text>Boîte à outils pour répondre aux besoins les plus communs.</Text>
      <Box opacity={0}>
        <ProgressiveList items={items} />
      </Box>
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
