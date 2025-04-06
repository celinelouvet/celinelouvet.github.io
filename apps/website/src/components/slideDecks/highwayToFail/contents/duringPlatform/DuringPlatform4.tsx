import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Platform3, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le produit"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <Platform3 />
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>L’API va aussi servir le front-end publique</Text>
    <Text>Ce front-end permet de voir les avis laissés, </Text>
    <Text>les notes des commerçants</Text>
    <Text>et bien entendu de laisser son avis.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
