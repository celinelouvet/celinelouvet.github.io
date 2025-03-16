import { Box, List, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Si je devais le refaire ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
    topRightCorner="Mars 2018"
  >
    <Stack>
      <Box>
        <Text as="span">Ne surtout pas le coder !</Text>
      </Box>
      <Box>
        <List.Root paddingLeft="1em">
          <List.Item>Héberger un PDF</List.Item>
          <List.Item>Utiliser un prototype Figma</List.Item>
        </List.Root>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      A la place, on aurait pu héberger un PDF ou utiliser un prototype Figma et
      ils auraient eu la main dessus.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
