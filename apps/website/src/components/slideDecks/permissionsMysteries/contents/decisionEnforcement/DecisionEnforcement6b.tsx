import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const AcceptedFlow1 = React.lazy(() =>
  import('./components/AcceptedFlow1').then((module) => ({
    default: module.AcceptedFlow1,
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
        <AcceptedFlow1 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      L’appel va donc être transmis à l’enforcer pour lister les brouillons.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
