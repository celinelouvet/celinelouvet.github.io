import { List, Text } from '@chakra-ui/react';
import * as React from 'react';

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
    title="Première perte de temps"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Janvier 2018"
  >
    <Text>Version simplifiée ne suffira pas</Text>

    <List.Root variant="slide">
      <List.Item>CSS plus poussé,</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je vais donc investir plus de temps pour pousser le CSS</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
