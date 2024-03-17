import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
  ThumbsUp,
} from '@/components/core';

import { VerticalTimelineBefore } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’occasion"
    alignContent="flex-start"
    column1={<VerticalTimelineBefore />}
  >
    <Stack width="100%" gap="1em">
      <StackItem>
        <Text>Rupture de la période d’essai.</Text>
      </StackItem>

      <StackItem marginTop="0.5em">
        <ThumbsUp variant="slide">Allocations chômage pendant 2 ans.</ThumbsUp>
      </StackItem>

      <StackItem marginTop="0.5em">
        <ThumbsDown variant="slide">
          Doûtes et syndrôme de l’imposteur
        </ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
