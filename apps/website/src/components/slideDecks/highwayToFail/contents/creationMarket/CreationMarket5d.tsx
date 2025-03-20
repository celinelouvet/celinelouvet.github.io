import { Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import { BsArrowReturnRight } from 'react-icons/bs';

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
    <Stack gap="1em">
      <Text>Clients de type TPE et PME</Text>

      <Stack gap="0.5em">
        <chakra.span>Motivation éthique : 1 avis = 1 micro-don</chakra.span>

        <Flex alignItems="center" gap="0.5em" marginLeft="1em">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Déductible des impots de Fairvioo</chakra.span>
        </Flex>
      </Stack>
    </Stack>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      Petit bonus: les dons aux associations sont déductibles des impots sur le
      chiffre d’affaire.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
