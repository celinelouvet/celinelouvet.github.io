import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineAfter } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
  >
    <Stack spacing="1em">
      <ThumbsDown variant="slide">Manque de motivation généralisé</ThumbsDown>
      <ThumbsDown variant="slide">Manque d’argent</ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Celui qui est au RSA, n’a plus le choix et doit retrouver un emploi, ne
      serait-ce que pour manger.
    </Text>
    <Text>Celui qui était au chômage, va devoir faire pareil.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
