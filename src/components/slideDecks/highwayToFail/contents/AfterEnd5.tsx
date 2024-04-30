import { Box, Center, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { Commits, VerticalTimelineAfter } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Center width="100%" height="100%">
      <Box height="100%">
        <Commits />
      </Box>
    </Center>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je me lève le matin avec le départ de mon fils pour l’école. Je code toute
      la journée. A son retour, je m’arrête pour reprendre après son coucher et
      ça jusqu’à 2-3h du matin. Les nuits sont courtes et peu reposantes.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
