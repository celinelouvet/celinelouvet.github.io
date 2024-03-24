import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Pendant"
    column1={<VerticalTimelineDuring />}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
