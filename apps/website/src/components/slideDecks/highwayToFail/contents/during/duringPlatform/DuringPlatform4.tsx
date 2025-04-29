import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

const Platform3 = React.lazy(() =>
  import('./components/Platform3').then((module) => ({
    default: module.Platform3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le produit"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <React.Suspense fallback={<Loading />}>
        <Platform3 />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>L’API va aussi servir le front-end publique</Text>
    <Text>Ce front-end permet de voir les avis laissés, </Text>
    <Text>les notes des commerçants</Text>
    <Text>et bien entendu de laisser son avis.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
