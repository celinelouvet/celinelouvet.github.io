import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { HorizontalTimeline } from '../components';

export const content = (
  <SlideContent type={SlideContentTypes.titleWithContent} title="Programme">
    <HorizontalTimeline />
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Lançons-nous dans le vif du sujet.</Text>
    <Text>Je vais passer par les 4 phases.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
