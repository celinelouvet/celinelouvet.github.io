import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const TalkFairvioo1 = React.lazy(() =>
  import('./components/TalkFairvioo1').then((module) => ({
    default: module.TalkFairvioo1,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    title="Spoiler"
    column1={
      <Center
        width="100%"
        height="100%"
        flexDirection="column"
        lineHeight="1.25"
        fontSize="brand.250"
        color="brand.500"
        fontWeight="900"
      >
        <Text>Fin</Text>
        <Text>2017</Text>
      </Center>
    }
  >
    <Center height="100%">
      <TalkFairvioo1 />
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Fin 2017, je rejoins 2 co-fondateurs pour créer Fairvioo, en tant que CTO.
  </SlideNote>
);

const slide = { content, note };
export default slide;
