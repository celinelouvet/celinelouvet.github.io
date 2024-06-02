import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack spacing="1em">
      <Text>Clients de type TPE et PME</Text>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Fairvioo va viser les TPE et les PME</Text>
    <Text>
      Les concurrents fonctionnent par abonnement mensuel qui sont hors de prix
      pour les petits commerçants.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
