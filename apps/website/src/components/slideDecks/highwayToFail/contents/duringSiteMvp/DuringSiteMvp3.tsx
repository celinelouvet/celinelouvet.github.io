import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Janvier 2018"
  >
    <Stack gap="1em">
      <Box>
        <Text>Version simplifiée ne suffira pas</Text>
      </Box>
      <Box>
        <List.Root paddingLeft="1em">
          <List.Item>CSS plus poussé,</List.Item>
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je vais donc investir plus de temps pour pousser le CSS</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
