import { Stack, Text } from '@chakra-ui/react';

import { ThumbsUp } from '@/components/core';
import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
    alignContent="flex-start"
    topRightCorner="Mars 2018"
    column1={<VerticalTimelineDuring />}
  >
    <Stack width="100%" height="100%" gap="1em">
      <Text>Clever Cloud cherche à promouvoir l’hébergement de Haskell.</Text>
      <ThumbsUp variant="slide">Crédits gratuits.</ThumbsUp>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Ce qui va me permettre de profiter de crédits gratuits pour toute la durée
      du projet.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
