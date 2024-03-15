import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

export const content = <SlideContent type={SlideContentTypes.endTitle} />;

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
