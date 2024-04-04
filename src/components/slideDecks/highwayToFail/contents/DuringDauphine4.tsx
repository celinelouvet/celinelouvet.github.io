import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Incubateurs"
    alignContent="flex-start"
    column1={<VerticalTimelineDuring />}
  >
    <Flex height="100%" alignItems="center" gap="3em">
      <Box>
        <Icon as={FaFlag} boxSize="4em" color="brand.500" />
      </Box>
      <Box
        flex="1"
        color="brand.300"
        fontSize="1.25em"
        lineHeight="2em"
        textAlign="center"
      >
        <Text>L’aide apportée n’est pas anodine.</Text>
      </Box>
    </Flex>
  </SlideContent>
);

const note = (
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
