import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ReviewAsked2, VerticalTimelineCreation } from '../../components';

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
          <ReviewAsked2 />
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    Le consommateur va donc déposer son avis et sélectionner une association
    pour le don.
  </SlideNote>
);

const slide = { content, note };
export default slide;
