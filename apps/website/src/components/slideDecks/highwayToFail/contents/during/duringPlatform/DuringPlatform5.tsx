import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);
const Platform4 = React.lazy(() =>
  import('./components/Platform4').then((module) => ({
    default: module.Platform4,
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
        <Platform4 />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Et enfin, l’API sert aussi les plugins des plateformes d’e-commerce, comme
      prestashop ou shopify.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
