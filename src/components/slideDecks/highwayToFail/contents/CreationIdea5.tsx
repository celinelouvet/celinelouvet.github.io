import { Center, Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { OrderConfirmation2, VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" height="100%">
      <StackItem>
        <Text>La confirmation d’achat</Text>
      </StackItem>
      <StackItem width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <OrderConfirmation2 />
        </Center>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
