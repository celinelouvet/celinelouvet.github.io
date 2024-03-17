import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="La création"
    column1={<VerticalTimelineCreation />}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
