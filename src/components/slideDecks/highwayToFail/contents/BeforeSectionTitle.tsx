import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Avant"
    column1={<VerticalTimelineBefore />}
  />
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
