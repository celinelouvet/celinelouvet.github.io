import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { talk } from '../data';

const surveySection = talk.sections[0] ?? { title: '' };

export const content = (
  <SlideContent
    type={SlideContentTypes.sectionTitle}
    title={surveySection.title}
  ></SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
