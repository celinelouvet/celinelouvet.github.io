import { Stack, Text } from '@chakra-ui/react';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
  ThumbsDown,
} from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La roadmap"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="2em" width="100%" height="100%">
      <ThumbsDown variant="slide">Manque d’expérience en startup</ThumbsDown>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>C’est tendu, mais ça me parait jouable.</Text>
    <Text>Mais je sors d’ESN.</Text>
    <Text>
      Je suis habituée à ce qu’un client paie pour obtenir ce qu’il veut.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
