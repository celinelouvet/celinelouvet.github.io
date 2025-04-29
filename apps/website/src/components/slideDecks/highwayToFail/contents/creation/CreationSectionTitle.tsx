import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('./components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="La création"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
  />
);

export const note = (
  <SlideNote>Finalement, j’ai une autre opportunité.</SlideNote>
);

const slide = { content, note };
export default slide;
