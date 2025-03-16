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
    <Text>Réalisation d’un site</Text>
    <List.Root paddingLeft="1em">
      <List.Item>exposer le produit,</List.Item>
    </List.Root>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>L’idée est de faire un site pour exposer notre produit,</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
