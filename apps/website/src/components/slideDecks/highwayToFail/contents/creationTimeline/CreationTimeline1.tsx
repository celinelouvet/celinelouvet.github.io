import { Center, Text } from '@chakra-ui/react';
import * as React from "react";

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';


const Timeline1 = React.lazy(() =>
  import('./components/Timeline1').then((module) => ({
    default: module.Timeline1,
  })),
);

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

export const note = (
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
