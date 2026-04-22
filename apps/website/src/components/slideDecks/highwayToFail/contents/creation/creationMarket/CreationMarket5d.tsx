import { Flex, Icon, Stack, Text, chakra } from '@chakra-ui/react';
import * as React from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Nécessité de se démarquer"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Stack gap="brand.100">
      <Text>Clients de type TPE et PME</Text>

      <Stack gap="brand.50">
        <chakra.span>Motivation éthique : 1 avis = 1 micro-don</chakra.span>

        <Flex alignItems="center" gap="brand.50" marginLeft="brand.100">
          <Icon as={BsArrowReturnRight} />
          <chakra.span>Déductible des impots de Fairvioo</chakra.span>
        </Flex>
      </Stack>
    </Stack>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Petit bonus: les dons aux associations sont déductibles des impots sur le
      chiffre d’affaire.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
