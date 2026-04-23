import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const AcceptedFlow4 = React.lazy(() =>
  import('./components/AcceptedFlow4').then((module) => ({
    default: module.AcceptedFlow4,
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
        <AcceptedFlow4 />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      L’enforcer pourra alors effectuer l’appel métier pour lister les
      brouillons et les retourner à l’utilisateur.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
