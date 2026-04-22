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
    title="Le début de la fin"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
    topRightCorner="Janvier 2019"
  >
    <Stack gap="brand.100">
      <Failure variant="slide">Je suis seule.</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je me retrouve donc seule à continuer.</Text>
    <Text>Je peux encore poursuivre, car mon conjoint a un salaire.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
