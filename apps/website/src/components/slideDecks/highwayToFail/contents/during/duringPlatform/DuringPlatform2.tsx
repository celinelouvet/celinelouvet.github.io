import { Center } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Platform1 = React.lazy(() =>
  import('./components/Platform1').then((module) => ({
    default: module.Platform1,
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
        <Platform1 />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = <SlideNote>Je prévois donc une API</SlideNote>;

const slide = { content, note };
export default slide;
