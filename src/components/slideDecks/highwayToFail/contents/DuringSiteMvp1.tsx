import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Et c’est là qu’on va avoir nos premières tensions et perte de temps.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
