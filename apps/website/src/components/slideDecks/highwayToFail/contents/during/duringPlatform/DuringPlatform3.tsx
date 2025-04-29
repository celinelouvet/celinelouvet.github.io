import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Platform2 = React.lazy(() =>
  import('./components/Platform2').then((module) => ({
    default: module.Platform2,
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
        <Platform2 />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Elle va servir un front-end d’administration</Text>
    <Text>Le but est de pouvoir gérer les associations,</Text>
    <Text>modérer les avis laissés.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
