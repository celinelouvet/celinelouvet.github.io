import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>Pour le MVP, c’est plus compliqué.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
