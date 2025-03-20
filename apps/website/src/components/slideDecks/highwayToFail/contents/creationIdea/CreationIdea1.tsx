import { Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="L’idée"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
  >
    <Text>Outil de récolte d’avis de clients pour les e‑commerces.</Text>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>En quoi consiste l’idée ?</Text>
    <Text>
      Fairvioo est un outil de récolte des avis des consommateurs, comme Avis
      Vérifiés, et bien d’autres.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
