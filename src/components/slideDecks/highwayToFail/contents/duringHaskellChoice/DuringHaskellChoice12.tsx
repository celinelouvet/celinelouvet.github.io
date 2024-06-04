import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFlag } from 'react-icons/fa';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/core';

import { VerticalTimelineDuring } from '../../components';

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithThinColumn}
    title="Pourquoi Haskell ?"
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
        <Text>Attention à la Hype Driven Development</Text>
      </Box>
    </Flex>
  </SlideContent>
);

const note = (
  <SlideNote>
    <Text>
      J’ai fait de la Hype Driven Development en choississant une techno qui
      m’attirait, mais sans réel besoin.
    </Text>
    <Text>Bref, méfiez-vous de la Hype.</Text>
  </SlideNote>
);

const slide = { content, note };
export default slide;
