import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Auth2 = React.lazy(() =>
  import('./components/Auth2').then((module) => ({
    default: module.Auth2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Identité ≠ Permissions"
    alignContent="flex-start"
  >
    <Center width="100%" height="100%">
      <Center height="50%">
        <Suspense fallback={<Loading />}>
          <Auth2 />
        </Suspense>
      </Center>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Mais, en fait, il n’y a pas une notion d’auth.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
