import { Center, Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { ReviewAsked1, VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le fonctionnement"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" height="100%">
      <StackItem>
        <Text>La demande d’avis</Text>
      </StackItem>
      <StackItem width="100%" flexGrow="1">
        <Center width="100%" height="100%">
          <ReviewAsked1 />
        </Center>
      </StackItem>
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
