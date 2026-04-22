import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { Failure } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Alors ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
  >
    <Stack gap="brand.100">
      <Failure variant="slide">J’ai fait un burnout</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Si on résume, j’ai vraiment fait un burnout.</Text>
    <Text>
      On est 5 ans plus tard et je le sens toujours. Dès que j’abuse, il
      repointe le bout de son nez.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
