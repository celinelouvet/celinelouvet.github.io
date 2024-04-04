import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

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

const note = (
  <SlideNote>
    <Text>
      Pour le MVP, c’est plus compliqué. C’est difficile de prévoir un contenu
      plus réduit que le dépot d’avis et la liste des avis.
    </Text>
    <Text>
      Comme on veut toucher les TPE et PME, le plus simple est de s’intégrer
      directement à leur site, via un plugin.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
