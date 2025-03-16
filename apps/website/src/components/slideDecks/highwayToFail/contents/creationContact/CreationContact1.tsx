import { Box, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La mise en contact"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Box>
        <Text>Discussion lors d’un meetup avec une connaissance.</Text>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    En discutant lors d’un meetup, au-dessus d’une part de pizza, un ami me dit
    connaître 2 personnes recherchant quelqu’un pour le développement
  </SlideNote>
);

const slide = { content, note };
export default slide;
