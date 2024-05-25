import { Stack, StackItem, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Première perte de temps"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack gap="1em">
      <StackItem>
        <Text>Version simplifiée ne suffira pas</Text>
      </StackItem>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Je vais donc investir plus de temps pour pousser le CSS et ajouter des
      fonctionnalités qui sont progressivement demandées.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
