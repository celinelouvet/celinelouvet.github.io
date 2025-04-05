import { Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="2em" width="100%" height="100%">
      <ThumbsDown variant="slide">Manque d’expérience en startup</ThumbsDown>
      <ThumbsDown variant="slide">Je ne sais pas dire NON</ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Tout me parait faisable et je ne sais pas dire non.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
