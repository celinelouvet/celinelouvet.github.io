import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Market2, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le marché"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center width="100%" height="100%">
      <Market2 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Fairvioo est positionné ici, aux cotés d’Avis vérifiés et Trustpilot, qui
      sont assez connus.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
