import { Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { TalkFairvioo1 } from '../components';

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
        fontSize="2.5em"
        color="brand.500"
        fontWeight="900"
      >
        <Text>Fin</Text>
        <Text>2017</Text>
      </Center>
    }
  >
    <Center>
      <TalkFairvioo1 />
    </Center>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
