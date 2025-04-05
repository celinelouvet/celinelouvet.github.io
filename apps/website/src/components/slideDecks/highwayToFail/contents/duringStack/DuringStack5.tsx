import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Stack4, VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="En détails"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Stack4 />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Coté base de données, je pars du PostgreSQL, qui permet de faire beaucoup
      de choses.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
