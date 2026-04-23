import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const RejectedFlow1 = React.lazy(() =>
  import('./components/RejectedFlow1').then((module) => ({
    default: module.RejectedFlow1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Lucie veut lister les brouillons"
    topRightCorner="Exemple"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <RejectedFlow1 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Comme tout l’heure, une fois arrivée à la couche de décision, la règle
      correspondante sera évaluée: seul un administrateur peut lister les
      brouillons. A ce moment-là, pour Lucie, la décision sera un refus.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
