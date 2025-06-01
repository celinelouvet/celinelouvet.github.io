import { Text } from '@chakra-ui/react';
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
    <Text>Version simplifiée, pour avancer vite :</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Pour avancer vite, je vais suggérer de faire une version simplifiée qu’on
      enrichira ensuite.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
