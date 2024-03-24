import { Box, Flex } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Design1, Design2, VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le site vitrine"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Flex
      width="100%"
      height="100%"
      gap="1em"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Box width="60%">
        <Design1 />
      </Box>
      <Box width="20%">
        <Design2 />
      </Box>
    </Flex>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
