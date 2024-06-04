import { ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Type-Driven Development"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing="1em">
      <OrderedList paddingLeft="1em">
        <ListItem>Définir les types de ce qu’on a</ListItem>
        <ListItem>Définir les types de là où on veut aller</ListItem>
        <ListItem>Laisser le compilateur guider le développement</ListItem>
      </OrderedList>
      <Text>Point important : des noms expressifs</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Et nommer les choses de manière expressive, c’est un point important.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
