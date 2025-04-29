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
    title="Première perte de temps"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
    topRightCorner="Janvier 2018"
  ></SlideContent>
);

export const note = (
  <SlideNote>
    <Text>On est en janvier 2018.</Text>
    <Text>
      J’ai profité de la période de Noël pour faire la version simplifiée.
    </Text>
    <Text>
      Et c’est là qu’on va avoir nos premières tensions et perte de temps.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
