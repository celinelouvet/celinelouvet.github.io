import { Stack, Text } from '@chakra-ui/react';
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
    title="L’idée"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
  >
    <Stack gap="brand.100">
      <Text>1 avis laissé = 1 micro-don généré</Text>

      <ThumbsUp variant="slide">J’aime le côté éthique !</ThumbsUp>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>J’aime ce coté éthique !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
