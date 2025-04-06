import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ReviewAsked3, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" height="100%">
      <Box>
        <Text>La demande d’avis</Text>
      </Box>
      <Box width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <ReviewAsked3 />
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

export const note = <SlideNote>Le micro-don est comptabilisé.</SlideNote>;

const slide = { content, note };
export default slide;
