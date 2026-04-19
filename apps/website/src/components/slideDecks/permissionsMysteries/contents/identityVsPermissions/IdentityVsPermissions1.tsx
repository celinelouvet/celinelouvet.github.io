import { Center, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';

import { Loading } from 'src/components/features';
import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

const Auth1 = React.lazy(() =>
  import('./components/Auth1').then((module) => ({
    default: module.Auth1,
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
          <Auth1 />
        </Suspense>
      </Center>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Souvent on a tendance à ranger tout ça dans une même notion d’auth.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
