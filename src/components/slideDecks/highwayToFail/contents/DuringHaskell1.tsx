import { ListItem, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Haskell"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <UnorderedList paddingLeft="1em">
      <ListItem>Purement fonctionnel,</ListItem>
      <ListItem>statiquement typé,</ListItem>
      <ListItem>inférence de type,</ListItem>
      <ListItem>concurrence prévue.</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
