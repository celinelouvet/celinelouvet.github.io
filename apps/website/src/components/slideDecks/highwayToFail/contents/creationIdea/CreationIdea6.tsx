import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ReviewAsked1, VerticalTimelineCreation } from '../../components';

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
          <ReviewAsked1 />
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    Deux semaines plus tard, Fairvioo envoie un email au consommateur pour lui
    demander son avis.
  </SlideNote>
);

const slide = { content, note };
export default slide;
