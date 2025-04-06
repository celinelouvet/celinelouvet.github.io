import { Stack, Text } from '@chakra-ui/react';

import { ThumbsDown } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Octobre 2018"
  >
    <Stack gap="1em">
      <ThumbsDown variant="slide">Manque de motivation généralisé</ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Le plus dur à ce moment-là, c’est de garder la motivation et de continuer
      à avancer.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
