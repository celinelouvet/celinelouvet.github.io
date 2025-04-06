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
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>pouvoir toucher les investisseurs,</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
