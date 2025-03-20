import { List, Text } from '@chakra-ui/react';

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
    <Text>Version simplifiée, pour avancer vite :</Text>

    <List.Root variant="slide">
      <List.Item>un design allégé,</List.Item>
      <List.Item>un email pré-rempli pour le formulaire de contact.</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>le formulaire de contact est remplacé par un email pré-rempli.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
