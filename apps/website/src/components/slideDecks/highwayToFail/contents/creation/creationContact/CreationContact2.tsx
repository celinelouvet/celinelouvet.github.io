import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="brand.100">
      <Box>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </Box>

      <Box marginTop="brand.50">
        <ThumbsUp variant="slide">Et si c’était l’occasion ?</ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je me dis « pourquoi pas. Qu’est ce que je risque ? ».</Text>
    <Text>Je vais donc les rencontrer.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
