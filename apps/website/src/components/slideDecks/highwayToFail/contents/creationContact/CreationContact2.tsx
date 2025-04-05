import { Box, Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </Box>

      <Box marginTop="0.5em">
        <ThumbsUp variant="slide">Et si c’était l’occasion ?</ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je me dis « pourquoi pas. Qu’est ce que je risque ? ».</Text>
    <Text>Je vais donc les rencontrer.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
