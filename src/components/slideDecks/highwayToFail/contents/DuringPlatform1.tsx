import { Center } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Platform1, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le produit"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Platform1 />
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
