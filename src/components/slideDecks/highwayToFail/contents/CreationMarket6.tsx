import { ListItem, UnorderedList } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <UnorderedList paddingLeft="1em">
      <ListItem>Nombreuses fonctionnalités,</ListItem>
      <ListItem>Plugins Shopify, Prestashop, etc.</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
