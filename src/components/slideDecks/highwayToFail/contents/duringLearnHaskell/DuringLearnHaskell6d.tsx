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
      Il s’agit de penser en termes de types à ce qu’on a et là où on veut
      aller.
    </Text>
    <Text>Ces types représentent nos données métier qu’on veut manipuler.</Text>
    <Text>Le compilateur va venir nous guider dans le développement.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
