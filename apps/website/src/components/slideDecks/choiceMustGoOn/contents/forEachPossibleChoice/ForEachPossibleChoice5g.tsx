import { Box, Center, HStack, chakra } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { ProgressiveList } from '../../../components/progressiveList';

const pros = [
  { text: 'Auto managé, sans downtime' },
  { text: 'Temps de query toujours stable' },
  { text: 'Haute vitesse d’écriture' },
  { text: 'Quota gratuit' },
];

const cons = [
  { text: 'Pas de relationnel' },
  { text: 'Pas de filtre par propriété, sans index prédéfini' },
  { text: 'Schemaless', shown: false },
  { text: '« Pay as you go »', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="GCP Datastore"
    alignContent="flex-start"
  >
    <Center width="100%" height="100%">
      <HStack
        width="100%"
        height="100%"
        gap="brand.300"
        alignItems="stretch"
        justifyContent="space-between"
      >
        <Box flex="1" height="100%">
          <chakra.strong>Avantages</chakra.strong>
          <ProgressiveList items={pros} gap="0.7em" marginBottom={0} />
        </Box>
        <Box flex="1" height="100%">
          <chakra.strong>Inconvénients</chakra.strong>
          <ProgressiveList items={cons} gap="0.7em" marginBottom={0} />
        </Box>
      </HStack>
    </Center>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
