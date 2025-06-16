import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { Loading } from '../../../components/loading';

const VerticalTimelineDuring = React.lazy(() =>
  import('../components/VerticalTimelineDuring').then((module) => ({
    default: module.VerticalTimelineDuring,
  })),
);

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateurs"
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
        <Text>L’aide apportée n’est pas anodine.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

export const note = (
  <SlideNote>
    <Text>
      C’est pas nouveau, mais si l’établissement où vous avez fait votre
      formation a un incubateur, renseignez-vous ! L’aide apportée n’est pas
      anodine.
    </Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
