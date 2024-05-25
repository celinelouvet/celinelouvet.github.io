import { Stack, Text } from '@chakra-ui/react';

import {
  Failure,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Les conséquences ?"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Stack spacing="1em">
      <Failure variant="slide">Oups, la roadmap</Failure>
      <Failure variant="slide">Perte de confiance</Failure>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Mais, en n’arrivant pas à tenir la roadmap, j’ai perdu la crédibilité que
      je pouvais avoir auprès de mes collègues.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
