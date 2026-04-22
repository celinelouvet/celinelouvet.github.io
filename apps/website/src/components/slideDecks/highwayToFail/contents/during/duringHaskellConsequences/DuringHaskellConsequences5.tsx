import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaFlag } from 'react-icons/fa';

import {
  SlideContent,
  SlideContentTypes,
  SlideNote,
} from 'src/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Ce que j’aurais dû faire ?"
    alignContent="flex-start"
    column1={
      <React.Suspense fallback={<Loading />}>
        <VerticalTimelineDuring />
      </React.Suspense>
    }
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
        <Text>Admettez-vos erreurs.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      Mais dans ce genre de situation, il faut accepter de mettre son ego de
      côté et admettre son erreur et redresser la barre.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
