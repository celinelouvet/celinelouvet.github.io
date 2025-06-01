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
    title="Le site vitrine"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Text>Réalisation d’un site</Text>
    <List.Root variant="slide">
      <List.Item>exposer le produit,</List.Item>
      <List.Item>toucher les investisseurs,</List.Item>
      <List.Item>convaincre les incubateurs,</List.Item>
    </List.Root>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>convaincre les incubateurs</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
