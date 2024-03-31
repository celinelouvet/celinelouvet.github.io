import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>Version simplifiée, pour avancer vite:</Text>
    <UnorderedList paddingLeft="1em">
      <ListItem>un design allégé,</ListItem>
      <ListItem>un email pré-rempli pour le formulaire de contact.</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
