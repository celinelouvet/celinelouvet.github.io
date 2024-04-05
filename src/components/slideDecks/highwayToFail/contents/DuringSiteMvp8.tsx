import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Pareto2, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le principe de Pareto (80 — 20)"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Pareto2 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et la zone 2 correspond, elle, à ces 20% restants.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
