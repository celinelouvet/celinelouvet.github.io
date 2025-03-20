import { List, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

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

    <ThumbsUp variant="slide">Ils sont d’accord.</ThumbsUp>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Ils sont d’accord.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
