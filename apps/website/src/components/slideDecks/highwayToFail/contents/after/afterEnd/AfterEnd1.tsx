import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('../components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
    topRightCorner="Octobre 2018"
  >
    <Stack gap="brand.100"></Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On est en octobre 2018.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
