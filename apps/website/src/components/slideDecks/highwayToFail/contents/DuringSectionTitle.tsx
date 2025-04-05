import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Pendant"
    column1={<VerticalTimelineDuring />}
  />
);

const note = <SlideNote>On a signé, c’est parti.</SlideNote>;

const slide = { content, note };
export default slide;
