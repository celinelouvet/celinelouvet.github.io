import { Stack, StackItem, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineCreation } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Stack width="100%" height="100%" gap="2em">
      <StackItem>
        <Text>
          Signature d’une lettre d’intention, avec attribution par vesting.
        </Text>
      </StackItem>
      <StackItem>
        <ThumbsDown variant="slide">
          Ce n’est pas un pacte d’associés.
        </ThumbsDown>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = <SlideNote>Bonjour</SlideNote>;

const slide = { content, note };
export default slide;
