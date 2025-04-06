import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

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
      <List.Item>Laisser le compilateur guider le développement</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Le compilateur va venir nous guider dans le développement.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
