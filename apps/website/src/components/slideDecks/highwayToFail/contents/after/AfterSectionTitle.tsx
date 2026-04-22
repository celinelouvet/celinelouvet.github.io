import { Text } from '@chakra-ui/react';
import * as React from 'react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../components/loading';

const VerticalTimelineAfter = React.lazy(() =>
  import('./components/VerticalTimelineAfter').then((module) => ({
    default: module.VerticalTimelineAfter,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Après"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineAfter />
      </React.Suspense>
    }
  />
);

export const note = (
  <SlideNote>
    <Text>Ca marquera la fin de l’aventure.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
