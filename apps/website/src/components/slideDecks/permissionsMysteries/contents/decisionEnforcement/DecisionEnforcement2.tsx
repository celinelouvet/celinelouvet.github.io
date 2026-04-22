import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const MvpUseCase = React.lazy(() =>
  import('./components/MvpUseCase').then((module) => ({
    default: module.MvpUseCase,
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
        <MvpUseCase />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Dans l’exemple du MVP, on avait la liste de règles suivantes, avec
      notamment une règle pour lister les brouillons
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
