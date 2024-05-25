import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Platform2, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le produit"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Platform2 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Elle va servir un front-end d’administration</Text>
    <Text>Le but est de pouvoir gérer les associations,</Text>
    <Text>modérer les avis laissés.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
