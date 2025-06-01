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
    type={SlideContentTypes.titleWithThin2Columns}
    title="Le site vitrine"
    alignContent="flex-start"
    topRightCorner="Mi-Décembre 2017"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    column2={
      <>
        <Text>Stack choisie :</Text>

        <List.Root variant="slide">
          <List.Item>Javascript,</List.Item>
          <List.Item>VueJs,</List.Item>
          <List.Item>Firebase.</List.Item>
        </List.Root>
      </>
    }
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Je vais héberger tout ça sur du Firebase.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
