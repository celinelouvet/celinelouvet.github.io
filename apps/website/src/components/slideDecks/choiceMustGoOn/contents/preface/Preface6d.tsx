import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../components/loading';

const WhyHaskell = React.lazy(() =>
  import('./components/WhyHaskell').then((module) => ({
    default: module.WhyHaskell,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Facteurs de mise en difficulté"
    alignContent="flex-start"
    topRightCorner="2015"
  >
    <Center height="100%" width="100%">
      <React.Suspense fallback={<Loading />}>
        <WhyHaskell />
      </React.Suspense>
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Genre, le jour où j’ai choisi Haskell pour mon projet, sans rien y
      connaître. :D
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
