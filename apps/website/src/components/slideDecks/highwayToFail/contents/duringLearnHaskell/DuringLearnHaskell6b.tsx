import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type-Driven Development"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <List.Root variant="slide" as="ol">
      <List.Item>Définir les types de ce qu’on a</List.Item>
      <List.Item>Définir les types de là où on veut aller</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>là où on veut aller.</Text>
    <Text>Ces types représentent nos données métier qu’on veut manipuler.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
