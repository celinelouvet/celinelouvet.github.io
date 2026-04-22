import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown } from 'src/components/core';
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
    title="La roadmap"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="brand.200" width="100%" height="100%">
      <ThumbsDown variant="slide">Manque d’expérience en startup</ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>C’est tendu, mais ça me parait jouable.</Text>
    <Text>Mais je sors d’ESN.</Text>
    <Text>
      Je suis habituée à ce qu’un client paie pour obtenir ce qu’il veut.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
