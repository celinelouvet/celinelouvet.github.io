import { Center, Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { TalkFairvioo2 } from '../components';

const Column1: FC = () => (
  <Center
    width="100%"
    height="100%"
    flexDirection="column"
    lineHeight="1.25"
    fontSize="2.5em"
    color="brand.500"
    fontWeight="900"
  >
    <Text>2018</Text>
    <Text>-</Text>
    <Text>2019</Text>
  </Center>
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWith2Columns}
    key="plop"
    title="Spoiler"
    column1={<Column1 />}
  >
    <Center height="100%">
      <TalkFairvioo2 />
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    En 2018 et 2019, je présente en conférence un talk « votre mission ?
    Découvrir Haskell et le mettre en prod » en m’appuyant sur l’exemple
    Fairvioo.
  </SlideNote>
);

const slide = { content, note };
export default slide;
