import { Stack, Text, chakra } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Contenu du MVP"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack width="100%" gap="1em">
      <Text>
        <Text as="b">MVP : </Text>
        <chakra.span>Minimum Viable Product</chakra.span>
      </Text>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Déjà, qu’est-ce que le MVP ? C’est le minimum viable product, c’est-à-dire
      la version du produit qui demande le minimum de fonctionnalités pour
      obtenir le maximim de feedbacks des clients.
    </Text>
    <Text></Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
