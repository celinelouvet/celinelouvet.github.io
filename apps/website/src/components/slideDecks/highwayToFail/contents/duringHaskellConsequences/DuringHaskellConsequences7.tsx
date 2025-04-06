import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Text>Utiliser une techno maîtrisée.</Text>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Je m’appuierai sur une techno que je maitrise pour aller vite, Node dans
      mon cas.
    </Text>
    <Text>Car au-delà du choix du langage, le reste était bon.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
