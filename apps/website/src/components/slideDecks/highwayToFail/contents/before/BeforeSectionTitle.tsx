import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineBefore } from './components';

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitleWithThinColumn}
    title="Avant"
    column1={<VerticalTimelineBefore />}
  />
);

export const note = (
  <SlideNote>
    Commençons par le contexte qui a amené à cette création.
  </SlideNote>
);

const slide = { content, note };
export default slide;
