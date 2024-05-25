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
      En effet, je me suis faite avoir toute seule en parlant de version allégée
      et de version enrichie.
    </Text>
    <Text>
      Je comptais faire passer à autre chose dès la fin du développement de la
      version allégée.
    </Text>
    <Text>
      Sauf qu’ils ne l’avaient pas compris comme ça. Ils pensaient que
      j’enchaînerais sur la version enrichie juste après.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
