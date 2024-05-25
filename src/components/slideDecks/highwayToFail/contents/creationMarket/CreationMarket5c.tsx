import { Stack, Text } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineCreation } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={<VerticalTimelineCreation />}
    topRightCorner="Mi-Dec. 2017"
  >
    <Stack spacing="1em">
      <Text>Clients de type TPE et PME</Text>

      <Stack spacing="0.5em">
        <Text as="span">Motivation éthique : 1 avis = 1 micro-don</Text>
      </Stack>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>Et c’est aussi l’intéret de la motivation éthique.</Text>
    <Text>
      Petit bonus: les dons aux associations sont déductibles des impots sur le
      chiffre d’affaire.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
