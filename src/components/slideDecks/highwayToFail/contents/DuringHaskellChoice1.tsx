import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { StackChoice, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Box position="relative" width="100%" height="100%">
      <Box position="absolute">
        <StackChoice />
      </Box>
      <Center width="100%" height="100%" backgroundColor="#666666">
        <Text fontSize="1.5em" color="white" fontWeight="600">
          Choix de la techno
        </Text>
      </Center>
    </Box>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Vous allez me dire, mais pourquoi Haskell ?</Text>
    <Text>Lors de mon talk sur Haskell, j’avais expliqué le choix ainsi.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
