import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { Failure } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les conséquences ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Eté 2018"
  >
    <Stack gap="1em">
      <Failure variant="slide">Oups, la roadmap</Failure>
      <Failure variant="slide">Perte de confiance</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Mais, en n’arrivant pas à tenir la roadmap, j’ai perdu la crédibilité que
      je pouvais avoir auprès de mes collègues.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
