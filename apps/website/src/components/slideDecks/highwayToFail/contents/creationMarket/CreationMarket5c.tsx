import { Stack, Text, chakra } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="1em">
      <Text>Clients de type TPE et PME</Text>

      <Stack gap="0.5em">
        <chakra.span>Motivation éthique : 1 avis = 1 micro-don</chakra.span>
      </Stack>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>Et c’est aussi l’intéret de la motivation éthique.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
