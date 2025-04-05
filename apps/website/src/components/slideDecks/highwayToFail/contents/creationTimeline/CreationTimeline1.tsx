import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Timeline1, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Center height="100%">
      <Timeline1 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Comme je vous disais, une roadmap a été prévue.</Text>
    <Text>
      Donc une promulgation en septembre 2017 pour une entrée en vigueur en
      Janvier 2018
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
