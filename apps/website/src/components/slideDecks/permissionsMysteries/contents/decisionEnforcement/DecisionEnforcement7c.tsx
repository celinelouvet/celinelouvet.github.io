import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const RejectedFlow2 = React.lazy(() =>
  import('./components/RejectedFlow2').then((module) => ({
    default: module.RejectedFlow2,
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
        <RejectedFlow2 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      L’enforcer va pouvoir retourner directement les conséquences de la
      décision, une erreur 403, sans passer par la couche métier.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
