import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsUp } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
    <Stack width="100%" gap="brand.100">
      <Box>
        <ThumbsUp variant="slide">
          Ils apportent l’idée, ça me paraît OK.
        </ThumbsUp>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ça me parait OK, car ils apportent l’idée.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
