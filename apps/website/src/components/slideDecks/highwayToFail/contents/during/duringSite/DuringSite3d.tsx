import { List, Text } from '@chakra-ui/react';
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
    title="Le site vitrine"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Text>Version simplifiée, pour avancer vite :</Text>

    <List.Root variant="slide">
      <List.Item>un design allégé,</List.Item>
      <List.Item>un email pré-rempli pour le formulaire de contact.</List.Item>
    </List.Root>

    <ThumbsUp variant="slide">Ils sont d’accord.</ThumbsUp>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Ils sont d’accord.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
