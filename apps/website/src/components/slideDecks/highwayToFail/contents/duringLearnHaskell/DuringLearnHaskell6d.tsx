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

    <Text>Point important : des noms expressifs</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Et nommer les choses de manière expressive, c’est un point important.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
