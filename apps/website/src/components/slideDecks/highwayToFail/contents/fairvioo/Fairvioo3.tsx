import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const TalkFairvioo3 = React.lazy(() =>
  import('./components/TalkFairvioo3').then((module) => ({
    default: module.TalkFairvioo3,
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
        <Text>Juin</Text>
        <Text>2019</Text>
      </Center>
    }
  >
    <Center height="100%">
      <TalkFairvioo3 />
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    Juin 2019, Fairvioo met la clé sous la porte et passe en liquidation.
  </SlideNote>
);

const slide = { content, note };
export default slide;
