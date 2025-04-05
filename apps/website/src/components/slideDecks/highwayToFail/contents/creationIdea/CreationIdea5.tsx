import { Box, Center, Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { OrderConfirmation2, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" height="100%">
      <Box>
        <Text>La confirmation d’achat</Text>
      </Box>
      <Box width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <OrderConfirmation2 />
        </Center>
      </Box>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    Lorsque le consommateur achète un article chez un commerçant
  </SlideNote>
);

const slide = { content, note };
export default slide;
