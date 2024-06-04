import {
  ListItem,
  Stack,
  StackItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Stack gap="1em">
      <StackItem>
        <Text>Version simplifiée ne suffira pas</Text>
      </StackItem>
      <StackItem>
        <UnorderedList paddingLeft="1em">
          <ListItem>CSS plus poussé,</ListItem>
          <ListItem>Ajout progressif de fonctionnalités</ListItem>
        </UnorderedList>
        <Text paddingLeft="3em">
          Google Analytics, SEO, prerendering, événements Facebook, événements
          LinkedIn, événements Segment, Zapier, Prefinery, Draft, etc.
        </Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      C’est comme ça, que je vais me retrouver à passer plus de temps sur les
      autres fonctionnalités que sur la version simplifiée, initialement prévue.
    </Text>
    <Text>Et ça va nous amener à mi-mars 2018.</Text>
    <Text>
      Si on essayait de représenter le temps que j’ai passé sur ces
      fonctionnalités, ça ressemblerait à ça.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
