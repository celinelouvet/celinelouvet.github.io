import { Stack, Text } from '@chakra-ui/react';

import {
  Failure,
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from '@/components/core';

import { VerticalTimelineAfter } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Le début de la fin"
    alignContent="flex-start"
    column1={<VerticalTimelineAfter />}
    topRightCorner="Janvier 2019"
  >
    <Stack spacing="1em">
      <Failure variant="slide">Je suis épuisée.</Failure>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Je suis épuisée et pleine d’anxiétés.</Text>
    <Text>
      Heureusement, j’ai encore quelques mois de chômage devant moi, je vais
      essayer de me reposer.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
