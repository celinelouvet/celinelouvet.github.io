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
    topRightCorner="Janvier 2018"
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
      et ajouter des fonctionnalités qui sont progressivement demandées.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
