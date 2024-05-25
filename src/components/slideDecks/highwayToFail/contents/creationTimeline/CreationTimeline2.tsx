import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Timeline2, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center height="100%">
      <Timeline2 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Au moment de notre discussion, nous sommes mi décembre. Nous avons donc 6
      mois devant nous pour sortir une version beta et 9 pour la version finale.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
