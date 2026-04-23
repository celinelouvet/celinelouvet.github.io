import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Monolith1 = React.lazy(() =>
  import('./components/Monolith1').then((module) => ({
    default: module.Monolith1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Monolithe"
    topRightCorner="MVP"
    alignContent="flex-start"
  >
    <Center height="100%" opacity={0}>
      <Suspense fallback={<Loading />}>
        <Monolith1 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Dans l’exemple du MVP.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
