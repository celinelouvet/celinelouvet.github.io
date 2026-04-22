import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const AcceptedFlow2 = React.lazy(() =>
  import('./components/AcceptedFlow2').then((module) => ({
    default: module.AcceptedFlow2,
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
        <AcceptedFlow2 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Qui lui appellera la couche de décision.</Text>
    <Text>
      Là, une règle correspondante sera évaluée: seul un administrateur peut
      lister les brouillons.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
