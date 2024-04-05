import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Shares, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La répartition des parts"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Shares />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Ils vont me proposer la répartition suivante</Text>
    <Text>Chacun d’eux me cède 10% de ses parts</Text>
    <Text>Ce qui m’amène à 20% et eux à 40%.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
