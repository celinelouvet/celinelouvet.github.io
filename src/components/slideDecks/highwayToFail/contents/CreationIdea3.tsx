import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack spacing="2em">
      <StackItem>
        <Text as="span">1 avis laissé = 1 micro-don généré</Text>
      </StackItem>
      <StackItem>
        <ThumbsUp variant="slide">J’aime le côté éthique !</ThumbsUp>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      De plus, pour chaque avis laissé par un client, un micro-don est
      enregistré pour une association.
    </Text>
    <Text>Les dons seront reversés régulièrement.</Text>
    <Text>J’aime ce coté éthique !</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
