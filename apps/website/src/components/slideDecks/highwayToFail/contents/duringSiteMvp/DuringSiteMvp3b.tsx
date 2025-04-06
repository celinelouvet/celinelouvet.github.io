import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Janvier 2018"
  >
    <Text>Version simplifiée ne suffira pas</Text>

    <List.Root variant="slide">
      <List.Item>CSS plus poussé,</List.Item>
      <List.Item>Ajout progressif de fonctionnalités</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      et ajouter des fonctionnalités qui sont progressivement demandées.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
