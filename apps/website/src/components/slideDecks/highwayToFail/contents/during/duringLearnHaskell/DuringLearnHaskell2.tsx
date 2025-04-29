import { Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Courbe d’apprentissage"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Text>Apprentissage très douloureux.</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Difficilement...</Text>
    <Text>
      Je débarquais pleine d’assurance, en me disant que ce n’était qu’une
      syntaxe différente.
    </Text>
    <Text>Que nenni !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
