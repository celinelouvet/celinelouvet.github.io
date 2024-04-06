import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Stack6, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center height="100%">
      <Box height="100%">
        <Stack6 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>En fait, non, j’irai plus loin, encore.</Text>
    <Text>
      Je partirai vers du NextJs, pour diverses raisons, dont le SSR, la
      maintenabilité de l’ecosystème React.
    </Text>
    <Text>
      Mais, ça, c’est très personnel, car j’ai subi la montée de version de Vue
      2 en Vue 3.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
