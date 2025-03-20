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
    topRightCorner="Eté 2018"
  >
    <Stack gap="1em">
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
