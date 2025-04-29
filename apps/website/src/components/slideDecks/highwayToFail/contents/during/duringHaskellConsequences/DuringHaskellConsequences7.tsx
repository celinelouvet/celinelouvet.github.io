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
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
  >
    <Text>Utiliser une techno maîtrisée.</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je m’appuierai sur une techno que je maitrise pour aller vite, Node dans
      mon cas.
    </Text>
    <Text>Car au-delà du choix du langage, le reste était bon.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
