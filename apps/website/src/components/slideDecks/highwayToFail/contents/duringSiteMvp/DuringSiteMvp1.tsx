import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Janvier 2018"
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>On est en janvier 2018.</Text>
    <Text>
      J’ai profité de la période de Noël pour faire la version simplifiée.
    </Text>
    <Text>
      Et c’est là qu’on va avoir nos premières tensions et perte de temps.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
