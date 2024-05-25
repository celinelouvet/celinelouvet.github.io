import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Tada, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L'officialisation"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Dec. 2017"
  >
    <Center width="100%" height="100%">
      <Box width="15em">
        <Tada />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>L’idée me plait. Donc c’est parti !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
