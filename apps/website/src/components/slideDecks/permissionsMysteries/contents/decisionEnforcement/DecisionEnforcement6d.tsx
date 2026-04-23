import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const AcceptedFlow3 = React.lazy(() =>
  import('./components/AcceptedFlow3').then((module) => ({
    default: module.AcceptedFlow3,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Marc veut lister les brouillons"
    topRightCorner="Exemple"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <AcceptedFlow3 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Marc a donc le droit.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
