import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { ThumbsDown } from '@/components/core';
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
    topRightCorner="Novembre 2018"
  >
    <Stack gap="brand.100">
      <ThumbsDown variant="slide">Manque de motivation généralisé</ThumbsDown>
      <ThumbsDown variant="slide">Manque d’argent</ThumbsDown>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Celui qui est au RSA, n’a plus le choix et doit retrouver un emploi, ne
      serait-ce que pour manger.
    </Text>
    <Text>Celui qui était au chômage, va devoir faire pareil.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
