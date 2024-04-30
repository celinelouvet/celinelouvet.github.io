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
    <Text>Réalisation d’un site</Text>
    <UnorderedList paddingLeft="1em">
      <ListItem>exposer le produit,</ListItem>
      <ListItem>toucher les investisseurs,</ListItem>
      <ListItem>convaincre les incubateurs,</ListItem>
    </UnorderedList>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>On va commencer par réaliser le site vitrine.</Text>
    <Text>
      L’idée est de faire un site pour exposer notre produit, pouvoir toucher
      les investisseurs, convaincre les incubateurs
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
