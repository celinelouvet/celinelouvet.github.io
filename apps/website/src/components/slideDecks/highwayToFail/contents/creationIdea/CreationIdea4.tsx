import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  ></SlideContent>
);

const note = <SlideNote>Comment ça fonctionne ?</SlideNote>;

const slide = { content, note };
export default slide;
