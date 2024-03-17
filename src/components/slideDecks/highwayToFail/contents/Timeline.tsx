import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { HorizontalTimeline } from '../components';

export const content = (
  <SlideContent type={SlideContentTypes.titleWithContent} title="Programme">
    <HorizontalTimeline />
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
