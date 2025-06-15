import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { Failure } from '@/components/core';
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
    topRightCorner="Janvier 2019"
  >
    <Stack gap="brand.100">
      <Failure variant="slide">Je suis épuisée.</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je suis épuisée et pleine d’anxiétés.</Text>
    <Text>
      Heureusement, j’ai encore quelques mois de chômage devant moi, je vais
      essayer de me reposer.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
