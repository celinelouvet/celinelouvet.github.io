import { List, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Text>Réalisation d’un site</Text>
    <List.Root variant="slide">
      <List.Item>exposer le produit,</List.Item>
      <List.Item>toucher les investisseurs,</List.Item>
      <List.Item>convaincre les incubateurs,</List.Item>
      <List.Item>récolter des futurs clients.</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>et récolter des futurs clients.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
