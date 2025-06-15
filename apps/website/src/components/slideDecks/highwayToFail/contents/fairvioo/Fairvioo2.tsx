import { Center, Text } from '@chakra-ui/react';
import * as React from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

const TalkFairvioo2 = React.lazy(() =>
  import('./components/TalkFairvioo2').then((module) => ({
    default: module.TalkFairvioo2,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    key="plop"
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
        <Text>2018</Text>
        <Text>-</Text>
        <Text>2019</Text>
      </Center>
    }
  >
    <Center height="100%">
      <TalkFairvioo2 />
    </Center>
  </SlideContent>
);

export const note = (
  <SlideNote>
    En 2018 et 2019, je présente en conférence un talk « votre mission ?
    Découvrir Haskell et le mettre en prod » en m’appuyant sur l’exemple
    Fairvioo.
  </SlideNote>
);

const slide = { content, note };
export default slide;
