import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Text>Version simplifiée, pour avancer vite :</Text>
      <UnorderedList paddingLeft="1em">
        <ListItem>un design allégé,</ListItem>
        <ListItem>un email pré-rempli pour le formulaire de contact.</ListItem>
      </UnorderedList>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>le formulaire de contact est remplacé par un email pré-rempli.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
