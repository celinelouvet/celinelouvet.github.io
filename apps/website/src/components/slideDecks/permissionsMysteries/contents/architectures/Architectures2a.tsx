import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Distributed = React.lazy(() =>
  import('./components/Distributed').then((module) => ({
    default: module.Distributed,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Système distribué"
    alignContent="flex-start"
  >
    <Center height="100%">
      <Suspense fallback={<Loading />}>
        <Distributed />
      </Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Pour la suite, on va s’appuyer sur un système distribué.</Text>
    <Text>
      On aura donc une multitude de services qui communiqueront entre eux de
      diverses manières.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
