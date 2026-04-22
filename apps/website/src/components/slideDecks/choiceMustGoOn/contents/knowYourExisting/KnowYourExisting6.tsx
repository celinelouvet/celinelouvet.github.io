import { Center, Text } from '@chakra-ui/react';
import React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const ZalandoRadar = React.lazy(() =>
  import('./components/ZalandoRadar').then((module) => ({
    default: module.default,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Zalando"
    alignContent="flex-start"
  >
    <Center height="100%" width="100%">
      <React.Suspense fallback={<Loading />}>
        <ZalandoRadar />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      4 catégories: Datastores, Data Management, Infrastructure, Languages
    </Text>
    <Text>Lib open source pour créer son radar</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
