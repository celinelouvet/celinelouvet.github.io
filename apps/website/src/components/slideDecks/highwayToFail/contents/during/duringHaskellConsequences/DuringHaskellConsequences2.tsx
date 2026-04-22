import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { Failure } from 'src/components/core';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

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
    <Stack gap="brand.100">
      <Failure variant="slide">Oups, la roadmap</Failure>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Haha, et bien là, j’ai totalement explosé les dates indiquées dans la
      roadmap.
    </Text>
    <Text>
      Par contre, suite à ça, ma productivité s’est mise à monter en flèche. Car
      le code était simple, facile à lire, facile à améliorer.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
