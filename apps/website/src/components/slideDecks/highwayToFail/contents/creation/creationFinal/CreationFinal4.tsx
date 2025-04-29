import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown, ThumbsUp } from '@/components/core';
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
    title="La répartition des parts"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <ThumbsUp variant="slide">
          Ils apportent l’idée, ça me paraît OK.
        </ThumbsUp>
      </Box>
      <Box>
        <ThumbsDown variant="slide">La répartition est inégale.</ThumbsDown>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>En fait, ce n’est pas du tout OK.</Text>
    <Text>
      Car en faisant ça, la répartition est inégale et ils sont majoritaires.
    </Text>
    <Text>Je n’avais du poids que si les 2 autres l’acceptaient.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
