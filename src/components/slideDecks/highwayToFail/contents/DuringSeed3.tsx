import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Acquisition1, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les levées"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Acquisition1 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Malheureusement pour nous, Fairvioo n’a rien de révolutionnaire, sauf
      l’aspect éthique.
    </Text>
    <Text>Donc on va se concentrer sur le chiffre d’affaires</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
