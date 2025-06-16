import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsUp } from '@/components/core';
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
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <Text>Clever Cloud cherche à promouvoir l’hébergement de Haskell.</Text>
      <ThumbsUp variant="slide">Crédits gratuits.</ThumbsUp>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Ce qui va me permettre de profiter de crédits gratuits pour toute la durée
      du projet.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
