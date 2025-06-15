import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineCreation = React.lazy(() =>
  import('../components/VerticalTimelineCreation').then((module) => ({
    default: module.VerticalTimelineCreation,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="La déclaration"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineCreation />
      </React.Suspense>
    }
    topRightCorner="Mi-Décembre 2017"
  >
    <Flex height="100%" alignItems="center" gap="brand.300">
      <Box>
        <Icon as={FaFlag} boxSize="brand.400" color="brand.500" />
      </Box>
      <Box
        flex="1"
        color="brand.300"
        fontSize="brand.125"
        lineHeight="brand.200"
        textAlign="center"
      >
        <Text>Renseignez-vous de votre côté sur la procédure.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Donc un conseil important, renseignez-vous de votre côté sur la procédure.
    </Text>
    <Text>Peut-être que c’est le moment de faire intervenir un avocat ?</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
