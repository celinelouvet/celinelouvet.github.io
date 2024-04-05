import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Où ça se passe ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  ></SlideContent>
);

const note = (
  <SlideNote>
    Il y a une question qui arrive assez vite quand on se lance, c’est comment
    on s’organise et où on s’installe.
  </SlideNote>
);

const slide = { content, note };
export default slide;
